import { rest } from 'msw';

export const login = [
    rest.get('/shifts',(req,res,ctx)=>{
        return res(
          ctx.json({Response:{
            "type": "SUCCESS",
            "data": [
              {
                "shiftId": 18,
                "shiftCode": "B",
                "shiftName": "BEYAZ",
                "galcShift": "W",
                "rgbColor": "#ffffff",
                "createdDate": "2010-07-24",
                "updatedDate": "2016-12-08",
                "createdBy": "SYSTEM",
                "updatedBy": "KADIRC",
                "deleted": "0"
              },
              {
                "shiftId": 19,
                "shiftCode": "K",
                "shiftName": "KIRMIZI",
                "galcShift": "R",
                "rgbColor": "#ff0000",
                "createdDate": "2010-07-24",
                "updatedDate": "2016-12-08",
                "createdBy": "SYSTEM",
                "updatedBy": "KADIRC",
                "deleted": "0"
              },
              {
                "shiftId": 26917,
                "shiftCode": "M",
                "shiftName": "MAVİ",
                "galcShift": "B",
                "rgbColor": "#12a6eb",
                "createdDate": "2016-08-03",
                "updatedDate": "2016-12-08",
                "createdBy": "AHMETO",
                "updatedBy": "KADIRC",
                "deleted": "0"
              }
            ]
          }
          })
        )
      }),
    rest.get('/login/:sicil/:sifre/:montaj',(req,res,ctx)=>{
      const {sicil,sifre,montaj} = req.params;
      let data = {
        "data":[
          {
            "sicilNo":"99619",
            "sifre":"123",
            "montajNo":"222"
          }
        ]
      };
      let isUserExist = data?.data?.map((element)=>{
        if(element.sicilNo === sicil && element.sifre === sifre && element.montajNo === montaj){
          return element;
        }
      });
      
      if(isUserExist[0]===undefined){
        return res(
          ctx.json({
            Response:{
              type:'Error'
            }
          })
        );
      }else{
        return res(
          ctx.json({
            Response:{
              type:"Success",
              data:{
                user:isUserExist
              }
            }
          })
        )
      }

    })
]
