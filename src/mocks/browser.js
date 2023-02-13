import { setupWorker } from 'msw'
import { terminals } from './terminal'
import {login} from './login';

export const worker = setupWorker(...terminals,...login)