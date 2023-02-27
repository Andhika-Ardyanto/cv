import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n763zgo",
      "template_d6y9ofa",
      form.current,
      "pnUIV-eoPYTiXX71y"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>andhikaardyanto114@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFDKcfPNkJBMvnkqXRnRZNhFGhjhvztRqcNPPcVnrTDSqXQDJZJtPvGzfHkfgSnMMnJMg"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>andhika ardyanto</h5>
            <a href="https://m.me/andhika.ardyanto.18/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6281000120021</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6281000120021"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
