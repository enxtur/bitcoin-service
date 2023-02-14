import { NextFunction, Request, RequestHandler, Response } from "express";
import Joi from "joi";

export const validate = (schema: Joi.ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.method === "GET" ? req.query: req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
}