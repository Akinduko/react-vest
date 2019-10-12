import React from "react";

// core components
import WebsiteNavbar from "components/Navbars/WebsiteNavbar.js";
import WebsiteFooter from "components/Footers/WebsiteFooter.js";
import contact from "assets/images/contact-us.png";
import partner from "assets/images/partner.svg";
import mail from "assets/icons/icon-mail.svg";

function ContactPage() {
  const { innerWidth } = window;
  return (
    <main className="about--main--container">
      <WebsiteNavbar />
      <section className="contact--header-container">
        <div className="contact--section">
          <div className="contact--section-a">
            <h2>Contact Us</h2>
            <p>
              We are just one step away, Enter your details let’s get connected
            </p>
            <a href="mailto:info@Flinvest.com" className="btn btn__about">
              <img alt="mail" src={mail} />
              <button className="btn-link-contact">info@Flinvest.com</button>
            </a>
          </div>
          <div className="contact--section-b">
            <h2>Address</h2>
            <p>
              #1B Emma Abimbola Cole,
              <br />
              Lekki Phase One, Lagos.
            </p>
            <div className="contact--enquiries">
              <p>For enquiries, please contact </p>
              <a className="colored" href="mailto:info@Flinvest.com">
                info@Flinvest.com
              </a>
            </div>
          </div>
        </div>
        <div className="contact-us-image">
          <img alt="" src={contact} />
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.622558935908!2d3.4727264149286787!3d6.442488125886823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44c74e0f683%3A0x80082f82147f5435!2s1b%20Emma%20Abimbola%20Cole%2C%20Lekki%20Phase%20I%2C%20Lagos!5e0!3m2!1sen!2sng!4v1569186564104!5m2!1sen!2sng"
          width={innerWidth}
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          title="location"
          allowfullscreen=""
        ></iframe>
      </section>
      <section className="about--partner-container">
        <h1>Partners</h1>
        <p>
          Flinvest is an online Peer 2 Peer/Consulting platform which connects
          businesses with investors and renders consulting services online.
        </p>

        <div className="partners">
          <img alt="" src={partner} />
          <img alt="" src={partner} />
          <img alt="" src={partner} />
          <img alt="" src={partner} />
          <img alt="" src={partner} />
        </div>
      </section>

      <WebsiteFooter />
    </main>
  );
}

export default ContactPage;
