import { faker } from '@faker-js/faker';
import { string } from 'yup';
import {data} from '../../../mocks/Data'


const ImportData =  () => {
    return data[0].data[0].defectList;
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
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const NewPerson = (index: number):Error=> {
  let list = ImportData();
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
    altSorumlu:''
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Error[] => {
    const len = lens[depth]!
    return range(len).map((d): Error => {
      return {
        ...NewPerson(d),
      }
    })
  }

  return makeDataLevel()
}
