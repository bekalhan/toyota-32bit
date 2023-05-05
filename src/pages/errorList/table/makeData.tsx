import {data} from '../../../mocks/Data';

const ImportData =  () => {
  let newData = data[0].data[0].defectList?.sort((a,b)=>{return a.depCode > b.depCode ? 1 : -1});
  return newData;
}

const NrReasonList = () => {
  let list = data[0].data[0].nrReasonList;
  return list;
}

const randomNumber = () => {
  let number = Math.floor(Math.random() * 11);
  console.log("üretilen sayı : ",number);
  return number;
}

let i = 0;

export type Error = {
  depCode: string
  bodyNo: number
  assy:string
  vinNo: string
  renk:string
  colorCode:string
  modelCode: string
  localId: string
  partName: string
  spot:string
  gun:string
  arc:string
  arcGun:string
  hata:string
  rank:string
  saat:string
  hataTuru:string
  hataSor:string,
  altSorumlu:string
  nrReasonList:Array<object>
  nrReasonId:number,
  random:number
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const NewError = (index: number):Error=> {
  let list = ImportData();
  let nrReasonList = NrReasonList();
  if(i<list.length-1){
    i = i+1;
  }
  return {
    depCode:list[i].depCode,
    bodyNo: list[i].bodyNo,
    assy:'',
    vinNo:  list[i].vinNo,
    renk:list[i].rgbCode,
    colorCode:list[i].colorExtCode,
    modelCode:list[i].modelCode,
    localId:list[i].localId,
    partName:list[i].partName as string,
    spot:'',
    gun:'',
    arc:'',
    arcGun:'',
    hata:list[i].defectName.substring(0,23),
    rank:list[i].defrankCode,
    saat:list[i].formattedDefectHour,
    hataTuru:list[i].defectType,
    hataSor:list[i].defrespName,
    altSorumlu:'',
    nrReasonList:nrReasonList,
    nrReasonId:list[i].nrReasonId,
    random:randomNumber()
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Error[] => {
    const len = lens[depth]!
    return range(len).map((d): Error => {
      return {
        ...NewError(d),
      }
    })
  }

  return makeDataLevel()
}
