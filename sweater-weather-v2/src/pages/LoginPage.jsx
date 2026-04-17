export default function LoginPage() {
  return (
    <section className="container pageBlock">
      <div className="loginWrap topGap">
        <div className="glassPanel loginPanel">
          <p className="miniLabel tealText">Login</p>
          <h1 className="pageTitle">Sign in to your account</h1>
          <p>Access your cart, wishlist and personalized store assistance.</p>
          <form className="loginForm">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button type="button" className="peachBtn fullBtn">Sign in</button>
            <button type="button" className="ghostBtn fullBtn">Continue with Google</button>
          </form>
        </div>
      </div>
    </section>
  )
}