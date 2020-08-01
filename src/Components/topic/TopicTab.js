import React from 'react';
export default function TopicTab(props) {
    const green ={
        backgroundColor:'#80bd01',
        color: "#fff"
    }
    const white ={
        color: '#999',
        backgroundColor: '#e5e5e5',
    }
    const styleGood = {
        color:'#fff',
        fontSize: '12px',
        padding: '2px 4px',
        whiteSpace: 'nowrap',
        lineHeight: 1.5,
        margin: '0 5px',
        borderRadius: 5,
    }

    if(props.top){
        return <span style={{...styleGood,...green}}>置顶</span>
    }
    if(props.good && !props.top){
        return <span style={{...styleGood,...green}}>精华</span>
    }
    return  <span style={{...styleGood,...white}}>{props.tab=='ask'?'问答':'分享'}</span>
};
