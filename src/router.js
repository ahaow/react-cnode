import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import App from './App'
import NoFound from './pages/nofound'
import Header from './common/header'
import Footer from './common/footer'
import Detail from './pages/detail'
import Home from './pages/home'
import HomeInner from './pages/home/components/HomeInner'
import Login from './pages/login'
import Newtopic from './pages/newtopic'
import EditTopic from './pages/edittopic'
import User from './pages/user'
import TopicCollect from './pages/topiccollect'

class Router extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <Fragment>
                            <Header/>
                            <App>
                                <Switch>
                                    <Route
                                        path='/home'
                                        render={() => {
                                        return (
                                            <Home>
                                                <Switch>
                                                    <Route exact path="/home/:id" component={HomeInner}/>
                                                    <Route exact path="/home/login" component={Login}/>
                                                    <Route exact component={NoFound}/>
                                                </Switch>
                                            </Home>
                                        )
                                    }}></Route>
                                    <Route exact path='/login' component={Login}></Route>
                                    <Route exact path='/detail' component={Detail} />
                                    <Route exact path='/newtopic' component={Newtopic} />  
                                    <Route exact path='/edittopic' component={EditTopic} />  
                                    <Route exact path='/user' component={User} />
                                    <Route exact path='/topic-collect' component={TopicCollect} />
                                    <Redirect exact path="/" to={{ pathname: '/home/all' }}/>
                                    <Route exact component={NoFound}/>
                                </Switch>
                            </App>
                            <Footer></Footer>
                        </Fragment>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        );
    }
}

export default Router;
