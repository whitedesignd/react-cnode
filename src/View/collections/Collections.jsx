import React,{useEffect, useState} from 'react';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import { NavLink } from 'react-router-dom'
import TopicList from '../../Components/topicList/TopicList';
import Personal from '../../Components/personal/Personal'
export default function Collections(props) {
    const [data,setData] = useState();
    useEffect(()=>{
        (async () => {
            let {data : res} = await fetch(`/v1/topic_collect/${props.match.params.name}`).then(res=>res.json());
        })();
    },[]);
    return (
        <div className='header-router'>
            <div className='router-content'>
                <div className="collections">
                    <Breadcrumb>
                        <NavLink to='/index' style={{padding:'0 5px'}}>首页</NavLink>
                            /
                        <NavLink to={`/user/${props.match.params.name}`}><span style={{color:'#de5b5be3'}}>{props.match.params.name}</span></NavLink>
                        <span style={{color:'#999', cursor: 'pointer'}}>收藏的主题</span>
                    </Breadcrumb>
                    {
                        data?.map((v,i)=><React.Fragment key={i}>
                            <TopicList v={v}></TopicList>
                        </React.Fragment>
                        )
                    }
                    </div>
            </div>
            {data&&<Personal ></Personal>}
        </div>

      
    )
};
