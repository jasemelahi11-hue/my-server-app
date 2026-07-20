const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// مسیر فایل برای ذخیره کلیک‌ها
const logFilePath = path.join(__dirname, 'clicks.json');

app.use(express.json());

// مسیر اصلی
app.get('/', (req, res) => {
  res.status(200).send('CPC Tracking Platform is Active.');
});

// مسیر اصلی ردیابی
app.get('/click', (req, res) => {
  const { adId } = req.query;

  // ۱. اعتبارسنجی ورودی
  if (!adId || adId.trim() === "") {
    return res.status(400).json({ error: 'Invalid or missing adId' });
  }

  // ۲. آماده‌سازی داده‌ها
  const clickEntry = {
    adId: adId,
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent']
  };

  // ۳. ذخیره در فایل (به صورت Append)
  fs.appendFile(logFilePath, JSON.stringify(clickEntry) + '\n', (err) => {
    if (err) {
      console.error('Failed to log click:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  console.log(`Click captured: ${adId}`);
  
  // ۴. پاسخ به کاربر (مثلاً هدایت به مقصد نهایی)
  res.status(200).json({ status: 'tracked', adId });
});

// مدیریت مسیرهای اشتباه
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
