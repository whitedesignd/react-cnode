import React,{useContext} from 'react';
import TopicTab from '../topic/TopicTab';
import { NavLink } from 'react-router-dom';
import './topic-list.scss'
import Context from '../../Context.js'
export default function TopicList(props) {
    const {now,timeInterval} = useContext(Context);
    const {v} = props;
    return (
        <>
            <div className="cell">
                <NavLink to={`/user/${v.author.loginname}`}>
                    <img src={v.author.avatar_url} alt={v.author.loginname} title={v.author.loginname}></img>
                </NavLink>
                {
                    v.reply_count >=0 && <div className="rank" >
                        <span>{v.reply_count}</span>
                        <span>/</span>
                        <span>{v.visit_count}</span>
                    </div>
                }
                {
                    v.top != undefined &&  <TopicTab top={v.top} good={v.good} tab={v.tab} ></TopicTab>
                }
                <NavLink className="title" to={`/topic/${v.id}`}>{v.title}</NavLink>
                <NavLink className="time" to={`/topic/${v.id}`}>
                    <div>{v.create_at?timeInterval(v.create_at):timeInterval(v.last_reply_at)}</div>
                </NavLink>
            </div>
        </>
    )
};
