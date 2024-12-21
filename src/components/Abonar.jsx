import React from "react";
import "./InfoPago.css";
import { useDispatch } from "react-redux";
import { BsWhatsapp, BsFacebook, BsInstagram, BsFillPhoneVibrateFill  } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import qrmp from "../img/qrmp.png"
import sanber from "../img/sanber.jpg";
import santateresita from "../img/santateresita.jpg";
import mardel from "../img/mardel.jpg";
import gesell from "../img/gesell.jpg";
import carlospaz from "../img/carlospaz.jpg";
import mardeajo from "../img/mardeajo.jpg";
import floripa from "../img/floripa.jpg";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export default function Abonar() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { cantpersonas } = useParams();
  const { prectotal } = useParams();
  const { fecsalida } = useParams();
  let packPorId = undefined;
  console.log(id);
   const packsArmados = [
    {id:1, nombre: "Santa Teresita", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ", imagen: santateresita ,dias: 4, descripcion: "Bus semi cama + alojamiento en hotel Monaco con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:210000}, {cant:2, fecha:"marzo", cambio:"$",precio:200000}]},
    {id:2, nombre: "Mar de Ajó", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ",imagen: mardeajo, dias: 3, descripcion: "Bus semi cama + alojamiento en hotel Munich con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:190000}, {cant:2, fecha:"marzo" , cambio:"$", precio:165000}]},
    {id:3, nombre: "San Bernardo", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ", imagen: sanber, dias: 4, descripcion: "Bus semi cama + alojamiento en hotel La Argentina con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:210000}, {cant:2, fecha:"marzo" , cambio:"$", precio:200000}]},
    {id:4, nombre: "Villa Gessel", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ", imagen: gesell, dias: 3, descripcion: "Bus semi cama + alojamiento en hotel Aldea Marina con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:205000}, {cant:2, fecha:"marzo" , cambio:"$", precio:175000}]},
    {id:5, nombre: "Mar del Plata", salidas: "En temporada 2024-2025 salimos todos los días de diciembre, febrero, marzo y abril. En enero salimos 4, 15, 18, 21 y 24. ", imagen: mardel, dias: 4, descripcion: "Bus semi cama + alojamiento en hotel Cielo Azul con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:220000}, {cant:2, fecha:"marzo" , cambio:"$", precio:220000}]},
    {id:6, nombre: "Villa Carlos Paz", salidas:"Todos los días de noviembre y diciembre de 2024, enero, febrero,marzo y abril de 2025. ", imagen: carlospaz, dias: 3, descripcion: "Bus semi cama + alojamiento en hotel El Practico con desayuno.", preciosPersona:[{cant:2, fecha:"enero" , cambio:"$", precio:160000}, {cant:2, fecha:"marzo" , cambio:"$", precio:160000}]},
    {id:7, nombre: "Florianópolis", salidas: "En temporada 2024-2025 salimos 15 de diciembre, 01 enero, 8 enero, 15 enero, 01 febrero, 14 febrero, 21 febrero, 01 marzo, 15 marzo y 01 abril. El precio es a partir de 4 personas. Para grupos menores consultar antes de abonar. " ,imagen: floripa, dias: 7, descripcion: "Aéreo hasta Puerto Iguazu + Transfer + Bus semi cama + caipirinha de bienvenida + alojamiento en posada Luizinho + 6 noches de boliche.", preciosPersona:[{cant:4, fecha:"enero" , cambio:"u$d", precio:590}, {cant:4, fecha:"marzo", cambio:"u$d", precio:490}]}
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

  function tipoDeCambio(){
    if (id == 7) {
      return "U$D"
    } else return "$"
  }
  function infoSalidas(){
    if(id == 7){
      return  (
        <div>
        Fechas de salidas: {packPorId.salidas}
        <br />
        Salida desde: Aeroparque 5 am aprox hasta Puerto Iguazu (horario estimado de vuelo 2hs)
        <br />
        Una vez en Puerto Iguazu nos trasladamos en transfer hasta Foz de Iguacu.
        <br />
        Ya en Brasil, abordamos al bus que nos traladara hasta Florianópolis.
        <br />
        A partir del arribo a la ciudad tienen 7 noches incluidas en el alojamiento.
        <br />
        El checkin al alojamiento es a las 13 hs aprox. De llegar antes pueden dejar sus bolsos en recepción y salir a pasear.
        <br />
        El regreso a casa se realiza pasadas las noches correspondientes a las 11:00 am aprox desde la terminal de Florianópolis.
        <br />
        El micro los llevara hasta Iguazu y desde ahí haremos el arribo a nuestro aéreo que nos devolvera a Bs As. 
      </div>
      )
    } else if(id == 6) {
      return (
        <div>
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
          
        </div>
      )
    } else return(
    <div>
      Salidas diarias a playas Argentinas
      
          <br />
          Salida desde: Terminal Liniers, rotonda Llavallol y Cruce Varela (Consultar otros puntos de arribo).
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
        <h3>Abonar</h3>
        <br />
        Estas comprando el siguiente pack: 
        <div style={{display: "flex", position: "relative", justifyContent:"center"}}>
        <img style={{ width : "70%"}} src={packsArmados[id-1].imagen} alt="pack" />
        </div>
        <br />
        Descripcion: {packsArmados[id-1].descripcion}
        <br />
        Detalle de compra:
        <br />
        Fecha de salida: {fecsalida}
        <br />
        Cantidad de pasajeros: { cantpersonas }
        <br />
        Total: {tipoDeCambio()} {prectotal}
        <br />
        Pago mínimo: {tipoDeCambio()} {prectotal/2}
        <br />
        <br />
          <h4>Formas de Pago</h4>
            <div>
              Mediante transferencia a:
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
                </div>       
              </div>
            </div>
            Una vez hecho el pago enviar comprobante por whatsapp al 1127381642 o via mail a eventosant@gmail.com para recibir los vouchers de viaje, junto con la tarjeta de reserva del hotel.
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
