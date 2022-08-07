const { Model, Datatypes, DataTypes } = require('sequelize');

class Profile extends Model{
    static init(sequelize){
        super.init(
            {
                name: DataTypes.STRING,
            }, 
            {
                sequelize,
            }
        );
    }

    //RELACIONAMENTO ENTRE ENTIDADES
    static associate(models){
        this.hasMany(models.User, {foreignKey: 'profileId', as: 'user'})
    }
}
module.exports = Profile;