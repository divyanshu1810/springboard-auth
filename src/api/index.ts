import { Router } from 'express';
import signup from '../routes/signup';
import login from '../routes/login';

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use('/signup', signup);
  app.use('/login', login);

  return app;
};
