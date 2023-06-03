import React,{useState} from 'react';
import { Box,Stack,FormControl,MenuItem,Select } from '@mui/material';
import { useEffect } from 'react';

const months = [1,2,3,4,5,6,7,8,9,10,11,12];

function Date({formik}) {
    //react usestate
    const [day,SetDays] = useState([]);
    const [year,setYears] = useState([formik?.values.year]);

    //react useeffect
    useEffect(()=>{
      let recent = changeDay(formik?.values.month);
      setAllDay(recent);
      setAllYears();
    },[formik.values.month]);

    useEffect(()=>{
      let recent = changeDay(formik?.values.month);
      setAllDay(recent);
    },[formik?.values.year])

    //set day number according to selected month
    const changeDay =  (month) =>{
      let daynumber = 0;
        if( month === 1 || month === 3|| month === 5 || month === 7 || month === 8 || month === 10|| month === 12){
          daynumber = 31;
        }else if(month === 4 || month === 6 || month === 9 || month === 11){
          daynumber = 30;
        }else if(month === 2){
          if(formik?.values.year!==""){
              if(formik?.values.year % 4 === 0){
                daynumber = 29;
              }else{
                daynumber = 28;
              }
          }
        }
        return daynumber;
    }

    //set days
    const setAllDay = (dayNumber) =>{
        SetDays('');
        if(dayNumber!=0){
            for(let i=1;i<dayNumber+1;i++){
              SetDays((day)=>[
                  ...day,
                  i
              ]);
          }
        }else{
          SetDays([]);
        }
    }

    //set years
    const setAllYears = () =>{
      if(year.length < 2){
      for(let i=1937;i<2023;i++){
        setYears((year)=>[
          ...year,
          i
        ]);
      }
      }

    }

  return (
    <Stack direction='row'>
             <Box sx={{height:'50px'}}>
              {/* DAY */}
              <FormControl sx={{marginTop:{lg:'0.6em',md:'0.6em',sm:'0.3em'}}}>
                        <Select
                        value={formik.values.day}
                        onChange={formik.handleChange("day")}
                        onBlur={formik.handleBlur("day")}
                        sx={{height:{lg:'55px',md:'55px',sm:'42px',xs:'40px'},marginTop:{lg:'0',md:'0',sm:'10px',xs:'10px'}}}
                        >
                    {day?.map((el)=>(
                        <MenuItem value={el} key={el}>{el}</MenuItem>
                    ))}
                        </Select>
                </FormControl>
            </Box>
            <Box>
                {/* MONTH */}
                <FormControl sx={{marginTop:{lg:'0.6em',md:'0.6em',sm:'1em'},marginLeft:'1em'}}>
                        <Select
                        value={formik.values.month}
                        onChange={formik.handleChange("month")}
                        onBlur={formik.handleBlur("month")}
                        sx={{height:{lg:'55px',md:'55px',sm:'40px',xs:'40px'},marginTop:{lg:'0',md:'0',sm:'0px',xs:'10px'}}}
                        >
                        {months?.map((month)=>(
                          <MenuItem value={month} key={month}>{month}</MenuItem>
                        ))}
                        </Select>
                </FormControl>
            </Box>
            <Box>
                  {/* YEAR */}
                  <FormControl sx={{height:{lg:'80px'},marginTop:{lg:'0.6em',md:'0.6em',sm:'0.3em'},marginLeft:'1em'}}>
                              <Select
                              value={formik.values.year}
                              onChange={formik.handleChange("year")}
                              onBlur={formik.handleBlur("year")}
                              sx={{height:{lg:'55px',md:'55px',sm:'40px',xs:'40px'},marginTop:{lg:'0',md:'0',sm:'10px',xs:'10px'}}}
                              >
                              {year?.map((year)=>(
                                <MenuItem value={year} key={year}>{year}</MenuItem>
                              ))}
                              </Select>
                      </FormControl>
            </Box>
    </Stack>
  )
}
export default Date;