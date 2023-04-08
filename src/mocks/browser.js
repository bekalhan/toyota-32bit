import { setupWorker } from 'msw'
import { terminals } from './terminal'
import {login} from './login';
import {error} from './error';
import {font} from './font';
import {errorList} from './errorList';


export const worker = setupWorker(...terminals,...login,...error,...font,...errorList);