import { NextFunction, Request, Response } from 'express';
import { loginschema } from '../models/loginschema';

export const checkloginuser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await loginschema.validate(req.body);
    next();
  } catch (error) {
    res.json({ statusCode: 421, message: error.message });
  }
};
