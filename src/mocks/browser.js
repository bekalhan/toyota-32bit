import { setupWorker } from 'msw'
import { terminals } from './terminal'
import {login} from './login';
import {error} from './error';

export const worker = setupWorker(...terminals,...login,...error);