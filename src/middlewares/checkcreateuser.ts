import { NextFunction, Request, Response } from 'express';
import { userschema } from '../models/user';

export const checkcreateuser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await userschema.validate(req.body);
    next();
  } catch (error) {
    res.json({ statusCode: 421, message: error.message });
  }
};
