const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bot aktif ✅");
});

app.listen(PORT, () => {
  console.log(`🌐 Ping sunucusu çalışıyor: http://localhost:${PORT}`);
});
