import { NextFunction, Request, Response } from 'express';
import { signupschema } from '../models/signupschema';

export const checkcreateuser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await signupschema.validate(req.body);
    next();
  } catch (error) {
    res.json({ statusCode: 421, message: error.message });
  }
};
