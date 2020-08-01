import React,{ useContext } from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import './personal.scss'
export default function Personal(props) {
    const {token,personal} = useSelector(state=>state);
    if(props.author){
        return <>
            <div className='personal'>
                <p style={{background: '#f6f6f6'}}>作者</p>
                <div className="user-personal">
                    <div className="user-big-avatar">
                        <NavLink to={`/user/${props.author.loginname}`}>
                            <img src={props.author.avatar_url} alt="" title={props.author.loginname} alt={props.author.loginname}/>
                        </NavLink>
                        <NavLink to={`/user/${props.author.loginname}`}>
                            <p>{props.author.loginname}</p>
                        </NavLink>
                    
                    </div>
                </div>
            </div>
        </>
    }
    if(token != ''){
        return (
                <div className='personal'>
                    <p style={{background: '#f6f6f6'}}>个人信息</p>
                    <div className="user-personal">
                        <div className="user-big-avatar">
                            <NavLink to={`/user/${personal.loginname}`}>
                                <img src={personal.avatar_url} alt="" title={personal.loginname} alt={personal.loginname}/>
                            </NavLink>
                            <NavLink to={`/user/${personal.loginname}`}>
                                <p>{personal.loginname}</p>
                            </NavLink>
                           
                        </div>
                    </div>
                </div>
            )
    }else{
        return  <div className='personal-no'>
            <p>
                CNode：Node.js专业中文社区
            </p>
           <p className='tourist'>
               当前是游客状态，您可以 <a href='#/login'>登录</a>
           </p>
            
        </div>
    }
   
};
