import { rest } from 'msw';

export const defect = [
    rest.get('/defect-data',(req,res,ctx)=>{
        return res(
            ctx.json(
                {Response:{
                    "type": "SUCCESS",
                    "data": [
                      {
                        "seqNo": 222,
                        "bodyNo": 25073,
                        "specData": "",
                        "bgColor": "#ff1c23",
                        "extCode": " 3U5",
                        "firstname": "Yusuf Ziya",
                        "lastname": "Başbuğ",
                        "departmentCode": "AI",
                        "modelName": "CHR",
                        "companyName": "CVQS (TMMT)",
                        "termName": "CHASSIS-2",
                        "modelId": 23638,
                        "assyNo": 222
                      }
                    ]
                  }}
            )
        )
    }),
    rest.get('/defect-photo',(req,res,ctx)=>{
        return res(
            ctx.json(
                {Response:{
                    "type": "SUCCESS",
                    "data": [
                      {
                        "picDataId": 24411,
                        "motherPicDataId": 32111,
                        "terminalPicDataId": 24411,
                        "mainPictureId": 97743,
                        "motherPictureId": 71800,
                        "terminalPictureId": 71835,
                        "lastPictureId": 71835,
                        "depParamDTO": {
                          "blnShowBlankDefectCode": false,
                          "intPTAHeight": 80,
                          "intPTAWidth": 80,
                          "intPTAFontSize": 8,
                          "intPTABorderSize": 6,
                          "strPTABorderColor": "mavi",
                          "strPTALabelColor": "blue",
                          "strPTAFontFace": "Arial",
                          "strPTAFontWeight": "NORMAL",
                          "blnVDFPrintAllDefect": true,
                          "blnVDFPrintAllOffline": false,
                          "intVDFPrintManifest": 0,
                          "blnVDFPrintWithConfirm": false,
                          "blnVDFPrintPortrait": true,
                          "strVDFManifestType": "manifestw",
                          "intVDFDefCountPerPage": 7,
                          "blnCheckEngineNo": false,
                          "strDefectTransferStatus": "I",
                          "strDefaultDefectStatus": "W",
                          "blnMultipleSpotArcBoltNutDefectOpen": false,
                          "blnDEPUseVINNo": true,
                          "blnDEPUseAssyNo": true,
                          "blnDEPUseSpot": true,
                          "blnDEPUseSpotDetails": true,
                          "blnDEPUseSpotGunNo": true,
                          "blnDEPUseSpotRepresent": true,
                          "blnDEPUseArc": true,
                          "blnDEPUseArcGunNo": true,
                          "blnDEPShowShiftColor": true,
                          "blnRepeatingDefect": false,
                          "blnSelectAutoLocation": true,
                          "blnEnterPartDefectDetail": true,
                          "blnDeleteOnTransfer": false,
                          "blnCorrectOnTransfer": true,
                          "blnNotRepOnTransfer": true,
                          "blnNotRepStyleIsComboboxOnTransAndConf": true,
                          "blnNoExitForDefectVehicle": true,
                          "blnHideNotReported": false,
                          "blnFastDefectEntry": true,
                          "blnShowTermPicture": true,
                          "blnCheckTMNo": false,
                          "blnRecordKm": false,
                          "blnRecordTVECS": false,
                          "intDefectWarningLimit": 10,
                          "intDefectRepeatLimit": 2,
                          "intShippingDelayWarningLimit": 220,
                          "blnConfirmNoRepairDefectOnTransfer": true,
                          "blnConfirmNoRepairDefectOnConfirmation": true,
                          "blnShowRankOnDefectList": true,
                          "blnShowDefSubResOnDefectList": true,
                          "blnShowDefectBeforeInspection": false,
                          "blnForcePartDefect": false,
                          "blnChangeRankOnTransfer": false,
                          "blnChangeSubRespOnTransfer": false,
                          "strShowVehicleSequence": "ASSYSEQ",
                          "blnConvertDefectToUpperCase": false,
                          "intNextVehicleClickDelay": 1,
                          "blnSortDefectByAppOnInlineRepair": true,
                          "blnHDselectedOnDefectEntry": false,
                          "blnNRselectedOnDefectEntry": false,
                          "blnShowSaveNextOnTransfer": true,
                          "blnEnableMultiDepConfirm": false,
                          "blnShowNRReasonOnDefectUpdate": true,
                          "blnUpdateExitPointOnTransfer": true,
                          "blnEnableGalcZeroDefect": false,
                          "intExitDepID": 112
                        },
                        "partDefects": [
                          {
                            "displayOrder": 9,
                            "buttonId": 612140,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612141,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612142,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612143,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612144,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612145,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612146,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612147,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612148,
                            "defectId": 1649,
                            "defectName": "BOLT EKSİK",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612148,
                            "defectId": 2315,
                            "defectName": "BOLT SIKMA HATASI",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612148,
                            "defectId": 1485,
                            "defectName": "DARBE",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612148,
                            "defectId": 1502,
                            "defectName": "DEFORME",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 612148,
                            "defectId": 1437,
                            "defectName": "YAĞ KAÇAĞI",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 685328,
                            "defectId": 1530,
                            "defectName": "GEVŞEK",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 685328,
                            "defectId": 1836,
                            "defectName": "SIKMA HATASI",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 685956,
                            "defectId": 1386,
                            "defectName": "KONTROL EDİLEMEDİ",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 685956,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 686141,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 691255,
                            "defectId": 2143,
                            "defectName": "ARACI VPI ANALİZ 'E AYIRIN",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 691255,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 695749,
                            "defectId": 1530,
                            "defectName": "GEVŞEK",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 695749,
                            "defectId": 1836,
                            "defectName": "SIKMA HATASI",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 700468,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 714794,
                            "defectId": 1649,
                            "defectName": "BOLT EKSİK",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 714794,
                            "defectId": 2315,
                            "defectName": "BOLT SIKMA HATASI",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 714794,
                            "defectId": 1485,
                            "defectName": "DARBE",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 714794,
                            "defectId": 1502,
                            "defectName": "DEFORME",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 714794,
                            "defectId": 1437,
                            "defectName": "YAĞ KAÇAĞI",
                            "defRankId": 0,
                            "defRespId": 0,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          },
                          {
                            "displayOrder": 9,
                            "buttonId": 726967,
                            "defectId": 1441,
                            "defectName": "YERLEŞTİRME HATASI",
                            "defRankId": 1255,
                            "defRespId": 1213,
                            "defRespId2": 0,
                            "defClsId": 0,
                            "defGrpId": 0,
                            "defTypeId": 0,
                            "notReported": "N",
                            "harigami": "N"
                          }
                        ],
                        "spotDefects": [
                          {
                            "defectId": 1525,
                            "defectName": "ÇAPAK",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 11471,
                            "defectName": "ÇİFT SPOT",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1980,
                            "defectName": "HALF SPOT",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1992,
                            "defectName": "İNCE ÇEKİRDEK",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2467,
                            "defectName": "NO SPOT",
                            "defectGroupId": 1268,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 27205,
                            "defectName": "OPEN CHISEL YAPILDI AYRILMADI",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1473,
                            "defectName": "PIN HOLE",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2551,
                            "defectName": "SEPERASYON",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 27194,
                            "defectName": "SMALL CHISEL YAPILDI AYRILMADI ",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2595,
                            "defectName": "SPARCK",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2542,
                            "defectName": "SPOT CRACK",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2541,
                            "defectName": "SPOT ÇAPAK",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1800,
                            "defectName": "SPOT ÇUKUR",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2560,
                            "defectName": "SPOT GUN TOUCH",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1455,
                            "defectName": "SPOT HOLE",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2580,
                            "defectName": "SPOT OFF-SET",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2596,
                            "defectName": "SPOT TÜMSEK",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 27196,
                            "defectName": "STICK CHISEL YAPILDI AYRILMADI",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 27199,
                            "defectName": "STICK soğuk yapışma",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 27195,
                            "defectName": "THIN CHISEL YAPILDI AYRILMADI",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 27202,
                            "defectName": "THIN ince çekirdek",
                            "defectGroupId": 1277,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1650,
                            "defectName": "YANIK",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          }
                        ],
                        "arcDefects": [
                          {
                            "defectId": 1492,
                            "defectName": "ARALIK AZ",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1520,
                            "defectName": "ARALIK FAZLA",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1509,
                            "defectName": "ARALIK SAPMA",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2244,
                            "defectName": "ARK AYRILMA",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2245,
                            "defectName": "ARK BİNME",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2264,
                            "defectName": "ARK ÇAPAK",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2265,
                            "defectName": "ARK ÇATLAK",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2247,
                            "defectName": "ARK DAMLAMA",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2266,
                            "defectName": "ARK DELİK",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2252,
                            "defectName": "ARK GENİŞLİK AZ",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2253,
                            "defectName": "ARK KISA",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2257,
                            "defectName": "ARK KÖPÜRME",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2259,
                            "defectName": "ARK OFF-SET",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2260,
                            "defectName": "ARK OLUK",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2278,
                            "defectName": "ARK TÜMSEK",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 119831,
                            "defectName": "ARK UZUN",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2280,
                            "defectName": "ARK YANMA",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2455,
                            "defectName": "NO ARK",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 476612,
                            "defectName": "R/L ARALIK SAPMA",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 476613,
                            "defectName": "R/L SEVİYE SAPMA",
                            "defectGroupId": 11955,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1334,
                            "defectName": "SEVİYE AZ",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1544,
                            "defectName": "SEVİYE FAZLA",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2022,
                            "defectName": "SEVİYE SAPMA",
                            "defectGroupId": 1273,
                            "defectTypeId": 0
                          }
                        ],
                        "nutDefects": [
                          {
                            "defectId": 2452,
                            "defectName": "NO NUT",
                            "defectGroupId": 1268,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2449,
                            "defectName": "NUT KOPMA",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2458,
                            "defectName": "NUT OFF-SET",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2468,
                            "defectName": "NUT TERS KAYNATILMIŞ",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 19453,
                            "defectName": "NUT YANLIŞ",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2474,
                            "defectName": "NUT ZAYIF KAYNAK",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          }
                        ],
                        "boltDefects": [
                          {
                            "defectId": 748378,
                            "defectName": "BOLT ÇAPAK",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1780,
                            "defectName": "BOLT DEFORME",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1306,
                            "defectName": "BOLT GEVŞEK",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2014,
                            "defectName": "BOLT KIRIK",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2395,
                            "defectName": "BOLT KOPUK",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2318,
                            "defectName": "BOLT PIN HOLE",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2335,
                            "defectName": "BOLT YAMUK",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 1525,
                            "defectName": "ÇAPAK",
                            "defectGroupId": 0,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2437,
                            "defectName": "NO BOLT",
                            "defectGroupId": 1268,
                            "defectTypeId": 0
                          },
                          {
                            "defectId": 2732,
                            "defectName": "ZAYIF BOLT",
                            "defectGroupId": 1267,
                            "defectTypeId": 0
                          }
                        ],
                        "defectButtonRecords": [
                          {
                            "buttonId": 612140,
                            "picId": 71835,
                            "childPicID": 71846,
                            "boxX": 371,
                            "boxY": 243,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "E/G ARKA BÖLGESİ",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 612141,
                            "picId": 71835,
                            "childPicID": 71840,
                            "boxX": 213,
                            "boxY": 506,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "RH RR TIRE",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 612142,
                            "picId": 71835,
                            "childPicID": 71843,
                            "boxX": 505,
                            "boxY": 506,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "LH RR TIRE",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 612143,
                            "picId": 71835,
                            "childPicID": 0,
                            "boxX": 707,
                            "boxY": 438,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "green",
                            "labelColor": "green",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "TANIMSIZ HATA",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 48589,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 612144,
                            "picId": 71835,
                            "childPicID": 71836,
                            "boxX": 124,
                            "boxY": 233,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "RH FR TIRE ÖN KISMI",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 612145,
                            "picId": 71835,
                            "childPicID": 71837,
                            "boxX": 58,
                            "boxY": 353,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "RH FR TIRE ARKA KISMI",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 612146,
                            "picId": 71835,
                            "childPicID": 71838,
                            "boxX": 621,
                            "boxY": 233,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "LH FR TIRE ÖN KISMI",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 612147,
                            "picId": 71835,
                            "childPicID": 71839,
                            "boxX": 594,
                            "boxY": 366,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "LH FR TIRE ARKA KISMI",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 612148,
                            "picId": 71835,
                            "childPicID": 71849,
                            "boxX": 344,
                            "boxY": 406,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 90,
                            "boxHeight": 80,
                            "labelText": "RR DIFFERENTIAL BÖLGESI",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 82,
                            "locId13": 0,
                            "partId1": 83761,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 685328,
                            "picId": 71835,
                            "childPicID": 86702,
                            "boxX": 594,
                            "boxY": 477,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "LH RR ABSORBER BODY BOLT",
                            "buttonType": "P",
                            "locId11": 78,
                            "locId12": 82,
                            "locId13": 0,
                            "partId1": 3138,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 685956,
                            "picId": 71835,
                            "childPicID": 0,
                            "boxX": 708,
                            "boxY": 355,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "red",
                            "labelColor": "red",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "CHASSIS PROSESI",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 47898,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 686141,
                            "picId": 71835,
                            "childPicID": 85169,
                            "boxX": 24,
                            "boxY": 480,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "DWB LOCK NUT",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 691255,
                            "picId": 71835,
                            "childPicID": 0,
                            "boxX": 706,
                            "boxY": 272,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "green",
                            "labelColor": "green",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "ECI PAR DENEME",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 84765,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 695749,
                            "picId": 71835,
                            "childPicID": 86701,
                            "boxX": 120,
                            "boxY": 503,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "RH RR ABSORBER BODY BOLT",
                            "buttonType": "P",
                            "locId11": 79,
                            "locId12": 82,
                            "locId13": 0,
                            "partId1": 3138,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 695750,
                            "picId": 71835,
                            "childPicID": 89007,
                            "boxX": 690,
                            "boxY": 20,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "TRANSAXLE * T/M OIL",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 31756,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 4656,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 700468,
                            "picId": 71835,
                            "childPicID": 87897,
                            "boxX": 72,
                            "boxY": 44,
                            "lineX": 176,
                            "lineY": 50,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "A/C TUBE",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 714794,
                            "picId": 71835,
                            "childPicID": 89008,
                            "boxX": 577,
                            "boxY": 20,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 90,
                            "boxHeight": 80,
                            "labelText": "RR DIFFERENTIAL",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 82,
                            "locId13": 0,
                            "partId1": 83761,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          },
                          {
                            "buttonId": 726967,
                            "picId": 71835,
                            "childPicID": 89672,
                            "boxX": 269,
                            "boxY": 316,
                            "lineX": -100,
                            "lineY": -100,
                            "boxColor": "blue",
                            "labelColor": "blue",
                            "boxWidth": 80,
                            "boxHeight": 80,
                            "labelText": "FR SUSPENSION MEMBER",
                            "buttonType": "P",
                            "locId11": 0,
                            "locId12": 0,
                            "locId13": 0,
                            "partId1": 0,
                            "locId21": 0,
                            "locId22": 0,
                            "locId23": 0,
                            "partId2": 0,
                            "locId31": 0,
                            "locId32": 0,
                            "locId33": 0,
                            "partId3": 0,
                            "spotId": 0,
                            "arcnutboltId": null,
                            "wisNo": null,
                            "defRespId": 0,
                            "defClsId": 0
                          }
                        ],
                        "showUserList": "N"
                      }
                    ]
                  }
                  }
            )
        )
    }),
    rest.get('/defect-button',(req,res,ctx)=>{
      return res(
        ctx.json(
          {Response:{
            "type":'Success',
            "data":[
              {
                "models": [
                  {
                    "modelId": 23638,
                    "modelCode": "CHR",
                    "modelName": "CHR"
                  },
                  {
                    "modelId": 29695,
                    "modelCode": "COR",
                    "modelName": "COROLLA"
                  },
                  {
                    "modelId": 1115757,
                    "modelCode": "New CHR",
                    "modelName": "New CHR"
                  }
                ],
                "requiredFieldsByInspectionDTOList": [
                  {
                    "dataItemId": 22,
                    "userName": "Exit Department",
                    "fieldName": "EXIT_DEP_ID",
                    "fieldType": "I",
                    "controlType": "CMB",
                    "dataTable": "TR_DEP_EXITDEP",
                    "required": "N",
                    "definitionTable": "TD_DEPARTMENT",
                    "relationTable": "TR_DEP_EXITDEP",
                    "relationField": "EXIT_DEP_ID",
                    "definitionField": "DEP_ID",
                    "definitionShowField": "DEP_NAME",
                    "filterField": "DEP_ID",
                    "englishUserName": "Exit Department",
                    "errDetailComboBoxValueDTOList": [
                      {
                        "dataCode": "24481",
                        "dataValue": "ASSEMBLY"
                      },
                      {
                        "dataCode": "98",
                        "dataValue": "Assembly Repair"
                      },
                      {
                        "dataCode": "24576",
                        "dataValue": "Assembly Repair Kritik"
                      },
                      {
                        "dataCode": "84",
                        "dataValue": "ASSEMBLY QS"
                      },
                      {
                        "dataCode": "80",
                        "dataValue": "Assembly Inspection"
                      }
                    ]
                  },
                  {
                    "dataItemId": 1,
                    "userName": "Açıklama",
                    "fieldName": "DESCRIPTION",
                    "fieldType": "V",
                    "controlType": "TXA",
                    "required": "N",
                    "englishUserName": "Explanation"
                  },
                  {
                    "dataItemId": 14,
                    "userName": "Yapılan İşlem",
                    "fieldName": "DEFECT_ACTION",
                    "fieldType": "V",
                    "controlType": "TXA",
                    "required": "Y",
                    "englishUserName": "Applied Operation"
                  },
                  {
                    "dataItemId": 19,
                    "userName": "Alt Sorumlu",
                    "fieldName": "DEFRESP_ID2",
                    "fieldType": "I",
                    "controlType": "CMB",
                    "dataTable": "TR_DEP_DEFRESP2",
                    "required": "Y",
                    "definitionTable": "TD_DEFECT_RESPONSIBLE",
                    "relationTable": "TR_DEP_DEFRESP2",
                    "relationField": "DEFRESP_ID",
                    "definitionField": "DEFRESP_ID",
                    "definitionShowField": "DEFRESP_NAME",
                    "filterField": "DEP_ID",
                    "englishUserName": "Sub Responsible"
                  },
                  {
                    "controlType": "CMB",
                    "englishUserName": "Defect Class",
                    "errDetailComboBoxValueDTOList": [
                      {
                        "dataCode": "1234",
                        "dataValue": "NORMAL"
                      },
                      {
                        "dataCode": "1237",
                        "dataValue": "SAFETY"
                      },
                      {
                        "dataCode": "1239",
                        "dataValue": "EMISYON"
                      },
                      {
                        "dataCode": "1236",
                        "dataValue": "REGÜLASYON"
                      },
                      {
                        "dataCode": "997156",
                        "dataValue": "A RANK"
                      }
                    ]
                  },
                  {
                    "controlType": "CMB",
                    "englishUserName": "Defect Responsibles",
                    "errDetailComboBoxValueDTOList": [
                      {
                        "dataCode": "1213",
                        "dataValue": "BODY FITTING"
                      },
                      {
                        "dataCode": "1160",
                        "dataValue": "PAINT"
                      },
                      {
                        "dataCode": "1216",
                        "dataValue": "ASSY"
                      },
                      {
                        "dataCode": "1158",
                        "dataValue": "PART"
                      },
                      {
                        "dataCode": "1168",
                        "dataValue": "PRESS"
                      },
                      {
                        "dataCode": "1214",
                        "dataValue": "PCD"
                      },
                      {
                        "dataCode": "1207",
                        "dataValue": "QA ANL"
                      },
                      {
                        "dataCode": "1184",
                        "dataValue": "PLASTICS"
                      },
                      {
                        "dataCode": "1206",
                        "dataValue": "OTHER"
                      },
                      {
                        "dataCode": "15460",
                        "dataValue": "ECI"
                      },
                      {
                        "dataCode": "15459",
                        "dataValue": "AI KONTROL"
                      },
                      {
                        "dataCode": "204869",
                        "dataValue": "ABS HATTI"
                      },
                      {
                        "dataCode": "22510",
                        "dataValue": "AI"
                      }
                    ]
                  }
                ],
                "subResponsiblesByDefrespId": [
                  {
                    "defrespId": 1213,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 1160,
                    "subResponsibles": [
                      {
                        "dataCode": "1179",
                        "dataValue": "PRIMER INSPECTION"
                      },
                      {
                        "dataCode": "1178",
                        "dataValue": "TOP COAT"
                      },
                      {
                        "dataCode": "23408",
                        "dataValue": "TOSO FINAL"
                      }
                    ]
                  },
                  {
                    "defrespId": 1216,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 1158,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 1168,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 1214,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 1207,
                    "subResponsibles": [
                      {
                        "dataCode": "29909",
                        "dataValue": "ANALİZ DEVAM EDİYOR"
                      }
                    ]
                  },
                  {
                    "defrespId": 1184,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 1206,
                    "subResponsibles": [
                      {
                        "dataCode": "1206",
                        "dataValue": "OTHER"
                      }
                    ]
                  },
                  {
                    "defrespId": 15460,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 15459,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 204869,
                    "subResponsibles": []
                  },
                  {
                    "defrespId": 22510,
                    "subResponsibles": []
                  }
                ],
                "defrespName": " "
              }
              
            ]
          }}
        )
      )
    }),
    rest.get('/defect-button2',(req,res,ctx)=>{
      return res(
        ctx.json(
          {Response:{
            "type" :'Success',
            "data":[
              [
                {
                  "nrId": 104671,
                  "nrReasonAbb": "HOLD ARACI",
                  "nrReasonDetail": "HOLD ARACI",
                  "displayOrder": 0
                },
                {
                  "nrId": 104668,
                  "nrReasonAbb": "BALANS",
                  "nrReasonDetail": "BALANS",
                  "displayOrder": 1
                },
                {
                  "nrId": 104663,
                  "nrReasonAbb": "ANALİZ OK",
                  "nrReasonDetail": "ANALİZ OK",
                  "displayOrder": 5
                },
                {
                  "nrId": 107699,
                  "nrReasonAbb": "MQE OK",
                  "nrReasonDetail": "MQE KARARI OK",
                  "displayOrder": 10
                },
                {
                  "nrId": 127238,
                  "nrReasonAbb": "RENK ÖLÇÜM",
                  "nrReasonDetail": "RENK ÖLÇÜM ARACI",
                  "displayOrder": 10
                },
                {
                  "nrId": 104662,
                  "nrReasonAbb": "SİMÜLASYON",
                  "nrReasonDetail": "SİMÜLASYON",
                  "displayOrder": 10
                },
                {
                  "nrId": 104670,
                  "nrReasonAbb": "KONFİRME",
                  "nrReasonDetail": "KONFİRME",
                  "displayOrder": 15
                },
                {
                  "nrId": 127087,
                  "nrReasonAbb": "Y AUDIT",
                  "nrReasonDetail": "YAZAN AUDIT",
                  "displayOrder": 15
                },
                {
                  "nrId": 104664,
                  "nrReasonAbb": "Y.ELEMAN",
                  "nrReasonDetail": "YENİ ELEMAN OK",
                  "displayOrder": 15
                }
              ]
              
            ]
          }}
        )
      )
    }),
    rest.get('/defect-choosed',(req,res,ctx)=>{
      return res(
        ctx.json(
          {Response:{
            "data":[
              [
                {
                  "ancName":"A/C TUBE",
                  "defects":[
                    {
                      "name":"A/C TUBE",
                      "coordinates":[
                        {
                          "x0":265,
                          "x1":452,
                          "y0":70,
                          "y1":288
                        }
                      ],
                      "boxX":92,
                      "boxY":44
                    }
                  ]
                },
                {
                  "ancName":"RR DIFFERENTIAL",
                  "defects":[
                    {
                      "name":"ENGINE MOVING ROD BOLT",
                      "coordinates":[
                        {
                          "x0":630,
                          "x1":680,
                          "y0":100,
                          "y1":270
                        }
                      ],
                      "boxX":450,
                      "boxY":44
                    },
                    {
                      "name":"ENGINE MOVING ROD INSULATOR BOLT",
                      "coordinates":[
                        {
                          "x0":270,
                          "x1":430,
                          "y0":350,
                          "y1":470,
                        }
                      ],
                      "boxX":100,
                      "boxY":300
                    },
                    {
                      "name":"ENGINE MOVING CONTROL ROD",
                      "coordinates":[
                        {
                          "x0":880,
                          "x1":650,
                          "y0":450,
                          "y1":350,
                        }
                      ],
                      "boxX":700,
                      "boxY":400
                    },
                    
                  ]
                },
                {
                  "ancName":"TRANSAXLE * T/M OIL",
                  "defects":[
                    {
                      "name":"TRANSAXLE * T/M OI",
                      "coordinates":[
                        {
                          "x0":568,
                          "x1":402,
                          "y0":190,
                          "y1":338
                        }
                      ],
                      "boxX":392,
                      "boxY":144
                    }
                  ]
                },
                {
                  "ancName":"RH FR TIRE ÖN KISMI",
                  "defects":[
                    {
                      "name":"RH FR TIRE ÖN KISMI",
                      "coordinates":[
                        {
                          "x0":330,
                          "x1":500,
                          "y0":60,
                          "y1":100
                        }
                      ],
                      "boxX":162,
                      "boxY":224
                    }
                  ]
                },
                {
                  "ancName":"E/G ARKA BÖLGESİ",
                  "defects":[
                    {
                      "name":"E/G ARKA BÖLGESİ",
                      "coordinates":[
                        {
                          "x0":545,
                          "x1":352,
                          "y0":80,
                          "y1":100
                        }
                      ],
                      "boxX":370,
                      "boxY":240
                    }
                  ]
                },
                {
                  "ancName":"LH FR TIRE ÖN KISMI",
                  "defects":[
                    {
                      "name":"LH FR TIRE ÖN KISMI",
                      "coordinates":[
                        {
                          "x0":770,
                          "x1":452,
                          "y0":60,
                          "y1":400
                        }
                      ],
                      "boxX":600,
                      "boxY":220
                    }
                  ]
                },
                {
                  "ancName":"RH FR TIRE ARKA KISMI",
                  "defects":[
                    {
                      "name":"RH FR TIRE ARKA KISMI",
                      "coordinates":[
                        {
                          "x0":370,
                          "x1":552,
                          "y0":-50,
                          "y1":100
                        }
                      ],
                      "boxX":200,
                      "boxY":220
                    }
                  ]
                },
                {
                  "ancName":"FR SUSPENSION MEMBER",
                  "defects":[
                    {
                      "name":"FR SUSPENSION MEMBER",
                      "coordinates":[
                        {
                          "x0":470,
                          "x1":652,
                          "y0":-70,
                          "y1":500
                        }
                      ],
                      "boxX":300,
                      "boxY":170
                    }
                  ]
                },
                {
                  "ancName":"LH FR TIRE ARKA KISMI",
                  "defects":[
                    {
                      "name":"LH FR TIRE ARKA KISMI",
                      "coordinates":[
                        {
                          "x0":770,
                          "x1":452,
                          "y0":70,
                          "y1":300
                        }
                      ],
                      "boxX":600,
                      "boxY":370
                    }
                  ]
                },
                {
                  "ancName":"RR DIFFERENTIAL BÖLGESI",
                  "defects":[
                    {
                      "name":"RR DIFFERENTIAL BÖLGESI",
                      "coordinates":[
                        {
                          "x0":560,
                          "x1":452,
                          "y0":50,
                          "y1":100
                        }
                      ],
                      "boxX":380,
                      "boxY":380
                    }
                  ]
                },
                {
                  "ancName":"DWB LOCK NUT",
                  "defects":[
                    {
                      "name":"DWB LOCK NUT",
                      "coordinates":[
                        {
                          "x0":210,
                          "x1":452,
                          "y0":60,
                          "y1":200
                        }
                      ],
                      "boxX":40,
                      "boxY":470
                    }
                  ]
                },
                {
                  "ancName":"RH RR ABSORBER BODY BOLT",
                  "defects":[
                    {
                      "name":"RH RR ABSORBER BODY BOLT",
                      "coordinates":[
                        {
                          "x0":310,
                          "x1":552,
                          "y0":60,
                          "y1":300
                        }
                      ],
                      "boxX":140,
                      "boxY":490
                    }
                  ]
                },
                {
                  "ancName":"RH RR TIRE",
                  "defects":[
                    {
                      "name":"RH RR TIRE",
                      "coordinates":[
                        {
                          "x0":410,
                          "x1":552,
                          "y0":60,
                          "y1":300
                        }
                      ],
                      "boxX":240,
                      "boxY":495
                    }
                  ]
                },
                {
                  "ancName":"LH RR TIRE",
                  "defects":[
                    {
                      "name":"LH RR TIRE",
                      "coordinates":[
                        {
                          "x0":720,
                          "x1":552,
                          "y0":60,
                          "y1":300
                        }
                      ],
                      "boxX":540,
                      "boxY":495
                    }
                  ]
                },
                {
                  "ancName":"LH RR ABSORBER BODY BOLT",
                  "defects":[
                    {
                      "name":"LH RR ABSORBER BODY BOLT",
                      "coordinates":[
                        {
                          "x0":800,
                          "x1":552,
                          "y0":60,
                          "y1":300
                        }
                      ],
                      "boxX":630,
                      "boxY":465
                    }
                  ]
                },
                
                
              ]
            ]
          }}
        )
      )
    })
]