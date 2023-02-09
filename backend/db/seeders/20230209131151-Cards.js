module.exports = {
  async up(queryInterface) {
    const cards = [
      {
        question:
          " Какая настольная игра состоит из 40 пространств, содержащих 28 объектов, четыре железных дороги, две коммунальные услуги, три служебных помещения, три служебных сундука, пространство налога на роскошь, пространство подоходного налога и четыре угловых квадрата: GO, тюрьма, бесплатная парковка и Сесть в тюрьму?",
        answer: "Монополия",
        themeId: 1,
        score: 200,
      },
      {
        question:
          "Какой размер сетки в игре Scrabble - 15 х 15, 16 х 16 или 17 х 17?",
        answer: "15 х 15",
        themeId: 1,
        score: 400,
      },
      {
        question:
          "Какое максимальное количество людей может сыграть в игру «Мышеловка» - два, четыре или шесть?",
        answer: "4",
        themeId: 1,
        score: 600,
      },
      {
        question:
          "Для этой игры нужны только 2 листка бумаги и 2 ручки, но тихо поиграть не получится",
        answer: "Морской бой",
        themeId: 1,
        score: 800,
      },
      {
        question:
          "Данная игра имеет более 50ти версий и дополнений, позволяет снаряжать и прокачивать персонажа и подразумевает подлянки соперникам",
        answer: "Манчкин",
        themeId: 1,
        score: 1000,
      },
      {
        question:
          "Мастера монет Лорда Петра Баелиша также знали под каким именем?",
        answer: "Мизинец",
        themeId: 1,
        score: 200,
      },
      {
        question: "Какое настоящее имя Ходора?",
        answer: "Уилис",
        themeId: 1,
        score: 400,
      },
      {
        question:
          "У Дейенерис есть 3 дракона, двух из них зовут Дрогон и Рейгал, как зовут другого?",
        answer: "Визерион",
        themeId: 1,
        score: 600,
      },
      {
        question: "Как умерла дочь Серсеи, Мирцелла?",
        answer: "Отравление",
        themeId: 1,
        score: 800,
      },
      {
        question: "Как зовут Лютоволка Джона Сноу?",
        answer: "призрак",
        themeId: 1,
        score: 1000,
      },
      {
        question: "Сколько игроков в команде по водному поло?",
        answer: "7",
        themeId: 1,
        score: 200,
      },
      {
        question: "В каком виде спорта отличился Нил Адамс?",
        answer: "Дзюдо",
        themeId: 1,
        score: 400,
      },
      {
        question:
          "Какая страна выиграла чемпионат мира 1982 года в Испании, победив Западную Германию со счетом 3: 1?",
        answer: "Италия",
        themeId: 1,
        score: 600,
      },
      {
        question: "Какую спортивную игру Джеймс Нейсмит изобрел в 1891 году?",
        answer: "Баскетбол",
        themeId: 1,
        score: 800,
      },
      {
        question: "Сколько игроков в олимпийской команде по керлингу?",
        answer: "4",
        themeId: 1,
        score: 1000,
      },
    ];
    const data = cards.map((el) => ({
      question: el.question,
      answer: el.answer,
      themeId: el.themeId,
      score: el.score,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Cards", data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
