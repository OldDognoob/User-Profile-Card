export default(state, actions)=>{
    switch(actions.type) {
        case "SET_ABOUT":
            return {
                ...state,
                aboutOne:actions.text
            }
            default:
                return state;
    }
}
