import { useContext, useRef } from "react";
import LanguageContext from "../context/EnglishContext";
import { setHoverLink } from "../types/Types";

type ContactForm = {
  setHoverLink: setHoverLink;
};

const ContactForm = ({ setHoverLink }: ContactForm) => {
  const language = useContext(LanguageContext);
  const submitRef = useRef<HTMLInputElement>(null);

  return language === "ES" ? (
    <div className="form-wrapper">
      <form action="" className="contact-form">
        <div className="field-list">
          <fieldset>
            <legend className="title">
              <span>Nombre</span>
              <span className="label-secondary">(obligatorio)</span>
            </legend>
            <div className="form-field-container">
              <div className="form-field">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="surname">Apellido</label>
                <input type="text" id="surname" />
              </div>
            </div>
          </fieldset>
          <div className="form-item">
            <label htmlFor="email">
              <span>Email</span>
              <span className="label-secondary">(obligatorio)</span>
            </label>
            <input type="email" id="email" />
          </div>
          <div className="form-item">
            <label htmlFor="subject">
              <span>Asunto</span>
              <span className="label-secondary">(obligatorio)</span>
            </label>
            <input type="text" id="subject" />
          </div>
          <div className="form-item">
            <label htmlFor="message">
              <span>Mensaje</span>
              <span className="label-secondary">(obligatorio)</span>
            </label>
            <textarea id="message" />
          </div>
        </div>
        <div className="form-btn-wrapper">
          <input
            ref={submitRef}
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            onClick={(e) => e.preventDefault()}
            type="submit"
            name="submit"
            className="form-submit"
            id="submit"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  ) : (
    <div className="form-wrapper">
      <form action="" className="contact-form">
        <div className="field-list">
          <fieldset>
            <legend className="title">
              <span>Name</span>
              <span className="label-secondary">(required)</span>
            </legend>
            <div className="form-field-container">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" />
              </div>
            </div>
          </fieldset>
          <div className="form-item">
            <label htmlFor="email">
              <span>Email</span>
              <span className="label-secondary">(required)</span>
            </label>
            <input type="email" id="email" />
          </div>
          <div className="form-item">
            <label htmlFor="subject">
              <span>Subject</span>
              <span className="label-secondary">(required)</span>
            </label>
            <input type="text" id="subject" />
          </div>
          <div className="form-item">
            <label htmlFor="message">
              <span>Message</span>
              <span className="label-secondary">(required)</span>
            </label>
            <textarea id="message" />
          </div>
        </div>
        <div className="form-btn-wrapper">
          <input
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            onClick={(e) => e.preventDefault()}
            type="submit"
            name="submit"
            className="form-submit"
            id="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
