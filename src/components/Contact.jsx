import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Iframe from 'react-iframe'
import {TextInput,Label,Checkbox,Button} from 'flowbite-react'

import { 
  AvisosIcon,         
  MayoristaIcon,
  GranFormatoIcon,
  CorteLaserIcon,
  ImpresionDigitalIcon,
  VehicularIcon,
  EmpaquesIcon,
  DisenoIcon,
  EstampadosIcon,
  DotacionIcon,
  LitografiaIcon,
} from "@heroicons/react/24/solid";




const initialState = {
  name: '',
  email: '',
  message: '',
  phone: '',
}

const Contact = (props) => {
  const form = useRef()
 
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rgxdrup', 'template_9qgtv89', form.current, 'a5pHHmWLOlawYpln7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <div id='contact' className='bg-white'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Solicitar Cotización</h2>
                <p>
                Cuéntanos tu situación y nos comunicaremos contigo para agendar tu cita 
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
              <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
                
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Información de Contacto</h3>
              <p>
                <span>
                <AvisosIcon className="h-6 w-6 text-blue-500"/> Ubicación
                </span>
                {/* {props.data ? props.data.address : 'loading'}<br />
                {props.data ? props.data.address2 : 'loading'}<br />
                {props.data ? props.data.country : 'loading'} */}
              </p>
              <Iframe 
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.9682154722434!2d-76.54612473693317!3d3.4151169347045314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a7186362f97f%3A0x762507ab7c28b8bc!2sCosmoplaza%20Cali!5e0!3m2!1sen!2sco!4v1662329731628!5m2!1sen!2sco"   
                  width="300vw"
                  height="200vh "
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"        
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                    <AvisosIcon className="h-6 w-6 text-blue-500"/>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <AvisosIcon className="h-6 w-6 text-blue-500"/>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.whatsapp : '/'}>
                      <AvisosIcon className="h-6 w-6 text-blue-500"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default Contact

// $("input").intlTelInput({
//   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
// });