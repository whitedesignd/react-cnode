import React, { Component} from 'react';
import { NavLink } from 'react-router-dom'
import './user.scss'
import Context from '../../Context.js'
import Panel from '../../Components/panel/Panel';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import Personal from '../../Components/personal/Personal'
export default class User extends Component {
    static contextType = Context; 
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        let { data: res } = await fetch(`/v1/user/${this.props.match.params.name}`).then(res => res.json());
        this.setState({ user: res });
    }
    render() {
        return (
            <div className='header-router'>
                <div className='router-content'>
                        <div className='user'>
                        <Breadcrumb> 
                            <NavLink to='/index'>首页</NavLink>
                                /
                            <span >个人主页</span>
                        </Breadcrumb>
                        <div className="user-info">
                            <div className="user-big-avatar">
                                <img src={this.state.user?.avatar_url} alt="" />
                                <span>{this.state.user?.loginname}</span>
                            </div>
                            <div>{this.state.user?.score}积分</div>
                            <NavLink to={`${this.props.match.url}/collections`}>
                                查看收藏的话题
                            </NavLink>
                            <div className="create-at">注册时间{this.context.timeInterval(this.state.user?.create_at)}</div>
                        </div>
                        <div className="panel">
                            <Panel title='最近创建的话题' list={this.state.user?.recent_topics}></Panel>
                        </div>
                        <div className="panel">
                            <Panel title='最近参与的话题' list={this.state.user?.recent_replies}></Panel>
                        </div>
                    </div>
                </div>
                {this.state.user&&<Personal author={{'avatar_url':this.state.user.avatar_url,'loginname':this.state.user.loginname}}></Personal>}
            </div>
            
        )
    }

};
