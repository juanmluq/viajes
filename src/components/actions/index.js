import axios from "axios";

export function getPasajeros(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/pasajeros");
        return dispatch({
            type: "GET_PASAJEROS",
            payload: json.data
        })
    }
}


export function postPasajeros(payload){
     return async function(dispatch) {
        const response= await axios.post("http://localhost:3001/pasajero", payload); //axios.post dispara una ruta de post
        return response
     }
}