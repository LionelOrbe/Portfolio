import React, { useState }  from 'react'
import style from './Contact.module.css'
import emailjs from 'emailjs-com'
import { validate } from '../../assets/Utilities';
import swal from 'sweetalert';

export default function Contact() {
 
    
    const [input, setInput] = useState({
      name:"",
      email:"",
      message:""
    });
    
    const [errors, setErrors] = useState({});
  
    function handleName(e) {
      e.preventDefault()
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
    }

    function handleEmail(e) {
      setInput({
        ...input,
        email: e.target.value
      })
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
    }

    function handleMessage(e) {
      setInput({
        ...input,
        message: e.target.value
      })
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
    }

    function handleSubmit() {
      if (input.name && input.email && input.message) {

            const serviceId = 'service_60xcvdv';
            const templateId = 'template_luo3fc8';
            const publicKey = 'vw9ugQxDToPyVh-TJ';
            const templateParams = {
                name: input.name,
                email: input.email,
                message: input.message
            };
            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then(response => swal({
                  title: "Message sent!",
                  icon: "success",
                }))
                
  
          setInput({
            name:"",
            email:"",
            message:""
          });
      } else {
        swal({
          title: "Something went wrong!",
          text: "Please fill in the form",
          icon: "warning",
        })
      }
  }
  
    return (
      <div className={style.container}>
        <div className={style.inputs}>Get in Touch!
          <input className={style.input} name ='name' type="text" placeholder="Your Name" value={input.name} onChange={e => handleName(e)}/>
          <input className={style.input} name ='email' type="email" placeholder="Your email address" value={input.email} onChange={e => handleEmail(e)}/>
          <textarea className={style.area} name ='message'placeholder="Your message..." value={input.message} onChange={e => handleMessage(e)}></textarea>
          <button className={style.button} onClick={(ev) => handleSubmit(ev)} disabled={!(Object.keys(errors).length===0)}>Send Message</button>
          <span className={style.danger}>{errors.name}{errors.email}{errors.message}</span>
        </div>
    </div>
    );

  

}
