import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

//MODELS
import Profile from '../api/models/Profile';
import User from '../api/models/User';
import Note from '../api/models/Note';

const models = []; //NÃO ENTENDI O PQ DO ARRAY

class Database{
    constructor(){
        this.init();
    }
    
    init(){
        this.connection = new Sequelize(
            databaseConfig.database, 
            databaseConfig.username, 
            databaseConfig.password, 
            databaseConfig
            );

        //INICIANDO MODELS
        Profile.init(this.connection);
        User.init(this.connection);
        Note.init(this.connection); 

        //ASSOCIANDO MODELS
        Profile.associate(this.connection.models);
        User.associate(this.connection.models);
        Note.associate(this.connection.models);
    }
}

export default new Database();

