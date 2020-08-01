import React from 'react';
import './breadcrumb.scss'
export default function Breadcrumb(props) {
    return (
            <div className="breadcrumb">
                {
                    props.children
                }
            </div>
    )
};
