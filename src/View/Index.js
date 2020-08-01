import React,{useEffect} from 'react';
import './Index.scss'
import {Switch,Route,useHistory} from 'react-router-dom';
import Tab from '../Components/tabar/Tabar.js'
import Topic from '../Components/topic/Topic'
import Personal from '../Components/personal/Personal.jsx'
function Index(props) {
    const history = useHistory();
    useEffect(()=>{
        if(history.location.pathname == '/index'){
            history.push('/index/all')
        }
    },[history.location.pathname]);
    return (
        <>
            <div className="index-container">
                <div className='tabbar'>
                    <Tab></Tab>
                </div>
                <div className='toplist-cell'>
                    <Switch>
                        <Route exact path='/index/:tag' component={
                            ({match}) => {
                                return <Topic tag={match.params.tag}/>
                            }
                        }></Route>
                    </Switch>
                </div>
            </div>
            <Personal></Personal>
        </>
    )
}

export default Index;