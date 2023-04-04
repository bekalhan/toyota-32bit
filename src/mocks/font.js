import { rest } from 'msw';

export const font = [
    rest.get('/font-data',(req,res,ctx)=>{
        return res(
            ctx.json(
                {Response:{
                    "type": "SUCCESS",
                    "data": [
                      {
                        "partName": "ECI PAR DENEME",
                        "description": "test",
                        "defectName": "ARACI VPI ANALİZ 'E AYIRIN"
                      },
                      {
                        "partName": "CHASSIS PROSES",
                        "defectName": "KONTROL EDİLEMEDİ"
                      },
                      {
                        "partName": "A/C TUBE",
                        "description": "örnek açıklama",
                        "defectName": "DEFORME"
                      }
                    ]
                  }}
            )
        )
    }),
]