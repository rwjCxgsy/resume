import React, {Component, Children} from 'react'
import {Route, HashRouter, Switch} from 'react-router-dom'
import {createHashHistory} from 'history'

const history = createHashHistory()
// import Merchant from './route/merchant'

export interface Routeres {
    path: string,
    exact: boolean,
    component: any,
    children?: any
}

let Routes: Routeres[] = [
    {
        path: '/',
        exact: true,
        component: require('@/views/App').default
    },
    // {
    //     path: "*",
    //     component: require('../views/error').default
    // },
    // {
    //     path: "/login",
    //     component: require('../views/login/index.tsx').default
    // }
]


export const renderRoutes = (Routes: Routeres[]) => {
    return (
        <Switch>
            {
                Routes.map((v, i) => {
                    if (v.children) {
                        return <Route key={i} exact={v.exact} path={v.path} render={() => {
                            return (
                                <v.component>
                                    {
                                        renderRoutes(v.children)
                                    }
                                </v.component>
                            )
                        }} />
                    } else {
                        return <Route key={i} exact={true} path={v.path} component={v.component} />
                    }
                })
            }
        </Switch>
    )
}

class AppRouter extends Component {
    render () {
        return (
            <HashRouter>
                {renderRoutes(Routes)}
            </HashRouter>
        )
    }
}

export default AppRouter
