import React, { useEffect,useState } from 'react';
import {Box,Avatar,Typography} from '@mui/material';
import {getDefectsByNames} from '../../../../../redux/slices/defectSlices';
import { useRedux } from 'hooks/useRedux';
import car from '../../../../../img/car10.jpeg';
import { Line } from 'react-lineto';
import MenuItems from './MenuItems';
import errlocat from '../../../../../img/errlocat.gif';
import {changeDefect,changeClean} from '../../../../../redux/slices/defectSlices';
import { useDispatch} from 'react-redux';

const Test = ({defect,defects}) => {

    const [result,setResult] = useState([]);
    const [scroll,setScroll] = useState({left:0,top:0});
    const [anchorEl, setAnchorEl] = useState(null);
    const [point,setPoint] = useState({x:"",y:""});
    const [indicate,setIndicate] = useState({x:"",y:""});
    const open = Boolean(anchorEl);

    const dispatch = useDispatch();


    let boxData = useRedux({name:"defect",data:"boxData",slice:getDefectsByNames()})
    let allScroll = useRedux({name:"defect",data:"scroll"});
    let defectName = useRedux({name:"defect",data:"defectName"});
    let clean = useRedux({name:"defect",data:"clean"});


   useEffect(()=>{
    filterData();
   },[boxData]);

   const filterData = () => {
    let result = boxData?.Response?.data[0]?.filter((el)=>{
       return el.ancName == defect?.labelText;
    });
    setResult(result);
   }

   const handleScroll = (event) => {
    setScroll({left:event.currentTarget.scrollLeft,top:event.currentTarget.scrollTop});
    }

    const handleMenuClick = (event) => {
          setAnchorEl(event.currentTarget);
    }

    const handlePoint = (x,y) =>{
        setPoint({x:x,y:y});
    }

    const boxFunc = (e,x,y,cx,cy,name) => {
        handleMenuClick(e);
        handlePoint(x,y);
        setIndicate({x:cx,y:cy})
        dispatch(changeDefect(name));
        if(clean){
            dispatch(changeClean());
        }
    }

    const changeIndication = (x,y) => {
        setIndicate({x:x+130,y:y+20})
    }
    
  return (
    <>
        <Box sx={{overflow:'auto',width:'100%',height:'600px',position:'relative'}} onScroll={handleScroll}>
            {/* add dummy picture */}
            <Avatar variant='square' src={car}
            sx={{width:'915px',height:'700px',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'
            ,backgroundPosition:'center',backgroundSize:'cover',position:'absolute'
            }}
            className='pic2'
            onClick={(e)=>changeIndication(e.nativeEvent.layerX,e.nativeEvent.layerY)}
            />

        {/* PRİNT BOX AND LINE */}
        {result !== undefined && defectName === undefined ? (
            result[0]?.defects?.map((el)=>(
                <>
                    {/* Print the boxes */}
                    <Box sx={{borderRadius:'8px',border:`3px solid red`,position:'absolute',justifyContent:'center',cursor:'pointer',overflowX:'scroll',}}
                        height={defect.boxHeight} width={defect.boxWidth} left={el?.boxX} top={el?.boxY}
                        onClick={(e)=>boxFunc(e,el?.boxX,el?.boxY,el?.coordinates[0]?.x1,el?.coordinates[0]?.y1,el?.name)}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        >
                    <Typography sx={{maxWidth:'100%',backgroundColor:'white',color:'red',fontSize:'11px',display:'flex',justifyContent:'center'}}>{defect.labelText}</Typography>
                    </Box>
                    {/* PRİNT THE LİNE */}
                    {/* for screen lg */}
                    <Line x0={el?.coordinates[0]?.x0- scroll.left - allScroll.x} y0={(el?.coordinates[0]?.y0-allScroll.y) + defect.boxY + 50 - scroll.top } x1={el?.coordinates[0]?.x1 - scroll.left - allScroll.x} y1={(el?.coordinates[0]?.y1)+60-allScroll.y-scroll.top} className='line' />
                    {/* for screen md */}
                    <Line x0={el?.coordinates[0]?.x0- scroll.left - allScroll.x-130} y0={(el?.coordinates[0]?.y0-allScroll.y) + defect.boxY + 50 - scroll.top } x1={el?.coordinates[0]?.x1 - scroll.left - allScroll.x-130} y1={(el?.coordinates[0]?.y1)+60-allScroll.y-scroll.top} className='line2' />
                    {/* for screen sm and cs */}
                    <Line x0={el?.coordinates[0]?.x0- scroll.left - allScroll.x-130} y0={(el?.coordinates[0]?.y0-allScroll.y) + defect.boxY + 50 - scroll.top+135} x1={el?.coordinates[0]?.x1 - scroll.left - allScroll.x-130} y1={(el?.coordinates[0]?.y1)+60-allScroll.y-scroll.top+135} className='line3' />
                </>
            ))
        ):null}

        {/* PRINT INDICATE */}
        {defectName !==undefined ? (
            <Avatar src={errlocat} sx={{position: 'absolute',marginLeft:`${indicate.x-scroll.left-140}px`,marginTop:`${indicate.y-scroll.top-20}px`}}/> 
        ):null}


        </Box>

        {/* MENU ITEMS */}
        <MenuItems
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        defects={defects} 
        defect={defect}
        point={point}
        scroll={scroll}
        allScroll={allScroll}
        />


    </>
  )
}

export default Test;