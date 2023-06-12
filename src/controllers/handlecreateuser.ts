import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import database from '../loaders/database';

export const handleCreateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const collection = await database().then(db => db.collection('users-details'));
    const response = await collection.findOne({ email: req.body.email });
    if (response) {
      throw { statusCode: 409, message: 'User already exists.' };
    }

    const saltRounds = 10; // Replace with your desired number of salt rounds
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    await collection.insertOne({ email: req.body.email, password: hash, name: req.body.name });
    res.status(201).send('User created successfully.');
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || 'Internal server error');
  }
};
