import { setupWorker } from 'msw'
import { terminals } from './terminal'
import {login} from './login';
import {error} from './error';
import {font} from './font';

export const worker = setupWorker(...terminals,...login,...error,...font);