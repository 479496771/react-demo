import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history"
import React, { Suspense, lazy } from 'react'
import App from './App.jsx'

const history = createBrowserHistory()
const Index = lazy(() => import("./component/index/index.jsx"))
const AddPage = lazy(() => import('./component/addPage/index'))

export default class IRoute extends React.Component {
    render() {
        return (
            <Router history={history}>
                <App>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/" exact component={Index} />
                            <Route path="/add" component={AddPage} />

                        </Switch>
                    </Suspense>
                </App>
            </Router>
        )
    }
}