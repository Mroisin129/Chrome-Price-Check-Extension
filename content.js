function getProductInfo() {
  let title = null;
  let price = null;

  // 1. Try structured data (JSON-LD)
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  scripts.forEach(script => {
    try {
      const data = JSON.parse(script.innerText);
      if (data["@type"] === "Product") {
        title = data.name || title;
        price = data.offers?.price || price;
      }
    } catch (e) {}
  });

  // 2. Try meta tags
  if (!title) {
    title = document.querySelector('meta[property="og:title"]')?.content;
  }

  if (!price) {
    price = document.querySelector('meta[property="product:price:amount"]')?.content;
  }

  // 3. Fallback guesses
  if (!title) {
    title = document.querySelector("h1")?.innerText;
  }

  if (!price) {
    const priceEl = document.querySelector(
      '[class*="price"], [id*="price"], .price, .product-price'
    );
    price = priceEl?.innerText;
  }

  return { title, price };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_PRODUCT") {
    sendResponse(getProductInfo());
  }
});
