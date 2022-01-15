import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { PORT } from './server';

export const runningMessage = (portNumber: number) =>
  `Server running at http://localhost:${portNumber}`;

const app: Application = express();

app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);
app.use(express.json());

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  )
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(runningMessage(PORT));
});

export default app;
