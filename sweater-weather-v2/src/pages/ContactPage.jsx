export default function ContactPage() {
  return (
    <section className="container pageBlock">
      <div className="contactGrid topGap contactFormOnly">
        <article className="glassPanel infoPane contactDetailsPane">
          <p className="miniLabel tealText">Contact us</p>
          <h1 className="pageTitle">We are here to help you choose the right knitwear</h1>
          <p>
            Have a question about sizing, materials, styling or gift selection? Send us a message and our team will help you with a warm and personal answer.
          </p>
          <div className="contactMetaList">
            <p><strong>Email:</strong> hello@sweaterweather.com</p>
            <p><strong>Phone:</strong> +49 30 0000 0000</p>
            <p><strong>Support hours:</strong> Monday to Friday, 09:00 to 18:00</p>
          </div>
        </article>

        <article className="glassPanel contactFormPane">
          <form className="contactFormLuxury">
            <div className="formRowTwo">
              <div className="fieldGroup">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" placeholder="Your full name" />
              </div>
              <div className="fieldGroup">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="fieldGroup">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Sizing, materials, order help..." />
            </div>

            <div className="fieldGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="7" placeholder="Write your message here"></textarea>
            </div>

            <button type="button" className="peachBtn sendMessageBtn">Send message</button>
          </form>
        </article>
      </div>
    </section>
  )
}