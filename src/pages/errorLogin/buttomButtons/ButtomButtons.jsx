import React from 'react';
import {
    Grid, Typography,useTheme
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
    const {t} = useTranslation();

    //theme
    const theme = useTheme();

    //useRedux
    let choosedError = useRedux({name:"error",data:"choosedError"});
    let click = useRedux({name:"error",data:"click"});


    const resetStatus = () => {
        // if clicked any box then reset
        if(choosedError!==undefined){
            dispatch(changeClean());
        }
        //reset error
        dispatch(changeError(undefined));
        //reset error name
        dispatch(changeErrorName(undefined));
    }

    //return first picture
    const resetPic = () => {
        if(click){
            dispatch(changeClick());
            dispatch(changeChoosedError(undefined))
        }
    }


  return (
    <Grid container sx={{marginLeft:{lg:'0.4em',md:'0.4em',sm:'1em',xs:'1em'},marginRight:{lg:'0.4em',md:'0.4em',sm:'1em',xs:'1em'},display:'flex',marginTop:'0.5em',cursor:'Pointer',marginTop:'1em'}}>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:`1.5px solid ${theme.palette.custom.darkBorder}`,borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',display:'flex',alignItems:'center'}} className="item" onClick={()=>{navigate(`/cvqsterminal/terminals`);dispatch(logoutAction())}}>
            <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold',fontSize:{lg:'16px'}}}>{t('cikis')}</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:`1.5px solid ${theme.palette.custom.darkBorder}`,borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',display:'flex',alignItems:'center'}} className="item" onClick={resetPic}>
            <Typography sx={{display:'flex',justifyContent:'center',marginLeft:{lg:'1.7em',md:'1.5em',sm:'0.5em',xs:'1.3em'},fontWeight:'bold',fontSize:{lg:'16px',md:'16px',sm:'14px',xs:'14px'}}}>{t('modelilkresmi')}</Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={3.7} xs={3.5} sx={{border:`1.5px solid ${theme.palette.custom.darkBorder}`,borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',display:'flex',alignItems:'center'}} className="item" onClick={()=>{navigate(`/cvqsterminal/terminal/${params?.depcode}/${params?.filtercode}`);dispatch(logoutAction())}}>
            <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}>
                <ArrowBackIosNewIcon sx={{fontSize:'16px',fontWeight:'bold',marginRight:'0.6em',marginTop:'0.2em'}} />
                {t('geri')}
            </Typography>
        </Grid>
        <Grid item lg={1.9} md={1.9} sm={5.6} xs={5.3} sx={{border:`1.5px solid ${theme.palette.custom.darkBorder}`,borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',display:'flex',alignItems:'center'}} className="item" onClick={()=>{navigate(`/cvqsterminal/terminal/defcorrect/${params?.depcode}/${params?.filtercode}`)}} >
            <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}>{t('hatalistesi')}</Typography>
        </Grid>
        {/* reset choosed error and gif */}
        <Grid item lg={1.9} md={1.9} sm={5.6} xs={5.3} sx={{border:`1.5px solid ${theme.palette.custom.darkBorder}`,borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',display:'flex',alignItems:'center'}}
        onClick={()=>{resetStatus()}}
        className="item"
        >
            <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}>{t('temizle')}</Typography>
        </Grid>
        {/* transition to large font */}
        <Grid item lg={1.9} md={1.9} sm={11.3} xs={10.8} sx={{border:`1.5px solid ${theme.palette.custom.darkBorder}`,borderRadius:'7px',justifyContent:'center',height:'60px',marginLeft:'0.3em',display:'flex',alignItems:'center'}} className="item" onClick={()=>dispatch(changeFontStatus())}>
            <Typography
             sx={{display:'flex',justifyContent:'center',fontWeight:'bold'}}
             >{t('büyükfont')}</Typography>
        </Grid>
    </Grid>
  )
}
export default ButtomButtons;