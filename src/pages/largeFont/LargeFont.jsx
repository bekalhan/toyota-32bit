import React from 'react';
import '../../index.css';
import HeaderData from '../../components/headerdata/HeaderData';
import Search from '../../components/search/Search';
import {
  Box , Stack, Typography
} from '@mui/material';
import {getFontData} from '../../redux/slices/largeFont';
import {useRedux} from '../../hooks/useRedux';

function LargeFont() {
  const fontData = useRedux({name:"font",data:"fontData",slice:getFontData()});

  return (
    <Box sx={{width:'100%',height:'100%',paddingTop:'2em',backgroundColor:'#c6ffc7',justifyContent:'center'}}>
      <div className="data">
          <div className="header-data">
               <HeaderData />
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
          <Stack direction="column">
            {fontData?.data?.Response?.data?.map((el)=>(
              <Typography sx={{fontWeight:'bold',fontSize:'24px',marginTop:'0.4em'}}>{el?.partName} - {el?.defectName}</Typography>
            ))}
          </Stack>
      </div>
    </Box>
  )
}

export default LargeFont