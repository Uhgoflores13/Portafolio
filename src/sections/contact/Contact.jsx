import "./Contact.css";
import contacts from "./data";
import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        shoot me a message via any of the the links below!
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  );
}

export default Contact;
