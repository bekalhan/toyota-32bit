import {useDispatch , useSelector} from 'react-redux';
import { useEffect } from 'react';

export const useRedux = (params) => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(params.slice !== "" && params.slice !== undefined){
            dispatch(params.slice);
        }
    },[]);
    
    const store = useSelector((state)=>{
        return state[params.name]
    });

    let data;

    if(typeof params.data === "string"){
        data = store[params.data];
        return data;
    }else if(typeof params.data === "object"){
        let obj = [];
        for(let key in params.data){
            obj.push(store[params.data[key]]);
        }
        return obj;
    }

}