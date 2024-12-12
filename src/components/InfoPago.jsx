import React, { useState } from "react";
import { useHistory  } from "react-router-dom";
import "./InfoPago.css";
import { postPasajeros } from "./actions/index";
import { useDispatch } from "react-redux";
import { BsWhatsapp, BsFacebook, BsInstagram, BsFillPhoneVibrateFill  } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import sanber from "../img/sanber.jpg";
import santateresita from "../img/santateresita.jpg";
import mardel from "../img/mardel.jpg";
import gesell from "../img/gesell.jpg";
import carlospaz from "../img/carlospaz.jpg";
import mardeajo from "../img/mardeajo.jpg";
import floripa from "../img/floripa.jpg";

export default function InfoPago(id) {
  const dispatch = useDispatch();
  const history = useHistory();
  let packPorId = undefined;
   const packsArmados = [
    {id:1, nombre: "Santa Teresita", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ", imagen: santateresita ,dias: 4, descripcion: "Bus semi cama + alojamiento en hotel Monaco con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:210000}, {cant:2, fecha:"marzo", cambio:"$",precio:200000}]},
    {id:2, nombre: "Mar de Ajó", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ",imagen: mardeajo, dias: 3, descripcion: "Bus semi cama + alojamiento en hotel Munich con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:190000}, {cant:2, fecha:"marzo" , cambio:"$", precio:165000}]},
    {id:3, nombre: "San Bernardo", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ", imagen: sanber, dias: 4, descripcion: "Bus semi cama + alojamiento en hotel La Argentina con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:210000}, {cant:2, fecha:"marzo" , cambio:"$", precio:200000}]},
    {id:4, nombre: "Villa Gessel", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ", imagen: gesell, dias: 3, descripcion: "Bus semi cama + alojamiento en hotel Aldea Marina con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:205000}, {cant:2, fecha:"marzo" , cambio:"$", precio:175000}]},
    {id:5, nombre: "Mar del Plata", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ", imagen: mardel, dias: 4, descripcion: "Bus semi cama + alojamiento en hotel Cielo Azul con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:220000}, {cant:2, fecha:"marzo" , cambio:"$", precio:220000}]},
    {id:6, nombre: "Villa Carlos Paz", salidas:"Todos los días de noviembre y diciembre de 2024, enero, febrero,marzo y abril de 2025. ", imagen: carlospaz, dias: 3, descripcion: "Bus semi cama + alojamiento en hotel El Practico con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:160000}, {cant:2, fecha:"marzo" , cambio:"$", precio:160000}]},
    {id:7, nombre: "Florianópolis", salidas: "En temporada 2024-2025 salimos 15 de diciembre, 01 enero, 15 enero, 01 febrero, 14 febrero, 01 marzo, 15 marzo y 01 abril. El precio es a partir de 4 personas. Para grupos menores consultar antes de abonar. " ,imagen: floripa, dias: 7, descripcion: "Aéreo hasta Puerto Iguazu + Transfer + Bus semi cama + caipirinha de bienvenida + alojamiento en posada Luizinho + 6 noches de boliche.", preciosPersona:[{cant:4, fecha:"enero" , cambio:"u$d", precio:590}, {cant:4, fecha:"marzo", cambio:"u$d", precio:490}]}
  ];

  function ubicarPack(){
    let aux = {}
    for (let i = 0; i < packsArmados.length; i++) {
      if (packsArmados[i].id == id.id) {
        aux = packsArmados[i]
      }
    }
    return aux
  }
  packPorId = ubicarPack();

  // function calculoTotalXCant(){
  //   let precioTot = undefined;
  //   console.log(packPorId.preciosPersona)
  //   for (let i = 0; i < packPorId.preciosPersona.length; i++) {
  //     if (input.cantpersonas > packPorId.preciosPersona.length - 1){
  //       precioTot = packPorId.preciosPersona[packPorId.preciosPersona.length - 1].precio * input.cantpersonas;
  //       i = i + 999;
  //     } else if (packPorId.preciosPersona[i].cant == input.cantpersonas){
  //       precioTot = packPorId.preciosPersona[i].precio * input.cantpersonas
  //     } 
  
  //   }
  //   return precioTot;
  // }

  function calculoTotal(){
    let fechaSal = input.fecsalida.toString()
    let fecSal = fechaSal.slice(0,-3);
    let precioTot = undefined;
      if (input.cantpersonas == 1 && id.id < 7){
        precioTot = packPorId.preciosPersona[0].precio * 1.5
      } else if (input.cantpersonas != 4 && id.id == 7){
        precioTot = "consultar";
      }  else if (fecSal == "2025-01" || fecSal == "2025-02"){
        precioTot = packPorId.preciosPersona[0].precio * input.cantpersonas
      } else if (fecSal == "2024-12" || fecSal == "2025-03" || fecSal== "2025-04" ){
        precioTot = packPorId.preciosPersona[1].precio * input.cantpersonas
      }
  
    return precioTot;
  }


  const [ input, setInput ] = useState({
    name:"",
    email:"",
    telefono:"",
    nacimiento:"",
    fecsalida:"",
    destino: packPorId.nombre,
    cantpersonas:"",
    cantnoches: packPorId.dias,
    pedidoadic:""
  })

  function handleChange(e){
    setInput({ 
      ...input,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const auxCantPerson = input.cantpersonas;
    const auxFecSalida = input.fecsalida;
    let auxFecha = input.fecsalida.slice(0,-3); 
    if( auxFecha == "2024-12" || auxFecha == "2025-03" || auxFecha == "2025-01" || auxFecha == "2025-02"|| auxFecha == "2025-04" ){
      dispatch(postPasajeros(input));
    alert("Recibimos sus datos! Ya puede abonar!");
    let precTotal = calculoTotal();
    setInput({
      name:"",
      email:"",
      telefono:"",
      nacimiento:"",
      fecsalida:"",
      destino:"",
      cantpersonas:"",
      cantnoches:"",
      pedidoadic:""
    })
    history.push("/abonar/" + id.id + "/" + auxCantPerson +  "/" + precTotal + "/" + auxFecSalida )
    } else alert("ingrese una fecha entre diciembre 2024 - abril 2025")
  }

  function infoSalidas(){
    if(id.id === "7"){
      return (
        <div>
          Fechas de salidas: {packPorId.salidas}
          <br />
          Salida desde: Aeroparque 5 am hasta Puerto Iguazu (horario estimado de vuelo 2hs)
          <br />
          Una vez en Puerto Iguazu nos trasladamos en transfer hasta Foz de Iguacu.
          <br />
          Ya en Brasil, abordamos al bus que nos traladara hasta Florianópolis.
          <br />
          A partir del arribo a la ciudad tienen la cantidad de noches detalladas en el pack incluidas en el alojamiento.
          <br />
          El regreso a casa se realiza pasadas las noches correspondientes a las 11:00 am aprox desde la terminal correspondiente.
          <br />
          El checkin al hotel es a las 13 hs aprox. De llegar antes pueden dejar sus bolsos en recepción y salir a pasear.
          <br />
          El regreso es de la misma forma a la inversa. 
        </div>
      )
    } else if(id.id === "6") {
      return (
        <div>
          Fechas de salidas: {packPorId.salidas}
          <br />
          Salida desde: Terminal Liniers y terminal Retiro (Consultar otros puntos de arribo).
          <br />
          Horario estimado de comienzo del recorrido: 21.00 hs.
          <br />
          A partir del arribo a la ciudad tienen la cantidad de noches detalladas en el pack incluidas en el alojamiento.
          <br />
          El regreso a casa se realiza pasadas las noches correspondientes a las 11:00 am aprox desde la terminal correspondiente.
          <br />
          El checkin al hotel es a las 13 hs aprox. De llegar antes pueden dejar sus bolsos en recepción y salir a pasear.
          
        </div>
      )
    } else return(
    <div>
      Fechas de salidas: {packPorId.salidas}
      
          <br />
          Salida desde: Terminal Liniers, Llavallol y Cruce Varela (Consultar otros puntos de arribo).
          <br />
          Horario estimado de comienzo del recorrido: 05.00 am (segun el punto de partida puede variar).
          <br />
          A partir del arribo a la ciudad tienen la cantidad de noches detalladas en el pack incluidas en el alojamiento.
          <br />
          El regreso a casa se realiza pasadas las noches correspondientes a las 11:00 am aprox desde la terminal correspondiente.
          <br />
          El checkin al hotel es a las 13 hs aprox. De llegar antes pueden dejar sus bolsos en recepción y salir a pasear.
          
          </div>
    )
    
  }

 
  return (
    <div>
      <div className='centradoInfo'>
        <h3>Reserva</h3>
          <img src= {packPorId.imagen} alt="img pack" />
        Para realizar la reserva debe completar el formulario, abonar el pago minimo del 50% y enviar el comprobante via whatsapp al 1127381642 o via mail a eventosant@gmail.com.
        Luego se le solicitara nombres completos de los acompañantes, dni, fechas de nacimiento y punto de abordo.
        <br />
        <div className="presTres">        
          <form onSubmit={(e) => handleSubmit(e)} >
            <div>
              <label for="inputName" class="form-label">Nombre:</label>
              <input class="form-control" id ="inputName"  placeholder='Nombre y apellido' className='forml'
                type="text"
                name="name"
                required
                onChange={(e) => handleChange(e)} 
              />
            </div>
            <div>
              <label for="inputEmail" class="form-label">Email:</label>
              <input class="form-control" id ="inputEmail"  placeholder='Correo electronico' className='forml'
                type="text"
                name="email"
                required
                onChange={(e) => handleChange(e)} 
              />
            </div> 
            <div>
              <label for="inputPhone" class="form-label">Celular:</label>
              <input class="form-control" id ="inputPhone"  placeholder='011 2222 2222' className='forml'
                type="number"
                name="telefono"
                required
                onChange={(e) => handleChange(e)} 
              />
            </div>
            <div>
              <label for="inputFecNac" class="form-label">Fecha de Nacimiento:</label>
              <input class="form-control" id ="inputFecNac" className='forml'
                type="date"
                name="nacimiento"
                required
                onChange={(e) => handleChange(e)} 
              />
            </div>
            <div>
              <label for="inputFecEv" class="form-label">Fecha de salida:</label>

              <input class="form-control" id ="inputFecEv"  placeholder='xx/xx/xxxx' className='forml'
                type="date"
                name="fecsalida"
                required
                onChange={(e) => handleChange(e)} 
              />
            </div>
            <div>
              <label for="inputPerson" class="form-label">Cantidad de personas:</label>
              <input class="form-control" id ="inputPerson"  placeholder='Cantidad de personas' className='forml'
                type="number"
                name="cantpersonas"
                required
                onChange={(e) => handleChange(e)} 
              />
            </div>
            <div>
              <label for="inputEv" class="form-label">Pedido adicional:</label>
              <input class="form-control" id ="inputEv"  placeholder='Media pensión, Excursiones, Hotel, Sin pedido adicional, etc.' className='forml'
                type="text"
                name="pedidoadic"
                onChange={(e) => handleChange(e)} 
              />
            </div>
            <br />
            <div>
              <button class="btn btn-primary" type='submit'>Reservar</button>
            </div>
            {/* <input type="hidden" name="_next" value="http://localhost:3000/infopagos" /> */}
            {/* <input type="hidden" name="_captcha" value="false" /> */}
          </form>
          </div>
         
            <div className='fondo'>       
              <div className='metpago'>
                <div className='pag'> 
                  <img className='iconouno' src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/mercado-pago.svg" alt="imagenmp" />
                  <img className='iconodos' src="https://www.codere.bet.ar/_catalogs/masterpage/codere/img/Logo_TransferenciaBancariacolor.png" alt="imagentansferencia" />
                </div>       
              </div>
            </div>
            <br />
            Una vez hecho el pago enviar comprobante por whatsapp al 1127381642 o via mail a eventosant@gmail.com para recibir los vouchers de viaje, junto con la tarjeta de reserva del alojamiento.
            <br />
            <br />
        <div>
          <h4>Info Salidas</h4>
          {infoSalidas()}
          <br />
          <br />
          <h4>Condiciones: </h4>
          * El micro puede llegar hasta donde lo permita la secretaria de turismo en la ciudad elegida. En el caso que llegue a la terminal de ómnibus el pasajero debe abonar el taxi/remis para el traslado interno a su alojamiento.
          <br />
          * Las tarifas no incluyen seguro de asistencia al viajero, sugerimos la contratación del mismo. Solicitar tarifa especial en cada caso.
          <br />
          * Al momento de subir al micro, se presentarán los comprobantes de cada uno de los depósitos de reserva.
          <br />
          * Los horarios son estimados y sujetos a modificación. En caso de algún cambio, serán informados previamente por el coordinador.
          <br />
          * En el caso que el bus contratado tenga alguna ruptura, el pasajero aceptara el tiempo de reparación o recambio del coche.
          <br />
          * El único responsable frente al pasajero es el transportador que efectúa el traslado.
          <br />
          * La seña en concepto de reserva no es reembolsable en caso de cancelación por parte del pasajero.
          <br />
          * En caso de fuerza mayor o desastre climático Eventos Ant. podrá disponer de un porcentaje no superior al 20% del valor total del viaje en concepto de gastos administrativos y costos de reserva.
          <br />
          <br />
          Cualquier consulta que tengas, no dudes en contactarnos.
          <br />
          <br />
          Eventos Ant.
        </div>      
      </div>
      <footer className='piePagin'>
        <div style={{display: "flex", position: "relative", justifyContent: "space-between", margin:"0% 5%" }}>
          <div> <BsFillPhoneVibrateFill/> (011) 2738 1642 </div>
          <div> <BiMailSend/> eventosant@gmail.com </div>
        </div>        
        <div style={{display: "flex", position: "relative", justifyContent:"space-between", margin:"0% 5%" }}>
          <a style={{ width:"auto", color:"white"}} href="https://api.whatsapp.com/send?phone=+5491127381642"> <BsWhatsapp /> Whatsapp </a>
          {/* <a style={{color: "white"}} href='https://www.instagram.com/potenciarcash/'><BsInstagram/> Instagram</a> */}
          <a style={{color: "white"}} href='https://web.facebook.com/profile.php?id=100064332926542'> <BsFacebook/> Facebook</a>
        </div>
        <div style={{display: "flex", position: "relative", justifyContent:"center" }}>
          Eventos Ant. organiza tu destino!
          <br />
        </div>
        <a style={{display: "flex", position: "relative", justifyContent:"center", paddingBottom:"10px" }} href="/condiciones">Terminos Y Condiciones</a> 
      </footer>
    </div>
  );
}
