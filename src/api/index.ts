import { Router } from 'express';
import signup from '../routes/signup';

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use('/signup', signup);

  return app;
};
