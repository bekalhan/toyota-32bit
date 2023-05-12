import React from 'react';
import { styled } from '@mui/material/styles';
import { FormControl  , NativeSelect , InputBase} from '@mui/material'


function NrReason({control,list,defaultValue}) {

    const BootstrapInput = styled(InputBase)(({ theme }) => ({ 
        'label + &': {
          marginTop: theme.spacing(0),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 12,
          fontWeight: '500',
          paddingLeft:'0.3em',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }));

  return (
    control ?
    <FormControl variant="standard">
    <NativeSelect
      id="demo-customized-select-native"
      // value={age}
      // onChange={handleChange}
      input={<BootstrapInput />}
      size='small'
      sx={{height:'20px',width:'120px'}}
    >
    <option value="default">{defaultValue?.nrReasonAbb}</option>
    {list?.map((el)=>(
      <option value={el.nrId} key={el.nrId}>{el?.nrReasonAbb}</option>
    ))}
    </NativeSelect>
  </FormControl> :     
      <FormControl variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          input={<BootstrapInput />}
          size='small'
          sx={{height:'20px',width:'120px'}}
        >
        </NativeSelect>
      </FormControl>
  )
}
export default NrReason;