module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  });
  return Post;
};

