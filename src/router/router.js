// import Index from '../View/Index';
// import Getstart from '../View/Getstart';
// import API from '../View/API';
// import About from '../View/About';

import React,{Component,Suspense,lazy}from 'react';
import './Loding.scss'
import Login from '../View/login/Login';
const Index = lazy(()=>import('../View/Index'))
const API = lazy(()=>import('../View/API'))
const About = lazy(()=>import('../View/About'))
const Getstart = lazy(()=>import('../View/Getstart'));
const Details = lazy(()=> import ('../View/Details'));
const User = lazy(()=> import ('../View/user/User.jsx'))
const Collections = lazy(()=> import ('../View/collections/Collections.jsx'))
const Message = lazy(()=> import('../View/message/Message.jsx'));

function LazyCompoent(Com) {
    return class WrapperComponent extends Component {
            render() {
              return (
                <Suspense fallback={
                    <div className="spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </div>}>
                    <Com {...this.props}></Com>
                </Suspense>
            )}
    }
}

    
export default [
    {
        path: '/index',
        component: LazyCompoent(Index),
        exact: false,
    },
    {
        path: '/getstart',
        component: LazyCompoent(Getstart),
        exact: true,
    },
    {
        path: '/api',
        component: LazyCompoent(API),
        exact: true,
    },
    {
        path: '/about',
        component: LazyCompoent(About),
        exact: true,
    },
    {
        path: '/topic/:id',
        component: LazyCompoent(Details),
        exact: true,
    },
    {
        path: '/user/:name',
        component: LazyCompoent(User),
        exact: true,
    },
    {
        path: '/user/:name/collections',
        component: LazyCompoent(Collections),
        exact: true,
    },
    {
        path: '/messages',
        component: LazyCompoent(Message),
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    }
]