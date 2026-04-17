export default function Footer() {
  return (
    <footer className="siteFooter luxuryFooterWrap">
  <div className="container">
    <div className="luxuryFooter">
      <div className="footerBrandColumn">
        <p className="miniLabel tealText">Sweater Weather</p>
        <h2>Carefully compiled collections and seasonal fashion statements</h2>
        <p className="footerText">
          Premium women's sweaters, tunics and knits presented with warmth,
          authenticity and refined editorial style.
        </p>
      </div>

      <div className="footerColumn">
        <h3>Customer Care</h3>
        <a href="/contact">Contact us</a>
        <a href="/shipping">Shipping & checkout</a>
        <a href="/wishlist">Wishlist</a>
      </div>

      <div className="footerColumn">
        <h3>About</h3>
        <a href="/about">Our story</a>
        <a href="/materials">Cashmere, cotton & linen</a>
        <a href="/styling">Style assistance</a>
      </div>

      <div className="footerColumn">
        <h3>Policies</h3>
        <a href="/terms">Terms & Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/cookies">Cookies Policy</a>
      </div>
    </div>

    <div className="footerBottom">
      <p className="footerMeta">© 2026 Sweater Weather. All rights reserved.</p>

      <div className="footerSocials">
        <a href="/">Instagram</a>
        <a href="/">Pinterest</a>
        <a href="/">Newsletter</a>
      </div>
    </div>
  </div>
</footer>
  );
}