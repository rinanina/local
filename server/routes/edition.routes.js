const { Router } = require('express');
const Slide = require('../models/Slide');
const Zine = require('../models/Zine');
const auth = require('../middleware/auth.middleware');
const config = require('config');
const router = Router();

const MAX_TITLE_LENGTH = 60;
const MIN_TITLE_LENGTH = 60;

router.post('/create', auth, async (req, res) => {
  try {
    //const baseUrl = config.get('baseUrl');
    const { type, title, status, slides } = req.body;

    const existing = await Zine.findOne({ title });

    if (existing) {
      return res.status(400).json({ message: 'Title already exist' });
    }

    if (title.length > MAX_TITLE_LENGTH) {
      return res.status(400).json({
        message: `Title length should be less than ${MAX_TITLE_LENGTH + 1}`,
      });
    }

    if (title.length < MIN_TITLE_LENGTH) {
      return res.status(400).json({
        message: `Title length should be more than ${MIN_TITLE_LENGTH}`,
      });
    }

    const edition = new Zine({
      // type, remove
      title,
      // status, remove
      slides,
      // date add
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
    const zines = await Zine.find();
    res.json(zines);
  } catch (e) {
    console.log('e', e);
    res
      .status(500)
      .json({ message: 'Something went wrong, please, try later.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const zine = await Zine.findById(req.params.id);
    res.json(zine);
  } catch (e) {
    console.log('e', e);
    res
      .status(500)
      .json({ message: 'Something went wrong, please, try later.' });
  }
});

module.exports = router;
