import React,{useState,useEffect} from 'react';
import {NavLink,useLocation} from 'react-router-dom';
import './tab.scss';


export default function Tabar(props) {
    const tabList = [  
        {
            name:"全部",
            path: '/index/all',
            isActive: true
        },
        {
            name:"精华",
            path: '/index/good',
            isActive: false
        },
        {
            name:"分享",
            path: '/index/share',
            isActive: false
        },
        {
            name:"问答",
            path: '/index/ask',
            isActive: false
        },
        {
            name:"招聘",
            path: '/index/job',
            isActive: false
        },
        {
            name:"客户端测试",
            path: '/index/dev',
            isActive: false
        },
    ];
    const location= useLocation();
    const [tab,setTab] = useState(tabList);

    useEffect(()=>{
        tabList.forEach(e => {
            e.isActive = false;
            if(e.path == location.pathname){
                e.isActive = true; 
            }
        })
        setTab([...tabList]);
    },[location.pathname]);
    const handClcik = (i) => {
        tabList.forEach(e => {
            if(e.isActive){
                e.isActive = false;
            }
        })
        tabList[i].isActive = !tabList[i].isActive;
        setTab([...tabList]);
    }
    return (
        <>
            <ul className='tab-link'>
                {
                    tab.map((v,i) => <li key={i}>
                        <NavLink to={v.path} 
                            className={v.isActive?'tab-active':''}
                            onClick={()=>handClcik(i)}>
                                {v.name}
                        </NavLink>
                    </li>)
                }
            </ul>       
        </>
    )
};
