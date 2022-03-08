import { Sequelize } from 'sequelize';
import { sequelize } from '../utils/data.conection';

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    typeUser:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    dateRegistration:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    assignedUser:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    status:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    idUser:{
        type: Sequelize.INTEGER,
        allowNull: false        
    }
});

export default Users;
