import React from 'react';
import './Home.css';
import imglog from "../img/logoviaje.png";
import { BsTelephoneInbound, BsWhatsapp, BsFacebook, BsInstagram, BsFillPhoneVibrateFill  } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";


export default function Home() {


  return (
    <div>
      <img className='marca' src={imglog} alt="logo" />
            <img className='imagens' src="https://www.10wallpaper.com/wallpaper/1366x768/1501/shore_palms_tropical_beach-Photo_HD_Wallpaper_1366x768.jpg" alt="gif" />
    <div className='home'>               

        <div className='bienvenido'>
          <div className='subbienv' >
            <h2>Elegí</h2>
            <h8>Elegí un destino</h8>
            <h8>seleccionando fecha</h8>
            <h8>y cantidad de personas.</h8>
          </div>
          <div className='subbienv'>
            <h2>Reservá</h2>
            <h8>Completa el formulario</h8> 
            <h8>con datos de los pasajeros y </h8>
            <h8>realiza el pago del 50%.</h8>
          </div>
          <div className='subbienv'>
           <h2>Disfrutá</h2>
           <h8>Nosotros organizamos</h8>
           <h8>tu viaje!</h8>
          </div>
          <br/>
        </div>
        <br />
        <div className='fondo'>
        <div className="cajaDestinos">
            </div>
          
          <div className='destinos'>
            <div className='dospag'> 
              {/* <img className='tb' src="https://radiomitre-la100-prod.cdn.arcpublishing.com/resizer/UV47YvDpIf1G2MsltxsUQfd0NME=/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/radiomitre/DVXXA3D23FECNL7B25UNPRBZOI.jpg" alt="imagenpizza" /> */}
              <img className='tb' src="https://static.wixstatic.com/media/553433_5dc1b0d67f194e6688d8d1fb768daa45~mv2.jpg/v1/fill/w_538,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/553433_5dc1b0d67f194e6688d8d1fb768daa45~mv2.jpg" alt="imagenCordoba" />
              <img className='tb' src="https://static.wixstatic.com/media/553433_1be0f394f3434a3997fda824a975c59a~mv2.jpg/v1/fill/w_538,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/553433_1be0f394f3434a3997fda824a975c59a~mv2.jpg" alt="imagenFloripa" />
              <img className='tb' src="https://static.wixstatic.com/media/553433_e8348730cebf47a483543159cc2c9e58~mv2.jpg/v1/fill/w_538,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/553433_e8348730cebf47a483543159cc2c9e58~mv2.jpg" alt="imagenBarco" />
              <img className='tb' src="https://static.wixstatic.com/media/553433_0ec708359b404362aac08e4221e4a661~mv2.jpg/v1/fill/w_538,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/553433_0ec708359b404362aac08e4221e4a661~mv2.jpg" alt="imagenOktober" />
               {/* <img className='tb' src="https://gridoquilmes.files.wordpress.com/2011/05/crocantino.jpg" alt="postrehelado" /> */}
            </div>
          
        </div>
        </div>
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
  </div>
  );
}



