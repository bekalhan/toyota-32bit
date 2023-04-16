import React, { useEffect , useState} from 'react';
import {useRedux} from '../../hooks/useRedux';
import { Outlet } from "react-router-dom";
import Loading from '../../utils/loading/Loading';
import Unauthorize from '../../utils/unauthorize/Unauthorize';

function PrivateRoute() {
    const user = useRedux({name:"login",data:'user',slices:""});
    const [ok,setOk] = useState(false);

    useEffect(()=>{
        const authCheck = () =>{
            if(user!==null){
                setOk(true);
            }else{
                setOk(false);
            }
        }
        authCheck();
    });

    return ok ? <Outlet /> : <Unauthorize />;

}

export default PrivateRoute