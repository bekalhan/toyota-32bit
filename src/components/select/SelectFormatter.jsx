import React,{useState} from 'react';
import {
     Select , OutlinedInput , MenuItem , Typography
} from '@mui/material';
import { useEffect } from 'react';

function SelectFormatter({name, select ,onChange , list , key , value , defaultName ,format}) {
  const [hg,setHg] = useState({lg:0,md:0,sm:0,xs:0});

  const splitFormat = () => {
    let arr = [];
    arr = format.split("-");
    setHg({lg:arr[0],md:arr[1],sm:arr[2],xs:arr[3]});
  }
  
  useEffect(()=>{
    if(select[name].length === 0){
      select[name].push(defaultName);
    }
    splitFormat();
  },[]);

  return (
  name !== undefined ? (
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
        sx={{height:{lg:`${hg.lg}px`,md:`${hg.md}px`,sm:`${hg.sm}px`,xs:`${hg.xs}px`}}}
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
     null
    )
  )
}

export default SelectFormatter;