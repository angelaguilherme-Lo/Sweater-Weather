export default function ContactPage() {
  return (
    <section className="section twoCol">
      <div className="glass infoCard">
        <p className="eyebrow">Contact us</p>
        <h2>We would love to help you style your next luxurious look.</h2>
        <p>Email: hello@sweaterweather.com</p>
        <p>Phone: +49 000 000 000</p>
        <p>Hours: Mon–Sat, 10:00–18:00</p>
      </div>
      <form className="glass contactForm">
        <label>Name<input type="text" placeholder="Your name" /></label>
        <label>Email<input type="email" placeholder="Your email" /></label>
        <label>Message<textarea rows="4" placeholder="How can we help?"></textarea></label>
        <button type="button" className="primaryBtn">Send message</button>
      </form>
    </section>
  )
}