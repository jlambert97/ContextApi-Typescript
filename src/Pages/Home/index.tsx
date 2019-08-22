import React, { useContext } from 'react'
import Context from '../../App/Context'
import { Container } from './style'
const Home = () => {
    const { state, dispatch } = useContext(Context)
    return(
        <Container>
            <div>{state.value}</div>
            <button 
                onClick={() => dispatch({type: 'SET_VALUE', payload:'Teste'})}
            >Template Dispatch</button>
        </Container>
    )
}

export default Home
