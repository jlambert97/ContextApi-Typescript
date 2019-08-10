import { Dispatch, createContext} from 'react'
import { IState, Actions } from './Reducer'

interface IContextProps {
    state: IState
    dispatch: Dispatch<Actions>
}

const Context = createContext({} as IContextProps)

export default Context
