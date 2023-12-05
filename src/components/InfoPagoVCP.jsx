import React, { useState, useEffect } from "react";
import "./InfoPago.css";
import { postPasajeros } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";
import { BsWhatsapp, BsFacebook, BsInstagram, BsFillPhoneVibrateFill  } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import qrmp from "../img/qrmp.png"

export default function InfoPagoVCP() {
  const dispatch = useDispatch()
  const [ input, setInput ] = useState({//aca uso el input para guardar los datos que cargo en la pagina
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

function handleChange(e){
  setInput({ 
      ...input,
      [e.target.name] : e.target.value
  })
  console.log(input) //con esto veo en consola que se va cargando en el input
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(input)
  dispatch(postPasajeros(input))
  alert("Formulario enviado!!")
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
  //  history.push("/home") //cuando termine de hacer lo anterior llevame al home. El history.push  redirige
}
  return (
    <div>
    <div className='centradoInfo'>
    
    <h3>Reserva</h3>
      Para realizar la reserva debe completar el formulario, abonar el pago de minimo del 50% y enviar el comprobante via whatsapp al 1127381642 o via mail a eventosant@gmail.com.
      Luego se le solicitara nombres completos de los acompañantes, dni, fechas de nacimiento y punto de abordo.
        <br />

        <div className="pres">
          
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
         <label for="inputLocal" class="form-label">Lugar de destino:</label>
         <input class="form-control" id ="inputLocal"  placeholder='Ej, Mar del Plata, Florianopolis, etc' className='forml'
         type="text"
         name="destino"
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
       <label for="inputNoches" class="form-label">Cantidad de noches:</label>
            <input class="form-control" id ="inputNoches"  placeholder='Cantidad de noches' className='forml'
            type="number"
            name="cantnoches"
            required
            onChange={(e) => handleChange(e)} 
          />
          </div>
       <div>
         <label for="inputEv" class="form-label">Pedido adicional:</label>
         <input class="form-control" id ="inputEv"  placeholder='Media pensión, Excursiones, Hotel, etc.' className='forml'
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

     <h3>Formas de Pago</h3>
        <div>
          Aceptamos transferencias a:
        <br />
        Cvu: 0000003100019762484119
        <br />
        Alias: eventosant.mp
        <br />
        <br />
          Tambien puede abonar con tarjetas escanando el qr de MercadoPago:
        <br />
          <img className='imageInfo' src={qrmp} alt="qr MercadoPago" />
        </div>
        <div className='fondo'>       
          <div className='metpago'>
            <div className='pag'> 
              <img className='iconouno' src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/mercado-pago.svg" alt="imagenmp" />
              <img className='iconodos' src="https://www.codere.bet.ar/_catalogs/masterpage/codere/img/Logo_TransferenciaBancariacolor.png" alt="imagentansferencia" />
              <img className='iconotres' src="https://www.bodog.com/cms/BDG/TBvSuab9Qvyj5dczL03oFQ//american-express-bodog.png" alt="imagenamerican" />
              <img className='iconotres' src="https://www.bodog.com/cms/BDG/MntYnxPqQVeNdn1G8H52YA//master-card-bodog.png" alt="imagenmaster" />
              <img className='iconotres' src="https://www.bodog.com/cms/BDG/WZpFmUOhQgmSxSw97Z1ytg//visa-bodog.png" alt="imagenvisa" />
            </div>       
        </div>
        </div>
      <br />
      Una vez hecho el pago enviar comprobante por whatsapp al 1127381642 o via mail a eventosant@gmail.com para recibir los vouchers de viaje, junto con la tarjeta de reserva del hotel.
      <br />
     
      <br />
<div>
  <h4>Info salidas</h4>
  Salidas diarias a Villa Carlos Paz:
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
<a style={{ width:"auto", color:"white"}} href="https://api.whatsapp.com/send?phone=+5491127381642"> <BsWhatsapp /> Whatsapp 
</a>
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
