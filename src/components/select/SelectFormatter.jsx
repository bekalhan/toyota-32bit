import React,{useState} from 'react';
import {
     Select , OutlinedInput , MenuItem , Typography
} from '@mui/material';
import { useEffect } from 'react';

function SelectFormatter(params) {
  const [hg,setHg] = useState({lg:0,md:0,sm:0,xs:0});

  const splitFormat = () => {
    let arr = [];
    arr = params.format.split("-");
    setHg({lg:arr[0],md:arr[1],sm:arr[2],xs:arr[3]});
  }
  
  useEffect(()=>{
    if(params.select[params.name].length === 0){
      params.select[params.name].push(params.defaultName);
    }
    splitFormat();
  },[]);

  return (
  params.name !== undefined ? (
        <Select
        name={params.name}
        displayEmpty
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={params.select[params.name]}
        onChange={params.onChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
          return <Typography sx={{color:'#666666',fontSize:'14px'}}>{params.defaultName}</Typography>;
          }
          return selected.join(', ');
      }}
        sx={{height:{lg:`${hg.lg}px`,md:`${hg.md}px`,sm:`${hg.sm}px`,xs:`${hg.xs}px`}}}
      >
      <MenuItem disabled value="">
          <em>{params.defaultName}</em>
      </MenuItem>
        {params?.list?.map((e,index) => (
            <MenuItem
            key={index}
            value={e?.[params.value]}
            >
            {e?.[params.value]}
            </MenuItem>
        ))}
        </Select>
    ) : (
     null
    )
  )
}

export default SelectFormatter;