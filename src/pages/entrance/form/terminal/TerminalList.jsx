import React,{useState,useEffect} from 'react';
import {
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,OutlinedInput
} from '@mui/material';
import {useParams} from 'react-router-dom';
import { getSpeTerminal } from "../../../../redux/slices/terminalSlices";
import {useRedux} from '../../../../hooks/useRedux';

function TerminalList() {
    const [personName, setPersonName] = useState([]);
    const [defaultName, setDefaultName] = useState('');

    //use react router params
    const params = useParams();

    let terminal = useRedux({name:"terminals",data:"terminal",slice:getSpeTerminal(params)});

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    const setName = () =>{
        setDefaultName(terminal?.data?.Response?.filter_data[0]?.termName);
    }

    useEffect(()=>{
        setName();
    },[terminal]);

  return (
    <Grid container>
    <Grid item lg={1.6} md={1.6} sm={1.5} xs={0.5}></Grid>
    <Grid item lg={2.3} md={2.3} sm={2.6} xs={3}>
        <Typography sx={{fontWeight:'bold',marginTop:'0.6rem'}}>Terminal Listesi</Typography>
    </Grid>
    <Grid item lg={7.5} md={7.5} sm={7.2} xs={7.5}>
        {/* select dropdown */}
        <FormControl sx={{ width:{lg:'550px',md:'400px',sm:'360px',xs:'320px'}}}>
                    <Select
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                        return <em>{defaultName}</em>;
                        }

                        return selected.join(', ');
                    }}
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{height:{lg:'50px',md:'50px',sm:'40px',xs:'40px'}}}
                    >
                    <MenuItem disabled value="">
                        <em>{defaultName}</em>
                    </MenuItem>
                    {terminal?.data?.Response?.filter_data?.map((e) => (
                        <MenuItem
                        key={e?.termName}
                        value={e?.termName}
                        >
                        {e?.termName}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
        {/* select dropdown end */}
    </Grid>
</Grid>
  )
}

export default TerminalList;