import { Router } from 'express';
const router = Router();

import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  getUsersByPerson
} from '../controllers/controller.users';

router.post('/', createUser);
router.get('/', getAllUsers);

router.get('/:id', getOneUser);
router.put('/:id', updateUser);
//--> /api/v1/ToDos/users/person
router.get('/person/:idUser', getUsersByPerson);

export default router;
