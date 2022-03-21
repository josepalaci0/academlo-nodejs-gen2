import { json } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import person from './routers/rotute.person';
import users from './routers/route.users';
import { sequelize } from './utils/data.conection';

const app = express();

app.use(morgan('dev'));
app.use(json());

app.use('/api/v1/ToDos/person', person);
app.use('/api/v1/ToDos/users', users);

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((error) => console.log(error));

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((error) => console.log(error));

export default app;
