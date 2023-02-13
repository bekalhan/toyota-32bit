import React,{useState} from 'react';
import { Box,Stack,FormControl,InputLabel,MenuItem,Select,NativeSelect } from '@mui/material';
import { useEffect } from 'react';


const months = [1,2,3,4,5,6,7,8,9,10,11,12];

function Date({formik}) {
    //react usestate
    const [day,SetDays] = useState([]);
    const [year,setYears] = useState([formik?.values.yil]);

    //react useeffect
    useEffect(()=>{
      let recent = changeDay(formik?.values.ay);
      setAllDay(recent);
      setAllYears();
    },[formik.values.ay]);

    useEffect(()=>{
      let recent = changeDay(formik?.values.ay);
      setAllDay(recent);
    },[formik?.values.yil])

    //functions
    const changeDay =  (month) =>{
      let daynumber = 0;
        if( month === 1 || month === 3|| month === 5 || month === 7 || month === 8 || month === 10|| month === 12){
          daynumber = 31;
        }else if(month === 4 || month === 6 || month === 9 || month === 11){
          daynumber = 30;
        }else if(month === 2){
          if(formik?.values.yil!==""){
              if(formik?.values.yil % 4 == 0){
                daynumber = 29;
              }else{
                daynumber = 28;
              }
          }
        }
        return daynumber;
    }

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

    const setAllYears = () =>{
      for(let i=1937;i<2024;i++){
        setYears((year)=>[
          ...year,
          i
        ]);
      }
    }

  return (
    <Stack direction='row'>
             <Box>
              <FormControl sx={{marginTop:{lg:'0.6em',md:'0.6em'},display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.gun}
                        onChange={formik.handleChange("gun")}
                        onBlur={formik.handleBlur("gun")}
                        >
                    {day?.map((el)=>(
                        <MenuItem value={el}>{el}</MenuItem>
                    ))}
                        </Select>
                </FormControl>
                <FormControl sx={{marginTop:{lg:'0.6em',md:'0.6em',sm:'0.7em',xs:'0.7em'},display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.gun}
                        onChange={formik.handleChange("gun")}
                        onBlur={formik.handleBlur("gun")}
                        size="small"
                        >
                    {day?.map((el)=>(
                        <MenuItem value={el}>{el}</MenuItem>
                    ))}
                        </Select>
                </FormControl>
            </Box>
            <Box>
                <FormControl sx={{width:{},marginTop:{lg:'0.6em',md:'0.6em',sm:'0.7em'},marginLeft:'1em',display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.ay}
                        onChange={formik.handleChange("ay")}
                        onBlur={formik.handleBlur("ay")}
                        >
                        {months?.map((month)=>(
                          <MenuItem value={month}>{month}</MenuItem>
                        ))}
                        </Select>
                </FormControl>
                <FormControl sx={{width:{},marginTop:{lg:'0.6em',md:'0.6em',sm:'0.7em',xs:'0.7em'},marginLeft:{lg:'1em',md:'1em',sm:'0.3em',xs:'0.2em'},display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.ay}
                        onChange={formik.handleChange("ay")}
                        onBlur={formik.handleBlur("ay")}
                        size="small"
                        >
                        {months?.map((month)=>(
                          <MenuItem value={month}>{month}</MenuItem>
                        ))}
                        </Select>
                </FormControl>
            </Box>
            <Box>
                  <FormControl sx={{width:{},height:{lg:'80px'},marginTop:{lg:'0.6em',md:'0.6em'},marginLeft:'1em',display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                              <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={formik.values.yil}
                              onChange={formik.handleChange("yil")}
                              onBlur={formik.handleBlur("yil")}
                              >
                              {year?.map((year)=>(
                                <MenuItem value={year}>{year}</MenuItem>
                              ))}

                              </Select>
                      </FormControl>
                      <FormControl sx={{width:{},height:{lg:'80px'},marginTop:{lg:'0.6em',md:'0.6em',sm:'0.7em',xs:'0.7em'},marginLeft:{lg:'1em',md:'1em',sm:'0.3em',xs:'0.2em'},display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                              <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={formik.values.yil}
                              onChange={formik.handleChange("yil")}
                              onBlur={formik.handleBlur("yil")}
                              size="small"
                              >
                              {year?.map((year)=>(
                                <MenuItem value={year}>{year}</MenuItem>
                              ))}

                              </Select>
                      </FormControl>
            </Box>
    </Stack>
  )
}

export default Date