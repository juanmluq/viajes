import axios from "axios";

export function getPasajeros(){
    return async function(dispatch){
        var json = await axios.get("https://backpasajeros-production.up.railway.app/pasajeros");
        return dispatch({
            type: "GET_PASAJEROS",
            payload: json.data
        })
    }
}


export function postPasajeros(payload){
     return async function(dispatch) {
        const response= await axios.post("https://backpasajeros-production.up.railway.app/pasajero", payload); //axios.post dispara una ruta de post
        return response
     }
}