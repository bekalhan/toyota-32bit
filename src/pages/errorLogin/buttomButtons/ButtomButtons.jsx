import React from 'react';
import {
    Grid, Typography
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch } from 'react-redux';
import {changeFontStatus} from '../../../redux/slices/largeFont';
import {changeClean,changeError ,changeErrorName,changeClick , changeChoosedError} from '../../../redux/slices/errorSlices';
import {logoutAction} from '../../../redux/slices/loginSlices';
import {useRedux} from '../../../hooks/useRedux';
import {useParams,useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';


function ButtomButtons() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const {t,i18n} = useTranslation();

    //useRedux
    let choosedError = useRedux({name:"error",data:"choosedError"});
    let click = useRedux({name:"error",data:"click"});

    const resetStatus = () => {
        if(choosedError!==undefined){
            dispatch(changeClean());
        }
        dispatch(changeError(undefined));
        dispatch(changeErrorName(undefined));
    }

    const resetPic = () => {
        if(click){
            dispatch(changeClick());
            dispatch(changeChoosedError(undefined))
        }
    }


  return (
    <Grid container sx={{marginLeft:{lg:'0.4em',md:'0.4em',sm:'1em',xs:'1em'},marginRight:{lg:'0.4em',md:'0.4em',sm:'1em',xs:'1em'},display:'flex',marginTop:'0.5em',cursor:'Pointer',marginTop:'1em'}}>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em'}} className="item" onClick={()=>{navigate(`/cvqsterminal/terminals`);dispatch(logoutAction())}}>
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold',fontSize:{lg:'16px'}}}>{t('cikis')}</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em'}} className="item" onClick={resetPic}>
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:{lg:'0.2em',md:'0.2em',sm:'1em',xs:'0.6em'},marginLeft:{lg:'1.7em',md:'1.5em',sm:'0.5em',xs:'1.3em'},fontWeight:'bold',fontSize:{lg:'16px',md:'16px',sm:'14px',xs:'14px'}}}>{t('modelilkresmi')}</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em'}} className="item" onClick={()=>{navigate(`/cvqsterminal/terminal/${params?.depcode}/${params?.filtercode}`);dispatch(logoutAction())}}>
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold'}}>
                <ArrowBackIosNewIcon sx={{fontSize:'16px',fontWeight:'bold',marginRight:'0.6em',marginTop:'0.2em'}} />
                {t('geri')}
            </Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={5.6} xs={5.3} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0.3em',xs:'0.3em'}}} className="item" onClick={()=>{navigate(`/cvqsterminal/terminal/defcorrect/${params?.depcode}/${params?.filtercode}`)}} >
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold'}}>{t('hatalistesi')}</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={5.6} xs={5.3} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0.3em',xs:'0.3em'}}}
        onClick={()=>{resetStatus()}}
        className="item"
        >
            <Typography sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold'}}>{t('temizle')}</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={11.3} xs={10.8} sx={{border:'1.5px solid #364737',borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',marginTop:{lg:'0',md:'0',sm:'0.3em',xs:'0.3em'}}} className="item" onClick={()=>dispatch(changeFontStatus())}>
            <Typography
             sx={{display:'flex',justifyContent:'center',marginTop:'0.8em',fontWeight:'bold'}}
             >{t('büyükfont')}</Typography>
        </Grid>
    </Grid>
  )
}
export default ButtomButtons;