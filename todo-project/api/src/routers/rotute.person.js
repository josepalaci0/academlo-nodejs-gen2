import { Router } from 'express';
const router = Router();
import {
  getAllPerson,
  createPerson,
  getOnePerson,
  updatePerson
} from '../controllers/controller.person';

router.get('/', getAllPerson);

router.get('/:id', getOnePerson);

router.post('/', createPerson);

router.put('/:id', updatePerson);

export default router;
