import React,{useState,useEffect} from 'react';
import {Grid,Typography,FormControl} from '@mui/material';
import {useParams} from 'react-router-dom';
import { getSpeTerminal } from "../../../../redux/slices/terminalSlices";
import {useRedux} from '../../../../hooks/useRedux';
import SelectFormatter from '../../../../components/select/SelectFormatter';
import {useSelect} from '../../../../hooks/useSelect';

function TerminalList() {
    //use react router params
    const params = useParams();

    let terminal = useRedux({name:"terminals",data:"terminal",slice:getSpeTerminal(params)});
    const [select,setSelect] = useSelect({personName:[]});

  return (
    <Grid container>
    <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
        <Typography sx={{fontWeight:'bold',marginTop:'0.6rem'}}>Terminal Listesi</Typography>
    </Grid>
    <Grid item lg={7.5} md={7.5} sm={7.2} xs={7.5}>
        {/* select dropdown */}
        <FormControl sx={{ width:{lg:'550px',md:'400px',sm:'360px',xs:'320px'}}}>
                    <SelectFormatter name={"personName"}
                      select={select} onChange={setSelect}
                        list={terminal?.data?.Response?.filter_data} key={"termName"}
                        value={"termName"} defaultName={terminal?.data?.Response?.filter_data[0]?.termName} />
                </FormControl>
        {/* select dropdown end */}
    </Grid>
</Grid>
  )
}
export default TerminalList;