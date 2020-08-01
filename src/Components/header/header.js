import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss'
import { connect } from 'react-redux';
const mapState = (state) => {
    return {
        token: state.token 
    }
}
export default connect(mapState)(class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarList: [
                {
                    path: '/',
                    name: ' 首页',
                    isToken: false,
                },
                {
                    path: '/messages',
                    name: "未读消息",
                    isToken: true,
                },
                {
                    path: '/getstart',
                    name: ' 新手入门',
                    isToken: false,
                },
                {
                    path: '/api',
                    name: ' API',
                    isToken: false,
                },
                {
                    path: '/about',
                    name: '关于',
                    isToken: false,
                },
                {
                    path: '/login',
                    name: props.token!=''?'退出':'登录',
                    isToken: false,
                    isOnclick: true,
                }
            ],
            token: props.token,
        }
    }

    static getDerivedStateFromProps(props, state){
        if(props.token == ''){
            state.navbarList[state.navbarList.length - 1].name = '登录';
            return state;
        }else{
            state.navbarList[state.navbarList.length - 1].name = '退出';
        }
        return null;
        
    }
    handClick = (e) => {
        if(this.props.token!=''){
            this.props.dispatch({type:'DELETE_TOKEN'});
        }
    }
    render = () => (
        <>
            <div id="header">
                <div className="container">
                    <div className="pull-left">
                        <NavLink to='/'>
                            <img src='//static2.cnodejs.org/public/images/cnodejs_light.svg' />
                        </NavLink>
                        <input type="text" className='search-form' />
                    </div>

                    <div className="pull-right">
                        <ul>
                            {
                                this.state.navbarList.map((v, i) => {
                                    if(v.isToken){
                                        return <li key={i} style={{display:this.props.token?'':'none'}} >
                                            <NavLink to={v.path} onClick={v.isOnclick?this.handClick.bind(this):null}>{v.name}</NavLink>
                                        </li>
                                    }
                                    return <li key={i} >
                                        <NavLink to={v.path} onClick={v.isOnclick?this.handClick.bind(this):null}>{v.name}</NavLink>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
})