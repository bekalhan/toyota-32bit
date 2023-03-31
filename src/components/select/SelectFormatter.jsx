import React from 'react';
import {
     Select , OutlinedInput , MenuItem , Typography
} from '@mui/material';

function SelectFormatter({name, select ,onChange , list , key , value , defaultName}) {

    console.log("list : ",list);

  return (
    list !== undefined ? (
        <Select
        name={name}
        displayEmpty
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={select[name]}
        onChange={onChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
          return <Typography sx={{color:'#666666',fontSize:'14px'}}>{defaultName}</Typography>;
          }
          return selected.join(', ');
      }}
        sx={{height:'40px'}}
      >
      <MenuItem disabled value="">
          <em>{defaultName}</em>
      </MenuItem>
        {list?.map((e) => (
            <MenuItem
            key={e?.[key]}
            value={e?.[value]}
            >
            {e?.[value]}
            </MenuItem>
        ))}
      </Select>
    ) : (
        <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        input={<OutlinedInput />}
        sx={{height:'40px'}}
      >
      </Select>
    )
  )
}

export default SelectFormatter;