import { Router } from 'express';
import { checkcreateuser } from '../middlewares/checkcreateuser';
import { handleCreateUser } from '../controllers/handlecreateuser';

const signup = Router();

signup.post('/', checkcreateuser, handleCreateUser);

export default signup;
