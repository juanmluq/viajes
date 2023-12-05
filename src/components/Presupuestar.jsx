import React from 'react';
import './Presupuestar.css';
import { BsTelephoneInbound, BsWhatsapp, BsFacebook, BsInstagram, BsFillPhoneVibrateFill  } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Pres () {
  const history = useHistory()

    return (
      <div>
      <div className="pres">
     
        <br />
        <h1>Presupuestar</h1>
        
        <form method='POST' action='https://formsubmit.co/eventosant@gmail.com' >
          <div>
            <input class="form-control" id ="inputName"  placeholder='Nombre y apellido' className='forml'
            type="text"
            name="name"
            required
          />
         
          </div>
          <div>
            <input class="form-control" id ="inputEmail"  placeholder='Correo electronico' className='forml'
            type="text"
            name="email"
            required
          />
          </div> 
          <div>
            <input class="form-control" id ="inputPhone"  placeholder='Celular: 011 2222 2222' className='forml'
            type="number"
            name="phone"
            required
          />        
          </div>
          <div>
            <input class="form-control" id ="inputFecEv"  placeholder='Fecha de salida: xx/xx/xxxx' className='forml'
            type="date"
            name="fecData"
          />
          </div>
          <div>
            <input class="form-control" id ="inputLocal"  placeholder='Lugar de destino: Ej, Mar del Plata, Florianopolis, etc' className='forml'
            type="text"
            name="loc"
            required
          />
          </div> 
          <div>
            <input class="form-control" id ="inputPerson"  placeholder='Cantidad de personas' className='forml'
            type="number"
            name="person"
            required
          />
          </div>
          <div>
            <input class="form-control" id ="inputNoches"  placeholder='Cantidad de noches' className='forml'
            type="number"
            name="noches"
            required
          />
          </div>
          <div>
            <input class="form-control" id ="inputEv"  placeholder='Pedido adicional: Comidas, Excursiones, etc.' className='forml'
            type="text"
            name="evento"
            required
          />
          </div>
          <br />

          <div>
            <button class="btn btn-primary" type='submit'>Presupuestar</button>
          </div>
          <input type="hidden" name="_captcha" value="false" />

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

