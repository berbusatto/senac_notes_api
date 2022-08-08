const {
  Model,
  DataTypes
} = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Profile, {
      foreignKey: 'profileId',
      as: 'profile'
    });
    this.hasMany(models.Note, {
      foreignKey: 'userId',
      as: 'note'
    });
  }

}

module.exports = User;