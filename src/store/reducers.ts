import { ActionType, Action } from './actions';

const initialState = {
    consumers : 100,
    agents : 10,
    loading : false,
    simulationResult: {},
    resultResponseError:''    
}

// the reducers for each state 
export const reducers = (state: {} = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE_CONSUMERS : 
        return {
            ...state, 
            consumers: action.payload   
        }

        case ActionType.UPDATE_AGENTS : 
        return {
            ...state, 
            agents: action.payload   
        }

        case ActionType.START_POST_REQUEST: 
        return {
            ...state,
            loading: true
        }

        case ActionType.RESULT_RESPONSE_SUCCESS: 
        return {
            ...state,
            loading: false,
            simulationResult: action.payload
        }

        case ActionType.RESULT_RESPONSE_ERROR:
            return {
                ...state,
                loading: false,
                resultResponseError: action.payload
            }
        
        default: return state;
    }
}