import * as express from 'express';

export const getErrorPage = exports.get404 = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send(`<h1>Page not found!</h1>`);
};