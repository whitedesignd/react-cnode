import React from 'react';
import axios from 'axios'
import {Route,Switch,Redirect} from 'react-router-dom';
import router from './router'
export default function RouteLink(props) {
    const getHtml = async (url,setData) =>axios.get(`/cnode${url}`).then(res=>{
            let d = res.data;
            let html = document.createElement('html');
            html.innerHTML = d;
            let contain = html.querySelector('#main #content').outerHTML;
            setData(contain);
    })
    return (
        <Switch>
            {
                router.map( (v,i) => {
                    return <Route key={i} exact={v.exact} path={v.path} 
                                render={({match,history}) =>{
                                    if(match){
                                        return <>
                                            <v.component  match={match}  getHtml={getHtml} history={history} />
                                        </>
                                    }
                    }}></Route>
                })
            } 
            <Redirect to='/index/all' ></Redirect>
           
        </Switch>
    )
};
