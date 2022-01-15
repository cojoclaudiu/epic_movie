import CommonRoutesConfig from '../common/common.routes.config';
import { Application, NextFunction, request, Request, Response } from 'express';
import getMovieData from '../model/movie.model';

class MoviesRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'MoviesRoutes');
  }

  movieId(req: Request) {
    return req.params.movieId;
  }

  configureRoutes(): Application {
    this.app.route('/api/v1/movies').get(async (req: Request, res: Response) => {
      res.status(200).send(await getMovieData());
    });

    this.app
      .route('/api/v1/movies/:movieId')
      .all((req: Request, res: Response, next: NextFunction) => {
        // this middleware function runs before any request to /users/:userId
        // but it doesn't accomplish anything just yet---
        // it simply passes control to the next applicable function below using
        next();
      })
      .get((req: Request, res: Response) => {
        res.status(200).send(`GET requested for id ${this.movieId(req)}`);
      })
      .put((req: Request, res: Response) => {
        res.status(201).send(`PUT requested for id ${this.movieId(req)}`);
      })
      .patch((req: Request, res: Response) => {
        res.status(200).send(`PUT requested for id ${this.movieId(req)}`);
      })
      .delete((req: Request, res: Response) => {
        res.status(200).send(`DELETE requested for id ${this.movieId(req)}`);
      });

    return this.app;
  }
}

export default MoviesRoutes;
