import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, loginWithGoogle, isAuthenticated } = useShop()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const redirectTo = location.state?.from || '/'

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo, { replace: true })
    }
  }, [isAuthenticated, navigate, redirectTo])

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    const result = login({ email, password })

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate(redirectTo, { replace: true })
  }

  const handleGoogleLogin = () => {
    const result = loginWithGoogle()

    if (result.success) {
      navigate(redirectTo, { replace: true })
    }
  }

  return (
    <section className="container pageBlock">
      <div className="loginWrap topGap">
        <div className="glassPanel loginPanel">
          <p className="miniLabel tealText">Login</p>
          <h1 className="pageTitle">Sign in to your account</h1>
          <p>Access your cart, wishlist and personalized store assistance.</p>

          <form className="loginForm" onSubmit={handleSubmit}>
            <label className="fieldGroup">
              <span>Email address</span>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
              />
            </label>

            <label className="fieldGroup">
              <span>Password</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
            </label>

            {error ? <p className="formError">{error}</p> : null}

            <button type="submit" className="peachBtn fullBtn">
              Sign in
            </button>

            <button
              type="button"
              className="ghostBtn fullBtn"
              onClick={handleGoogleLogin}
            >
              Continue with Google
            </button>
          </form>

          <p className="loginHint">
            Demo mode: use any email and any password to access protected store pages.
          </p>
        </div>
      </div>
    </section>
  )
}