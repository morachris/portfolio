import React, { useState, useRef, type FormEvent } from 'react';
import GoBackButton from './GoBackButton';
import emailjs from '@emailjs/browser';

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('')

  const validateEmail = (email: string): boolean => {
    // Regex validation for emails
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // Regex validation for email
    const regexResult = validateEmail(email);

    if (regexResult === false) {
      alert('Please, enter a valid email.');
      return;
    }

    // Form validation
    if (!form.current) return;

    // Credentials for EmailJS and validation
    const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId === undefined || templateId === undefined || publicKey === undefined) {
      console.error("EmailJS environment variables missing.");
      alert("Service is temporarily unavailable.");
      return;
    }

    // EmailJS service
    emailjs
      .sendForm(serviceId, 
        templateId, 
        form.current, 
        { publicKey: publicKey, }
      )
      .then((result) => {
          console.log('Email sent successfully!', result.text);
          alert('Message sent successfully!');
          setEmail('');
          form.current?.reset();
      }, (error) => {
          console.error('Email sending failed:', error.text);
          alert('Failed to send message.');
      });
  };

  return (
    <div className='min-h-screen w-full flex justify-center items-center py-32'>
      <GoBackButton />
      <form ref={form} onSubmit={sendEmail}
        className='bg-[#010007] text-neutral-300 flex flex-col justify-center gap-4 border border-neutral-800 p-10 rounded-xl font-sans-alt
        md:w-xl
        sm:w-md
        w-2xs tracking-tighter'>
        <h2 className='m-auto font-sans
        text-6xl tracking-tighter'>
          let's talk!
        </h2>
        <p className='text-neutral-500 tracking-tighter
        text-[2dvh]'>
          If you wish to connect or request a service from me, contact me directly or fill out the form!
        </p>
        <label htmlFor="name">Your name:</label>
        <input type="text" placeholder='John Doe' name='from_name'
          required
          className='bg-neutral-900 rounded-md h-10 p-4 border border-neutral-800 
          focus:outline-0 focus:ring-2 focus:ring-[#2441FF]' 
        />

        <label htmlFor="email">Your email:</label>
        <input type="email" placeholder='johndoe@domain.com' name='from_email'
          onChange={(e) => setEmail(e.target.value)}
          required
          className='bg-neutral-900 rounded-md h-10 p-4 border border-neutral-800
          focus:outline-0 focus:ring-2 focus:ring-[#2441FF]' 
        />
        {email && !validateEmail(email) && (
          <span className="text-sm text-red-400">Invalid email format</span>
        )}

        <label htmlFor="message">Message:</label>
        <textarea placeholder='Enter your message here' name='message'
          required
          className='resize-none bg-neutral-900 rounded-md h-[15dvh] p-4 border border-neutral-800
          focus:outline-0 focus:ring-2 focus:ring-[#2441FF]' 
        />
        
        <div className='bg-linear-90 p-0.5 from-[#2441FF] via-[#FF7DB7] to-[#FFC471] rounded-lg transition-all group
          hover:rounded-[28px] hover:shadow-[0_0_30px_rgba(36,65,255,0.5)] hover:scale-102'>
          <input type="submit" value={"send email"}
            className='text-xl h-10 w-full rounded-md bg-[#010007] transition-all font-sans font-semibold
            group-hover:rounded-[28px] group-hover:cursor-pointer' />
        </div>
      </form>
    </div>
  )
}

export default ContactMe