export interface IState {
    value: any
}

export type Actions = 
    | { type: 'SET_VALUE', payload: any}

export const initialState: IState = {
    value: 'Hello'
}

const reducer = (state: IState, action: Actions): IState => {
    switch(action.type){
        case 'SET_VALUE': 
            return {
            ...state,
            value: action.payload
        }
        default:
            return state
    }
}

export default reducer