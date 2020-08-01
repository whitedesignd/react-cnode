import React from 'react';
import './App.scss';
import './View/content.scss'
import store from './redux/store'
import Head from './Components/header/header';
import RoutLink  from './router/RouteLink'
import Backtop from './Components/backtop/Backtop'
import {Provider} from 'react-redux';
import Context from './Context';
import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';


axios.interceptors.request.use(config => {
    Nprogress.start();
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(response => {
    Nprogress.done(); // 设置加载进度条(结束..)
    return response;
  }, err => {
    return Promise.reject(err);
  }
)
const now = new Date();
// 计算时间间隔
const timeInterval = (time) => {
  let last = new Date(time);
  const nm = now.getMonth();
  const lm = last.getMonth();

  const nd = now.getDate();
  const ld = last.getDate();

  const nh = now.getHours();
  const lh = last.getHours();

  if (now.getFullYear() - last.getFullYear() >= 1) {
      return `${now.getFullYear() - last.getFullYear()}年前`
  } else {
      if (nm - lm > 1) {
          return `${nm - lm}个月前`
      } else {
          if (nm - lm == 1 && nd >= ld) {
              return `1个月前`
          }
          if (nm - lm == 1 && ld > nd) {
              return `${31 + nd - ld}天前`
          }
          if (nm == lm && nd > ld) {
              return `${nd - ld}天前`
          }
          if (nm == lm && nd == ld) {
              if (nh - lh >= 1) {
                  return `${nh - lh}小时前`
              } else {
                  return `${now.getMinutes() - last.getMinutes()}分钟前`
              }
          }
      }
  }
} 
function App() {
  const isToken = store.getState().token != ''?true:false;
  return (
    <Context.Provider value={{now,timeInterval,isToken}}>
      <Provider store={store}>
        <div className="App">
          <Head></Head>
          <div className="contain">
            <RoutLink ></RoutLink>
          </div>
          <Backtop></Backtop>
        </div>
      </Provider>
    </Context.Provider>
    
    
  );
}

export default App;
