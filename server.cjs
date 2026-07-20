const express = require('express');
const multer = require('multer');
const path = require('path');

const upload = multer({ dest: 'uploads/' });
const app = express();
const adsList = [];

app.use(express.static(path.join(__dirname)));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/ads', upload.single('banner'), (req, res) => {
    const title = req.body ? req.body.title : null;
    const targetUrl = req.body ? req.body.targetUrl : null;
    const budget = req.body ? req.body.budget : null;
    const cpc = req.body ? req.body.cpc : null;
    const bannerFile = req.file ? req.file.path : null;

    if (!title || !targetUrl || !budget || !cpc) {
        return res.status(400).json({ error: 'Please fill all required fields' });
    }

    const newAd = {
        id: Date.now(),
        title,
        targetUrl,
        budget: Number(budget),
        cpc: Number(cpc),
        banner: bannerFile,
        createdAt: new Date()
    };

    adsList.push(newAd);

    res.status(201).json({
        message: 'Ad successfully created with banner!',
        ad: newAd
    });
});

app.get('/api/ads', (req, res) => {
    res.json(adsList);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Platform Online on port ' + PORT);
});

