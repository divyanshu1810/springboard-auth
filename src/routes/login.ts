import { Router } from 'express';
import { checkloginuser } from '../middlewares/checkloginuser';
import { handleLoginUser } from '../controllers/handleloginuser';

const login = Router();

login.post('/', checkloginuser, handleLoginUser);

export default login;
