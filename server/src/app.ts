import path from 'path';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';

export const runningMessage = (portNumber: number) =>
  `Server running at http://localhost:${portNumber}`;

const app: Application = express();

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'media-amazon.com'],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
      imgSrc: ['m.media-amazon.com']
    }
  })
);

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:8000'
  })
);

app.use(express.static(path.join(__dirname, '..', 'public')));

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
  res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

export default app;
