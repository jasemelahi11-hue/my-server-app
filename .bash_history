curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
curl -X POST http://localhost:3000/add-ad -H "Content-Type: application/json" -d '{"title": "test", "link": "test.com", "cost": 500}'
node server.cjs &
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
rm server.cjs
printf "const express = require('express');\nconst app = express();\napp.use(express.json());\napp.post('/add-ad', (req, res) => {\n  console.log('Received:', req.body);\n  res.json({ message: 'Success' });\n});\napp.listen(3000, () => console.log('Platform Online'));" > server.cjs
node server.cjs
rm server.cjs
printf "const express = require('express');\nconst app = express();\napp.use(express.json());\napp.post('/add-ad', (req, res) => {\n  console.log('Received:', req.body);\n  res.json({ message: 'Success' });\n});\napp.listen(3000, () => console.log('Platform Online'));" > server.cjs
node server.cjs
exit
curl -X POST http://localhost:3000/add-ad -H "Content-Type: application/json" -d '{"title": "test", "link": "test.com", "cost": 500}'
pm2 start server.cjs --name server
exiat
exit
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
cat server.cjs
rm server.cjs
nano server.cjs
node server.cjs
exit
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
node server.cjs
exit
curl "http://localhost:3000/get-ads?owner=Test_User"
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
node server.cjs
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
exit
curl "http://localhost:3000/get-ads?owner=Test_User"
nano server.cjs
node server.cjs
curl "http://localhost:3000/get-ads?owner=Test_User"
nano server.cjs
pm2 restart server
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "تبلیغ تستی", "link": "https://google.com", "cost": 500}'
pm2 delete server
node server.cjs
nano server.cjs
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
nano server.cjs
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
curl -X POST http://localhost:3000/add-ad   -H "Content-Type: application/json"   -d '{"title": "test", "link": "test.com", "cost": 500}'
exit
