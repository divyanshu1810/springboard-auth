import { Request, Response } from 'express';
import database from '../loaders/database';
import bcrypt from 'bcrypt';

export const handleLoginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const collection = await database().then(db => db.collection('users-details'));
    const response = await collection.findOne({ email: req.body.email });
    if (!response) {
      res.send({ statusCode: 409, message: 'User does not exists.' });
    }
    const result = bcrypt.compareSync(req.body.password, response.password);
    if (result) {
      res.status(200).send('User logged in successfully.');
    }
    res.send({ statusCode: 409, message: 'Invalid Credentials' });
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || 'Internal server error');
  }
};
