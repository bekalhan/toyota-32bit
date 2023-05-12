import React from 'react';
import {Grid,FormControl} from '@mui/material';
import {useParams} from 'react-router-dom';
import { getSpeTerminal } from "../../../../redux/slices/terminalSlices";
import {useRedux} from '../../../../hooks/useRedux';
import SelectFormatter from '../../../../components/select/SelectFormatter';
import {useSelect} from '../../../../hooks/useSelect';
import Loading from '../../../../utils/loading/Loading';
import '../../../../index.css';
import {useTranslation} from 'react-i18next';


function TerminalList() {
    //use react router params
    const params = useParams();

    const {t} = useTranslation();

    let terminal = useRedux({name:"terminals",data:"terminal",slice:getSpeTerminal(params)});
    const [select,setSelect] = useSelect({personName:[]});

  return (
    terminal !== undefined ?
    <Grid container>
    <Grid item lg={0.1} md={0.3} sm={0.5} xs={0.5}></Grid>
    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
        <div sx={{fontWeight:'bold',marginTop:'0.6rem'}} className='txt'>{t('terminallistesi')}</div>
    </Grid>
    <Grid item lg={7.5} md={7.5} sm={7.2} xs={7.5}>
        {/* select dropdown */}
        <FormControl className='txt-field'>
                    <SelectFormatter name={"personName"}
                      select={select} onChange={setSelect}
                        list={terminal?.Response?.data}
                        value={"termName"} defaultName={terminal?.Response?.data[0]?.termName} format={"50-50-40-40"} />
                </FormControl>
        {/* select dropdown end */}
    </Grid>
</Grid> : <Loading />
  )
}
export default TerminalList;