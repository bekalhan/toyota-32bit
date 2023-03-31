import {useState} from 'react';

export const useSelect = (params) => {
    const [inputs,setInputs] = useState(params);

    const handleChange = event => {
        setInputs({...inputs,[event.target.name]:[event.target.value]});
    };

    return [inputs,handleChange];

}