import React, { useRef, useEffect } from "react";
import "./contact.css";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_18fqzhk",
        "template_atkh5br",
        form.current,
        "KfgwlcxM0nPeyWiRA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section data-aos="fade-up" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-optins">
          <article className="contact-option">
            <MdMarkEmailUnread className="contact-icon" />
            <h4>Email</h4>
            <h3>olabrrai@gmail.com</h3>
            <a href="mailto:olabrrai@gmail.com" target="_blank">
              Email Me
            </a>
          </article>
          <article className="contact-option">
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h3>Olha Brailovska</h3>
            <a
              href="https://www.linkedin.com/in/olha-brailovska-24a868226/"
              target="_blank"
            >
              Contact Me
            </a>
          </article>
        </div>
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
