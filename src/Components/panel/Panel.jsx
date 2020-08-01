import React from 'react';
import TopicList from '../topicList/TopicList';
export default function Panel(props) {
    return (
        <>
            <div className="panel">
                <div className="header">{props.title}</div>
                <div className="top-list">
                    {
                        props.list?.map((v,i)=><React.Fragment key={i}>
                            <TopicList v={v}></TopicList>
                        </React.Fragment>)
                    }
                </div>
            </div>
        </>
    )
};
