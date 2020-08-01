import React from 'react';
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import axios from 'axios'
import { connect } from 'react-redux';
import './message.scss'
const mapState = (state) => {
  return {
    token: state.token
  }
}
export default connect(mapState)(class Meaasge extends React.Component {
  state = {
    message: {
      has_read_messages: [],
      hasnot_read_messages: []
    }
  }

  componentDidMount(){
    this.getData();
  }

  async getData() {
    let { data: res } = await axios.get(`/v1/messages`, { params: { accesstoken: this.props.token } }).then(res => res.data);
    this.setState((state) =>{
      state.message = {...res};
      return state;
    })
  }

  Msg = (arr) => {
    return (
      <ul>
        {arr.map((v, i) => {
          return (
            <li key={i}>
              {
                v.type === 'reply' && <div>
                  <NavLink to={`/user/${v.author.loginname}`}>{v.author.loginname}</NavLink>
                  <span> 回复了你的话题 </span>
                  <NavLink to={`/topic/${v.topic.id}`}>{v.topic.title}</NavLink>
                </div>
              }
              {
                v.type === 'at' && <div>
                  <NavLink to={`/user/${v.author.loginname}`}>{v.author.loginname}</NavLink>
                  <span> 在话题 </span>
                  <NavLink to={`/topic/${v.topic.id}`}>{v.topic.title}</NavLink>
                  <span> 中@了你</span>
                </div>
              }
            </li>
          )
        })
        }
      </ul>
    )
  }
  render() {
    return (
      <div className="message">
        <div className="panel">
          <Breadcrumb>
            <NavLink to='/index'>首页</NavLink>
                /
            <span >新消息</span>
          </Breadcrumb>
          <div className="msg-list">
            {
              this.state.message?.has_read_messages.length === 0 ? <div>暂无消息</div> : this.Msg.call(this, this.state.message?.hasnot_read_messages)
            }
          </div>
        </div>
        <div className="panel" style={{ marginTop: '15px' }}>
          <Breadcrumb>
            <div style={{ color: '#000' }}> 已读消息</div>
          </Breadcrumb>
          <div className="msg-list">
            {
              this.state.message?.hasnot_read_messages.length === 0 ? <div>暂无消息</div> : this.Msg.call(this, this.state.message?.has_read_messages)
            }
          </div>
        </div>
      </div>
    )
  }
});
