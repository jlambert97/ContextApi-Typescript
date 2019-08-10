import React, { useReducer } from 'react'
import GlobalStyle from './style'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Context from './Context';
import Reducer, { initialState } from './Reducer';

const App = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const store = { state, dispatch }

    return (
        <>
            <Router>
                <Context.Provider value={store}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Context.Provider>
            </Router>
            <GlobalStyle />
        </>
    )
}

export default App