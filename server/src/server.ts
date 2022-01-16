import * as http from 'http';
import CommonRoutesConfig from './common/common.routes.config';
import debug from 'debug';
import app, { runningMessage } from './app';
import MoviesRoutes from './movies/movies.routes.config';

export const PORT = 8000;

const server: http.Server = http.createServer(app);
const debugLog: debug.IDebugger = debug('app');

//keep track for routes files(debugging purposes)
const routes: Array<CommonRoutesConfig> = [];

routes.push(new MoviesRoutes(app));

server.listen(PORT, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage(PORT));
});
