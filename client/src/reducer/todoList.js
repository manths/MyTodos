export default function(state={},action){
    switch(action.type){
        case"TODOS_LIST":
            return {...state,todos:action.payload};
        default:
            return state
    }
}