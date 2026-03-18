<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
      margin: 0;
      padding: 0;
      width: 300px;
      background: #0f172a;
      color: white;
    }

    .container {
      padding: 16px;
    }

    .title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .card {
      background: #1e293b;
      padding: 12px;
      border-radius: 10px;
      margin-bottom: 12px;
    }

    .price {
      font-size: 18px;
      font-weight: bold;
      color: #22c55e;
    }

    button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background: #22c55e;
      color: black;
      font-weight: 600;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.9;
    }

    .status {
      font-size: 13px;
      opacity: 0.8;
      margin-top: 8px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="title">💸 Smart Price Checker</div>

    <div class="card">
      <div id="productName">No product detected</div>
      <div class="price" id="price"></div>
    </div>

    <button id="checkBtn">Check for Better Deals</button>

    <div class="status" id="status"></div>
  </div>

  <script src="popup.js"></script>
</body>
</html>
