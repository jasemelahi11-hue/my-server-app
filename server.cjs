const express = require('express');
const app = express();
app.use(express.json());
app.post('/add-ad', (req, res) => {
  console.log('Received:', req.body);
  res.json({ message: 'Success' });
});
app.listen(3000, () => console.log('Platform Online'));