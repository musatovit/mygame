module.exports = {
  async up(queryInterface) {
    const themes = [
      { title: "Настолки", createdAt: new Date(), updatedAt: new Date() },
      { title: "Игра престолов", createdAt: new Date(), updatedAt: new Date() },
      { title: "Спорт", createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert("Themes", themes);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
