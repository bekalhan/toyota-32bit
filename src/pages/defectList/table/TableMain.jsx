import React,{useEffect, useState} from 'react';
import { Typography , Box , Stack} from '@mui/material'
import { LicenseInfo } from '@mui/x-license-pro';
import { DataGridPro } from '@mui/x-data-grid-pro';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import '../../../index.css';

import {data} from '../../../mocks/Data';
import NrReasonNative from './NrReasonNative';
import { useRedux } from 'hooks/useRedux';

LicenseInfo.setLicenseKey(
  "x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e"
);


const TableMain = () => {
  const [row,setRow] = useState([]);

  //redux hook
  let body = useRedux({name:"defectList",data:"searchBody",slice:''});
  let assyr = useRedux({name:"defectList",data:"searchAssy",slice:''});

  useEffect(()=>{
    rows();
  },[data[0]?.data[0]?.defectList,body,assyr]);

    //set color according to background
    const getColor = (code) => {
      if(code === "#d7dfe3" || code === "#fffefe" || code === "#f6f6f6" || code === "#ffffff"){
        return "black";
      }else{
        return "white";
      }
    }

    //random number
    const randomNumber = () => {
      let number = Math.floor(Math.random() * 11);
      return number;
    }

  const columns = [
    {
      field: "depCode",
      headerName: "Bildiren",
      width: 70,      
      headerClassName: 'super-app-theme--header',
      
    },
    {
      field: "bodyNo",
      headerName: "Body",
      width: 60,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "assy",
      headerName: "Assy",
      width: 10,
      headerClassName: 'super-app-theme--header',

    },
    {
      field: "vinNo",
      headerName: "Vin No",
      width: 160,
      headerClassName: 'super-app-theme--header',

    },
    {
      field: "renk",
      headerName: "Renk",
      width: 25,
      renderCell:(params)=>{
        return(
          <Box sx={{backgroundColor:`${params?.value[0]}`,width:'54px',borderRadius:'8px',height:'30px',justifyContent:'flex-start'}}>
             <Typography sx={{fontWeight:'bold',color:`${getColor(params?.value[0])}`,textAlign:'center',padding:0.5}}>{params.value[1]}</Typography>
         </Box>
        )
      },
      headerClassName: 'super-app-theme--header',

    },
    {
      field: "modelCode",
      headerName: "Mdl",
      width: 90,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "localId",
      headerName: "Sicil",
      width: 100,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "partName",
      headerName: "Parca",
      width: 240,
      renderCell:(params)=>{
        return(
          <Typography sx={{color:'red',textDecoration:'underline',textAlign:'left'}}>{params.value}</Typography>
        )
      },
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "spot",
      headerName: "Spot",
      width: 30,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "gun",
      headerName: "Gun",
      width: 30,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "arc",
      headerName: "Arc",
      width: 30,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "arcGun",
      headerName: "ArcGun",
      width: 80,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "hata",
      headerName: "Hata",
      width: 180,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "rank",
      headerName: "Rank",
      width: 60,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "saat",
      headerName: "Saat",
      width: 120,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "hataTuru",
      headerName: "Hata Türü",
      width: 80,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "hataSor",
      headerName: "Hata Sor",
      width: 100,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "altSorumlu",
      headerName: "Alt Sorumlu",
      width: 130,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "nrReason",
      headerName: "NR REASON",
      width: 130,
      renderCell:(params)=>{
        let list = params.value[1];
        if(params.value[0]!==0){
          return(
            <NrReasonNative control={true} list={params.value[1]} defaultValue={list[randomNumber()]} />
          )
        }else{
          return(
            <NrReasonNative control={false} list={params.value[1]} defaultValue={list[randomNumber()]} />
          )
        }
      },
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "kaydet",
      headerName: "Kaydet",
      width: 60,
      renderCell:(params)=>{
        return(
          <Box sx={{width:'40px',height:'35px',backgroundColor:'black',borderRadius:'8px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.5em'}}>
          <SaveIcon sx={{color:'white',marginTop:'0.1em',fontSize:'28px'}} />
        </Box>
        )
      },
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "islem",
      headerName: "İşlem",
      width: 120,
      renderCell:(params)=>{
        return(
          <Stack direction="row">
          <Box sx={{width:'50%'}}>
              <Box sx={{width:'40px',height:'35px',backgroundColor:'red',borderRadius:'8px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.6em'}}>
                <EditIcon sx={{color:'white',fontSize:'28px',marginTop:'0.1em'}} />
              </Box>
          </Box>
          <Box sx={{width:'50%'}}>
              <Box sx={{width:'40px',height:'35px',backgroundColor:'red',borderRadius:'8px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.6em'}}>
                <DeleteIcon sx={{color:'white',fontSize:'28px',marginTop:'0.1em'}} />
              </Box>
          </Box>
        </Stack>
        )
      },
      headerClassName: 'super-app-theme--header',
    }

  ];

    //filter rows
  const rows = () => {
    if((body === undefined || body === "") && (assyr === "" || assyr==undefined)){
      data[0]?.data[0]?.defectList?.map((el,index)=>{
        setRow((prev)=>[
          ...prev,
          {
            id:index,
            depCode : el.depCode,
            bodyNo : el.bodyNo,
            assy:el.assyNo,
            vinNo:el.vinNo,
            renk:[el.rgbCode,el.colorExtCode],
            modelCode:el.modelCode,
            localId:el.localId,
            partName:el.partName,
            spot:el.spot,
            gun:el.gun,
            arc:el.arc,
            arcGun:el.arcGun,
            hata:el.defectName.substring(0,20),
            rank:el.defrankCode,
            saat:el.formattedDefectHour,
            hataTuru:el.defectType,
            hataSor:el.defrespName,
            altSorumlu:'',
            nrReason:[el.nrReasonId,data[0]?.data[0].nrReasonList]
          }
        ])
      });
    }else if(assyr==="" || assyr===undefined){
      setRow([]);
  
      data[0]?.data[0].defectList?.filter(defect => defect?.bodyNo == body).map((el,index)=>{
        setRow((prev)=>[
          ...prev,
          {
            id:index,
            depCode : el.depCode,
            bodyNo : el.bodyNo,
            assy:el.assyNo,
            vinNo:el.vinNo,
            renk:[el.rgbCode,el.colorExtCode],
            modelCode:el.modelCode,
            localId:el.localId,
            partName:el.partName,
            spot:el.spot,
            gun:el.gun,
            arc:el.arc,
            arcGun:el.arcGun,
            hata:el.defectName.substring(0,20),
            rank:el.defrankCode,
            saat:el.formattedDefectHour,
            hataTuru:el.defectType,
            hataSor:el.defrespName,
            altSorumlu:'',
            nrReason:[el.nrReasonId,data[0]?.data[0].nrReasonList]
          }
        ])
      })
    }else if(body==="" || body===undefined){
      setRow([]);
  
      data[0]?.data[0].defectList?.filter(defect => defect?.assyNo == assyr).map((el,index)=>{
        setRow((prev)=>[
          ...prev,
          {
            id:index,
            depCode : el.depCode,
            bodyNo : el.bodyNo,
            assy:el.assyNo,
            vinNo:el.vinNo,
            renk:[el.rgbCode,el.colorExtCode],
            modelCode:el.modelCode,
            localId:el.localId,
            partName:el.partName,
            spot:el.spot,
            gun:el.gun,
            arc:el.arc,
            arcGun:el.arcGun,
            hata:el.defectName.substring(0,20),
            rank:el.defrankCode,
            saat:el.formattedDefectHour,
            hataTuru:el.defectType,
            hataSor:el.defrespName,
            altSorumlu:'',
            nrReason:[el.nrReasonId,data[0]?.data[0].nrReasonList]
          }
        ])
      })
    }else{
      setRow([]);
      data[0]?.data[0].defectList?.filter(defect => defect?.bodyNo == body).filter(defect=>defect?.assyNo == assyr).map((el,index)=>{
        setRow((prev)=>[
          ...prev,
          {
            id:index,
            depCode : el.depCode,
            bodyNo : el.bodyNo,
            assy:el.assyNo,
            vinNo:el.vinNo,
            renk:[el.rgbCode,el.colorExtCode],
            modelCode:el.modelCode,
            localId:el.localId,
            partName:el.partName,
            spot:el.spot,
            gun:el.gun,
            arc:el.arc,
            arcGun:el.arcGun,
            hata:el.defectName.substring(0,20),
            rank:el.defrankCode,
            saat:el.formattedDefectHour,
            hataTuru:el.defectType,
            hataSor:el.defrespName,
            altSorumlu:'',
            nrReason:[el.nrReasonId,data[0]?.data[0].nrReasonList]
          }
        ])
      })  
    }

  }

  return (
    <div  className='container' id='container'>
    <DataGridPro
        sx={{
          "& .MuiDataGrid-cell": {
            border: '0.5px solid black'
            },
            '& .super-app-theme--header': {
              border:'0.5px solid black',
              textAlign:'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight:'bold',
              height:'5px'
            },
            '& .super-app-theme--header>div>div': {
              textAlign:'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight:'bold',
            },
            '& .super-app-theme--header>div>div>div>div': {
              fontWeight:'bold',
              justifyContent:'center',
              marginRight:'7px'
            },
        }}
        rows={row}
        columns={columns}
        rowHeight={38}
        disableRowSelectionOnClick
        hideFooterRowCount
        hideFooter
    />
  </div>
  )
}

export default TableMain;