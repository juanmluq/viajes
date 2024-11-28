import React from "react";
import './Packs.css';
import sanber from "../img/sanber.jpg"
import santateresita from "../img/santateresita.jpg"
import mardel from "../img/mardel.jpg"
import gesell from "../img/gesell.jpg"
import carlospaz from "../img/carlospaz.jpg"
import mardeajo from "../img/mardeajo.jpg"
import { BsTelephoneInbound, BsWhatsapp, BsFacebook, BsInstagram, BsFillPhoneVibrateFill  } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Packs() {
  return (
    <div>
      <div className="centrado">
        <div className="packs">
          <h2>Paquetes</h2>
          <br />
        <div className="centradoPacks">
          <div className="imgPacks">
            <img src={santateresita} alt="imgSantaTeresita" />
            <a href="https://www.aparthotelmonaco.com.ar/">Hotel Monaco</a>  
            PRECIOS POR PERSONA:
            <br />
            Diciembre y marzo: $175.000 (base doble /triple).
            <br />
            Enero y febrero: $195.000 (base doble / triple).
            <br />
            <Link to="/infopagos">Reservar</Link> 
          </div>
          <div className="imgPacks">
            <img src={mardeajo} alt="imgMardeAjo" />
            <a href="https://www.mardeajo.com/hotelmunich">Hotel Munich</a>          
            PRECIOS POR PERSONA:
            <br />
            Diciembre y marzo: $165.000 (base doble /triple).
            <br />
            Enero y febrero: $190.000 (base doble / triple).
            <br />
            <br />
            <Link to="/infopagos">Reservar</Link> 
          </div>
        </div>
        <div className="centradoPacks">
          <div className="imgPacks">
            <img src={sanber} alt="imgSanber" />
            <a href="https://www.hotellaargentina.com.ar/">Hotel La Argentina</a>
            PRECIOS POR PERSONA:
            <br />
            Diciembre y marzo: $200.000 (base doble /triple).
            <br />
            Enero y febrero: PROMO $210.000 (base doble / triple).
            <br />
            <Link to="/infopagos">Reservar</Link> 
          </div>
          <div className="imgPacks">
            <img src={gesell} alt="imgGesell" />
            <a href="https://www.hotelaldeamarina.com.ar">Hotel Aldea Marina</a>
            PRECIOS POR PERSONA:
            <br />
            Diciembre y marzo: $175.000 (base doble / base triple). 
            <br />
            Enero y febrero: $205.000 (base doble / base triple).
            <br />
            <Link to="/infopagos">Reservar</Link> 
          </div>
        </div>
        <div className="centradoPacks">
          <div className="imgPacks">
            <img src={mardel} alt="imgMardel" />
            <a href="https://www.hotelcieloazul.com.ar">Hotel Cielo Azul</a> 
            PRECIOS POR PERSONA:
            <br />
            $220.000 (base doble / base triple).
            <br />
            <br />         
            <Link to="/infopagos">Reservar</Link> 
          </div>
          <div className="imgPacks">
            <img src={carlospaz} alt="imgCarloPaz" />
            <a href="https://el-practico.hotels-villa-carlos-paz.com/es/">Hotel El Practico</a>
            PRECIOS POR PERSONA:
            <br />
            $160.000 (base doble / triple).
            <br />
            <br />
            <Link to="/infopagosvcp">Reservar</Link> 
          </div>
        </div>
          <div>Precios verano 2024 - 2025 a partir de base doble (2 personas minimo). En base single es un 50% adicional aproximadamente.</div>
          <br />
        </div>
        <br />
        <br />
      </div>
      <div className="infoViaje">
        Info de viaje:
        <br />
        <br />
        Salidas diarias
        <br />
        Viajamos en micros de larga distancia, son coches semi cama completamente habilitados (con aire acondicionado, tv, audio, vídeo y baño).
        <br />
        El alojamiento es en base a la disponibilidad que tengamos al momento de reservar. En su mayoría los alojamientos cuentan con recepción 24 horas y conexión Wi-Fi gratuita en las zonas comunes. Las habitaciones son dobles, triples y cuádruples para 2, 3 y 4 personas y cuentan con ventilador, TV por cable y baño privado. Ademas los alojamientos en general tienen zona de estar con TV por cable y baño.
        <br />
        <br />
        Menores de 1 y 2 años solo abonan un seguro de $6000 aprox.
        <br />
        Tarifas sujetas a modificación sin previo aviso. Abonando el total del viaje se congela el precio.
        <br />
        La tarifa incluye desayuno.
        <br />
        Cada 10 personas pagas otorgamos un liberado.
        <br />
        <br />
        Reservas:
        <br />
        Las reservas se toman con una seña del 50% del valor final. Una vez enviado el comprobante recibiran los vouchers del viaje junto con la tarjeta de reserva del hotel.
        <br />
        El otro 50% debe ser cancelado 10 dias previos al viaje.
        <br />
        Una vez abonado el total del viaje recibiran sus pasajes via mail o whatsapp segun solicitud del cliente.
        <br />
        Los pasajes se emiten de lunes a sabado de 10 a 17 hs . En el caso de abonar fuera de esa franja horaria los recibiran a dia siguiente.
        <br />
        <br />
        Tarjetas:
        <br />
        Pueden abonar mediante mercado pago con todas las tarjetas de cualquier banco.
        <br />
        En el siguiente link va a encontrar todas las promos de tarjetas sin interés: https://www.mercadopago.com.ar/promociones
        <br />
        <br />


        Cualquier consulta que tengas, no dudes en contactarnos.
        <br />
        <br />
        Eventos Ant.
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
  )
}
