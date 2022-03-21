import Sequelize from 'sequelize';
import { sequelize } from '../utils/data.conection';
import Users from './model.users';

const Person = sequelize.define('person', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    city: {
        type: Sequelize.STRING(100),
        allowNull: false
    }

});

Person.hasMany(Users, {
    foreignKey: 'idUser',
    sourceKey: 'id'
});

Users.belongsTo(Person, {
    foreignKey: 'idUser',
    sourceKey: 'id'
})

export default Person;