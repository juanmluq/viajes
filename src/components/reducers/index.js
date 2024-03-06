
const initialState = {
    pasajeros : [], //este lo uso de variable auxiliar para poder renderizar segun lo que necesite
    allPasajeros: [], //a este estado lo tengo de soporte para que traiga todos los pasajeros
}

function rootReducer (state= initialState, action){
    switch(action.type){
        case 'GET_PASAJEROS': 
            return{
                ...state,
                pasajeros: action.payload,
                allPasajeros: action.payload
            }
        case "POST_PASAJEROS" :
            return {
                ...state,      
            }
        default:
            return state;
    }
}

export default rootReducer;
