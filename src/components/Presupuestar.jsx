import React, { useState, useEffect } from "react";
import './Presupuestar.css';
import { BsTelephoneInbound, BsWhatsapp, BsFacebook, BsInstagram, BsFillPhoneVibrateFill  } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { useHistory } from 'react-router-dom';
import { postPasajeros } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function Pres () {
  const history = useHistory()
  const dispatch = useDispatch()
  const [ input, setInput ] = useState({//aca uso el input para guardar los datos que cargo en la pagina
      name:"",
      email:"",
      telefono:"",
      nacimiento:"xx/xx/xxxx",
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
  alert("En breve responderemos su consulta!")
  setInput({
    name:"",
      email:"",
      telefono:"",
      nacimiento:"xx/xx/xxxx",
      fecsalida:"",
      destino:"",
      cantpersonas:"",
      cantnoches:"",
      pedidoadic:""
  })
  window.location.reload()
}

    return (
      <div>
      <div className="pres">
     
        <br />
        <h1>Presupuestar</h1>
        
        <form onSubmit={(e) => handleSubmit(e)} >
       <div>
         <input class="form-control" id ="inputName"  placeholder='Nombre' className='forml'
         type="text"
         name="name"
         required
         onChange={(e) => handleChange(e)} 
       />
      
       </div>
       <div>
         <input class="form-control" id ="inputEmail"  placeholder='Correo electronico' className='forml'
         type="text"
         name="email"
         required
         onChange={(e) => handleChange(e)} 
       />
       </div> 
       <div>
         <input class="form-control" id ="inputPhone"  placeholder='Celular' className='forml'
         type="number"
         name="telefono"
         required
         onChange={(e) => handleChange(e)} 
       /> 
       </div>
       <div>
         <input class="form-control" id ="inputFecEv"  placeholder='fecha de salida' className='forml'
         type="text"
         name="fecsalida"
         required
         onChange={(e) => handleChange(e)} 
       />
       </div>
       <div>
         <input class="form-control" id ="inputLocal"  placeholder='Lugar de destino' className='forml'
         type="text"
         name="destino"
         required
         onChange={(e) => handleChange(e)} 
       />
       </div> 
       <div>
         <input class="form-control" id ="inputPerson"  placeholder='Cantidad de personas' className='forml'
         type="number"
         name="cantpersonas"
         required
         onChange={(e) => handleChange(e)} 
       />
       </div>
       <div>
            <input class="form-control" id ="inputNoches"  placeholder='Cantidad de noches' className='forml'
            type="number"
            name="cantnoches"
            required
            onChange={(e) => handleChange(e)} 
          />
          </div>
       <div>
         <input class="form-control" id ="inputEv"  placeholder='Pedido adicional: Media pensión, Excursiones, Hotel, etc.' className='forml'
         type="text"
         name="pedidoadic"
         onChange={(e) => handleChange(e)} 
       />
       </div>
       <div>
         <button style={{marginTop:"4px"}} class="btn btn-primary" type='submit'>Consultar</button>
       </div>
      
     </form>
          <div className='info'>

              Una vez enviado el formulario, si ya le confirmamos disponibilidad puede abonar 
              la reserva. Si todavia no le confirmamos disponibilidad puede 
              contactarse por telefono, whatsapp o mail. 
              La reserva queda confirmada al abonar el 50% del valor total.
              En la sección Reservas puede obtener info de las distintas formas de pago.
          </div>
        </div>
       
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
         <br />
        <br />
        <br />
        <br />

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
};

