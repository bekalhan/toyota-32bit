import React,{useEffect,useState} from 'react';
import { useIdleTimer } from 'react-idle-timer'


export const useTime = (sec) => {
    const [remaining, setRemaining] = useState([sec]);
    const [inactivity, setInactivity] = useState(true);

    const { getRemainingTime } = useIdleTimer({
        timeout: sec*1000,
        throttle: 500
    });

      useEffect(() => {
        const interval = setInterval(() => {
          setRemaining(Math.ceil(getRemainingTime() / 1000))
        }, 500)
    
        return () => {
          clearInterval(interval)
          detectTime();
        }
    
      })
    
      const detectTime = () => {
        if(remaining <=1){
          setInactivity(false);
        }else{
            setInactivity(true);
        }
      }

      return inactivity;
}