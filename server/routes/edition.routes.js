const { Router } = require('express');
const Slide = require('../models/Slide');
const Edition = require('../models/Edition');
const auth = require('../middleware/auth.middleware');
const config = require('config');
const router = Router();

const MAX_TITLE_LENGHT = 60;

router.post('/create', auth, async (req, res) => {
  try {
    //const baseUrl = config.get('baseUrl');
    const { type, title, status, slides } = req.body;

    const existing = await Edition.findOne({ title });

    if (existing) {
      return res.status(400).json({ message: 'Title already exist' });
    }

    if (title.lenght > MAX_TITLE_LENGHT) {
      return res.status(400).json({
        message: `Title lenght should be less than ${MAX_TITLE_LENGHT}`,
      });
    }

    const edition = new Edition({
      type,
      title,
      status,
      slides,
    });

    await edition.save();

    res.status(201).json({ edition });
  } catch (e) {
    console.log('e', e);
    res
      .status(500)
      .json({ message: 'Something went wrong, please, try later.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const editions = await Edition.find();
    res.json(editions);
  } catch (e) {
    console.log('e', e);
    res
      .status(500)
      .json({ message: 'Something went wrong, please, try later.' });
  }
});

router.post('/:id', async (req, res) => {
  try {
    const edition = await Edition.findByID(req.params.id);
    res.json(edition);
  } catch (e) {
    console.log('e', e);
    res
      .status(500)
      .json({ message: 'Something went wrong, please, try later.' });
  }
});

module.exports = router;
