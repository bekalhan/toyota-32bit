import React from 'react';
import '../../index.css';
import HeaderData from '../../components/headerdata/HeaderData';
import Search from '../../components/search/Search';
import {
  Box , Stack, Typography,Button
} from '@mui/material';
import {getFontData} from '../../redux/slices/largeFont';
import {useRedux} from '../../hooks/useRedux';
import ScrollTop from '../../components/scrollTop/ScrollTop';
import {useTime} from '../../hooks/useTime';
import {changeFontStatus} from '../../redux/slices/largeFont';
import { useDispatch } from 'react-redux';

function LargeFont({status}) {
  const fontData = useRedux({name:"font",data:"fontData",slice:getFontData()});
  let inactivity = useTime(5);
  const dispatch = useDispatch();

  return (
    <Box sx={{width:'100%',height:'120%',paddingTop:'2em',backgroundColor:status ? '#c6ffc7' : '#d5584a',justifyContent:'center'}}>
     {!inactivity?(
        <Box sx={{justifyContent:'flex-end',display:'flex',marginRight:'3em'}}>
          <Button sx={{border:'2px solid gray',color:'black',width:'100px',fontWeight:'bold',height:'50px'}} onClick={()=>dispatch(changeFontStatus())}>GERİ</Button>
        </Box>
      ):null}
          <ScrollTop />
      <div className="data">
          <div className="header-data">
               <HeaderData name={"font"} />
          </div>
      </div>
      <div className="center">
          <div className="container">
                <div className="title">
                    <h1>
                      CHR - 222
                      <br />
                      <span>25073</span>
                    </h1>
                </div>
                <div className="search">
                  <div className="btn-hata">
                    <button>HATA GİRİŞİ</button>
                  </div>
                  <div className="search-center">
                    <Search />
                  </div>
                </div>
          </div>
      </div>
      <div className="bottom">
          <Stack direction="column" sx={{marginLeft:{lg:'2em',md:'2em',sm:'1em',xs:'0'}}}>
            {fontData?.data?.Response?.data?.map((el)=>(
              <Typography sx={{fontWeight:'bold',fontSize:{lg:'24px',md:'22px',sm:'20px',xs:'18px'},marginTop:'0.4em'}}>{el?.partName} - {el?.defectName}</Typography>
            ))}
          </Stack>
      </div>
    </Box>
  )
}

export default LargeFont