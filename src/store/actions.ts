
export enum ActionType {
    UPDATE_CONSUMERS,
    UPDATE_AGENTS,
    START_POST_REQUEST,
    RESULT_RESPONSE_SUCCESS,
    RESULT_RESPONSE_ERROR
}
// action typedef
export interface Action {
    type: ActionType,
    payload: any
}

// actions to be taken by the reducer to update the redux store.
export const updateConsumers = (consumers: number) => {
    return {
        type: ActionType.UPDATE_CONSUMERS,
        payload: consumers
    }
};
export const updateAgents = (agents: number) => ({
    type: ActionType.UPDATE_AGENTS,
    payload: agents
});
export const startPostRequest = () => ({
    type : ActionType.START_POST_REQUEST,
    payload : null
});
export const resultResponseSuccess = (json: any) => ({
    type: ActionType.RESULT_RESPONSE_SUCCESS,
    payload: json
});
export const resultResponseError = (error: string) => ({
    type: ActionType.RESULT_RESPONSE_ERROR,
    payload: error
});

// this action itself dispatches START_POST_REQUEST action, and initiates the api call, and on response from the server either dispatches the 
//.. METRICS_RESPONSE_SUCCESS or the METRICS_RESPONSE_ERROR actions. 
const callApi = (consumers: number, agents: number) => (dispatch: any) =>  { 
    dispatch(startPostRequest());

    const url= `http://localhost:3030/api/getSimulationResult?consumers=${consumers}&agents=${agents}`;
    return (
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify({consumers: consumers, agents: agents})
        })
        .then((response:any) => response.json())
        .then(res => {
            console.log(res);
            dispatch(resultResponseSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(resultResponseError(error));
        })
    )
};

export const getSimulationResult = () => (dispatch: any, getState:Function ) =>  {
    if(getState().loading === false) {
        return dispatch(callApi(getState().consumers, getState().agents));
    }

}