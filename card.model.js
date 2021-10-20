module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("card", {
      number: {
        type: Sequelize.STRING
      },
      initials: {
        type: Sequelize.STRING
      },
      action: {
        type: Sequelize.STRING
      },
      action: {
          type: Sequelize.IMAGE
      }

    });
  
    return Card;
  };
    