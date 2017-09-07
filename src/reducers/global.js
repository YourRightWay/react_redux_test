const globalVars =
    {
        logged: false,
    }
;


const globalState = (state = globalVars, action) => {
    if( action.type === 'CHANGE_LOGIN' ) {
        return Object.assign({}, state, {
            logged: action
        })
    }

    return state
};

export default globalState