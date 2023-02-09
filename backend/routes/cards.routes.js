const router = require('express').Router();
const { Card, Theme } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll({
      include: {
        model: Theme,
        key: 'themeId',
      },
    });
    const newCards = cards.map((el) => ({
      id: el.id,
      question: el.question,
      answer: el.answer,
      score: el.score,
      theme: el.Theme.title,
    }));
    res.json(newCards);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
