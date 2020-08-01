import React,{useState,useEffect} from 'react';
import Personal from '../Components/personal/Personal.jsx'
export default function API(props) {
    const [data,setData] = useState();
    useEffect(()=>{
         props.getHtml(props.match.url, setData);
    },[]);
   
    return <div className='header-router'>
        <div className='router-content' dangerouslySetInnerHTML={{__html:data}}></div>
        {data&&<Personal></Personal>}
    </div>
    ;
};
