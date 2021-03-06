const { Router } = require('express');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const router = Router();
const config = require('config');

const jwt = require('jsonwebtoken');

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Incorrect email.').isEmail(),
    check('password', 'Password length should be more 6 symbols.').isLength({
      min: 6,
    }),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (errors.errors.length) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data.',
        });
      }
      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: 'Email already exists.' });
      }

      const hashedPassword = await bcryptjs.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'User created.' });
    } catch (e) {
      console.log('e', e);
      res.status(500).json({ message: 'Something went wrong, please, try later.' });
    }
  }
);

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Incorrect email.').normalizeEmail().isEmail(),
    check('password', 'Enter your password.').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (errors.errors.length) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Password or email is invalid.',
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Password or email is invalid.' });
      }

      const isPassMatch = await bcryptjs.compare(password, user.password);

      if (!isPassMatch) {
        return res.status(400).json({
          message: 'Password or email is invalid.',
        });
      }

      //JWT TOKEN AUTH

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json({ token, userId: user.id, message: 'Welcome! You are logged in.' });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try later.' });
    }
  }
);

module.exports = router;
