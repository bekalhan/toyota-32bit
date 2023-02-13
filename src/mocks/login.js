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
]
