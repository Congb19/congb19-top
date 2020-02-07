import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Loadable from 'react-loadable';
import MyLoadingComponent from './RouterLoading'

// home
const AsyncHome = Loadable({
    loader: () => import('../page/home/home'),
    loading: MyLoadingComponent
});

export default ()=>{
    return(
        <Switch>
            <Route exact path='/' component={ AsyncHome }/>
            {/*<Route path='/work' component={ AsyncWork }/>*/}
            {/*<Route path='/blog' component={ AsyncWelcome}/>*/}
            {/*<Route path='/about' component={ AsyncAbout}/>*/}
            {/*<Route path='/404' component={ AsyncErro }/>*/}
            {/*<Redirect to="/404"/>*/}
        </Switch>
    )
}