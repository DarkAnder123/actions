import { NextFunction, Request, Response } from 'express';

export interface IBooksControllerInterface {
	getAllBooks: (req: Request, res: Response, next: NextFunction) => void;
	getBook: (req: Request, res: Response, next: NextFunction) => void;
	deleteBook: (req: Request, res: Response, next: NextFunction) => void;
}
