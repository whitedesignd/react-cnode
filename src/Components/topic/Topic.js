import React, { useState,memo, useEffect} from 'react';
import axios from 'axios';
import Login from './Loging'
import Pagination from '../pagination/Pagination'
import TopicList from '../topicList/TopicList';

const Topic = memo((props) => {
    const [list, setList] = useState([]);
    const [key, setKey] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 30;
    //初始化
    useEffect(() => {
        (async() => {
            let params = {
                'page': page,
                'limit': limit,
                'tab': props.tag,
                'mdrender': true
            }
            let {data:res}= await axios.get('/v1/topics', {params});
            setList(res.data);
            if(res.success){
                setKey(false);
            }
        })();
    }, [page]);
    //设置页码
    const onChange = async (currPage) => {
        setPage(currPage);
    }
    return (
        <div className='list'>
            {
                key ? <Login ></Login> : (
                    < >
                        {
                            list.map(v => <React.Fragment key={v.id}>
                                <TopicList v={v}></TopicList>
                            </React.Fragment>)
                        }
                        <Pagination showPages={5} total={40} onChange={onChange}></Pagination>
                    </>
                )
            }

        </div>
    )
});
// const mapDispatchProps = (dispatch) =>{
//     return {
//         handClick: v => {
//             dispatch({
//                 type:"SAVE_DETAILS",
//                 details:  {timeInterval:`${getTime(v.last_reply_at)}`,...v}
//             })
//         }
//     }
// }
export default Topic