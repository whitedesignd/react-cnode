import React, { useRef } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import './login.scss'
export default function Login(props) {
    const token = window.localStorage.getItem('accessToken') || '';
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handClick = (e) => {
        e.preventDefault();
        let value = inputRef.current.value;
        if(value == '') return;
        axios.post('/v1/accesstoken',{accesstoken:value}).then(r => {
            let {data:res} = r;
            dispatch({ 
                type: 'SAVE_TOKEN',
                token: value
            })
            dispatch({ 
                type: 'SAVE_PERSONAL',
                personal: res
            });
            inputRef.current.value = '';
            props.history.push('./idnex')
        }).catch(err => {
            inputRef.current.value = '';
            return alert('错误的accesstoken');
        })
    }
    return (
        <div className='login'>
            <input 
                type="text" 
                maxLength="50" 
                placeholder="Access Token"
                defaultValue={token}
                ref={inputRef}
            />
            <div className="get-access-token">
                <a href="https://cnodejs.org/setting" target="_blank">如何获取Access Token？</a>
            </div>

            <div className="submit user-select-none" onClick={handClick}>Sign in</div>
        </div>
    )
};
