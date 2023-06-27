import { setupWorker } from 'msw'
import { terminals } from './terminal'
import {login} from './login';
import {defect} from './defect';
import {font} from './font';
import {defectList} from './defectList';


export const worker = setupWorker(...terminals,...login,...defect,...font,...defectList);