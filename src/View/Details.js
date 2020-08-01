import React, { useState, useEffect, useContext, useCallback,useRef } from 'react';
import TopicTab from '../Components/topic/TopicTab'
import { NavLink } from 'react-router-dom';
import Context from '../Context.js'
import { connect } from 'react-redux';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import axios from 'axios'
import Personal from '../Components/personal/Personal.jsx'
function Details(props) {
    const { match } = props;
    const [data, setData] = useState();
    const [reply, setReply] = useState([]);
    const [isCollect,setCollect] = useState();

    // 计算时间间隔
    const {now, timeInterval } = useContext(Context);
    // 富文本
    const [editorState, setEditor] = useState();

    // prew ref
    const prew = useRef();

    useEffect(() => {
        const getDetails = async () => {
            let { data: res } = await axios.get('/v1/topic/' + match.params.id,{params:{accesstoken: props.token}}).then(res=>res.data);
            setData(res);
            setReply(res.replies);
            setCollect(res.is_collect);
        };
        getDetails();
        setEditor(BraftEditor.createEditorState(''))
    }, []);
    // 评论滚动到可视区顶部
    const handClick = useCallback((e) => {
        e.currentTarget.scrollIntoView({ behavior: "smooth" })
        return false;
    }, []);

    //点赞
    const likeClcik = useCallback((id, e) => {
        e.preventDefault();
        if(!props.token) return alert("请登录");
        let index = reply.findIndex(v => {
            return v.id == id;
        });
        reply[index].ups.includes(props.token) ? reply[index].ups.splice(reply[index].ups.indexOf(props.token), 1) : reply[index].ups.push(props.token);
        setReply([...reply]);
    },[]);
    // 单独的回复
    const replyContent = () =>{

    }

    // 富文本编辑器
    const handleEditorChange = (editorState) => {
        setEditor(editorState.toHTML())
    };
    //预览
    const preview = () => {
    }
    // 回复
    const handleReplay = (e) =>{
        e.preventDefault();
        console.log(reply[1]);
        const rp = {
            id: "5ee1f524b703280f0bcb9240"+ Math.round(0.5), 
            author: {
                avatar_url: "https://avatars2.githubusercontent.com/u/14976489?v=4&s=120",
                loginname: "zy445566"
            },
            content: editorState,
            ups: Array(0), 
            create_at: new Date(), 
        }
        reply.push(rp);
        setReply([...reply]);
        setEditor('')
    }
    // BraftEditor配置项
    const controls = [
        'bold', 'italic', 'underline', 'separator',
        'media',
        'letter-spacing',
        'strikethrough',
        'line-height',
        'clear',
        'subscript',
        'hr',
        'text-align',
        'emojis', 
    ];
     // BraftEditor配置项
    const extendControls = [
        {
            key: 'custom-button',
            type: 'button',
            text: '预览',
            onClick: preview
        }
    ];

    // 添加取消收藏
    const handCollection = (e) =>{
        e.preventDefault();
        axios.post(`/v1/topic_collect/${isCollect?'de_collect':'collect'}`,{'accesstoken':props.token,'topic_id':data.id })
            .then( res => {
                if(res.success) setCollect(!isCollect);
            })
    }
    return (
        <>
            {!data ? <div className='header-router' style={{ 'backgroundColor': '#fff',height:'800px',width:'73%'}}></div> : <div className='header-router'>
                    <div className='details-content router-content'>
                        <div className="header topic_header">
                            <TopicTab top={data?.top} good={data?.good} tab={data?.tab}></TopicTab>
                            <div className="topic_htitle">
                                {data?.title}
                            </div>
                            <div className="changes">
                                <span >发布于 {timeInterval(data?.create_at)}</span>
                                <span >作者  <NavLink to={'/user/' + data?.author.loginname}>{data?.author.loginname}</NavLink>
                                </span>
                                <span >{data?.visit_count} 次浏览</span>
                                <span >最后一次编辑是 {timeInterval(data?.last_reply_at)}</span>
                                <span >来自 {data?.tab == 'ask' ? '问答' : '分享'}</span>
                                {
                                    props.token && <div className='collection'>
                                        <button className={!isCollect?'collect-bt':'cancel-collect'} 
                                            onClick={handCollection}
                                        >{isCollect?'取消收藏':'收藏'}</button></div>    
                                }
                            </div>

                        </div>
                        <div className='main' dangerouslySetInnerHTML={{ __html: data?.content }}></div>
                        <div className='replies'>
                            <div className="col_fade">{data?.reply_count}条回复</div>
                            {
                                reply?.map((v, i) => {
                                    return (
                                        <div className='cell' key={i}>
                                            <div className=" author_content">
                                                <div className="reply-are">
                                                    <NavLink to={'/user/' + v?.author.loginname}>
                                                        <img src={v.author.avatar_url} alt={v.author.loginname} title={v.author.loginname}></img>
                                                    </NavLink>
                                                    <div className="use-info">
                                                        <NavLink to={'/user/' + v?.author.loginname}>{v?.author.loginname}</NavLink>
                                                        <NavLink className='reply_time' onClick={handClick} to={`#${v.id}`}>
                                                            第{i + 1}楼•{timeInterval(v.create_at)}
                                                        </NavLink>
                                                    </div>

                                                </div>
                                                {
                                                    props.token?(  
                                                        <div className='reply-like' >
                                                            <span onClick={props.token ? likeClcik.bind(this, v.id) : ""}>
                                                                🤞{v.ups.length}
                                                            </span>
                                                            {/* <span onClick={props.token ? replyContent.bind(this, v) : ""}>

                                                            </span> */}
                                                        </div>
                                                    ):(
                                                        <div className='reply-like' style={{ 'display': v.ups.length > 0 ? 'block' : 'none' }}>
                                                            <span onClick={props.token ? likeClcik.bind(this, v.id) : null}>
                                                                🤞{v.ups.length}
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                                
                                
                                            </div>
                                            <div className='reply-content' dangerouslySetInnerHTML={{ __html: v.content }}></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            props.token && (
                                <>
                                    <p className='tip'>添加回复</p>
                                    <div className="markdown_in_editor">
                                        <BraftEditor
                                            value={editorState}
                                            controls={controls}
                                            extendControls={extendControls}
                                            onChange={handleEditorChange}
                                        />
                                        <div className="prew" ref={prew}></div>
                                        <div className="reply-btn" onClick={handleReplay}>
                                            <button>回复</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    {data&&<Personal author={data.author}></Personal>}
            </div>
           
            }
        </>

    )
};
const mapState = (state) => {
    return {
        token: state?.token
    }
};
// const mapDispatch = dispatch => {
//     return {
//         handClick
//     }
// };
export default connect(mapState)(Details);