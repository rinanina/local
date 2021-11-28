const { Router } = require('express');
//const User = requier('../models/User');
const bcryptjs = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const router = Router();
const config = require('config');

const jwt = require('jsonwebtoken');

// /api/auth/register
router.post(
  '/register',

  [
    check('email', 'Incorect email').isEmail(),
    check('password', 'Password lenght should be more 6 symbols').isLength({
      min: 6,
    }),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data',
        });
      }
      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).status({ message: 'Such email already exist' });
      }

      const hashedPassword = await bcryptjs.hash(password, 1);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'User created' });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try it again' });
    }
  }
);

// /api/auth/login
router.post(
  '/login',

  [
    check('email', 'Incorect email').normalizeEmail().isEmail(),
    check('password', 'Enter ypur password').exists(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect login data',
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) {
        return res.status.json({
          message: 'Incorect password, please try again',
        });
      }

      //JWT TOKEN AUTH

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try it again' });
    }
  }
);

module.exports = router;
