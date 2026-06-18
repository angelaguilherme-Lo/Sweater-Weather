import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useShop } from '../context/ShopContext'

export default function AuthModal({ open, onClose }) {
  const { login, register, loginWithGoogle, isAuthenticated } = useShop()

  const [mode, setMode] = useState('signin')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) {
      setError('')
      setEmail('')
      setPassword('')
      setFullName('')
      setMode('signin')
    }
  }, [open])

  useEffect(() => {
    if (open && isAuthenticated) {
      onClose?.()
    }
  }, [open, isAuthenticated, onClose])

  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    const result =
      mode === 'signin'
        ? login({ email, password })
        : register({ name: fullName, email, password })

    if (!result.success) {
      setError(result.message)
      return
    }

    onClose?.()
  }

  const handleGoogle = () => {
    setError('')

    const result = loginWithGoogle()

    if (!result.success) {
      setError(result.message || 'Google sign-in failed.')
      return
    }

    onClose?.()
  }

  return (
    <div className="authModalBackdrop" onClick={onClose}>
      <div className="authModal glassPanel" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="iconBtn authClose"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="authTabs">
          <button
            type="button"
            className={`authTab ${mode === 'signin' ? 'active' : ''}`}
            onClick={() => {
              setMode('signin')
              setError('')
            }}
          >
            Sign in
          </button>

          <button
            type="button"
            className={`authTab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => {
              setMode('signup')
              setError('')
            }}
          >
            Sign up
          </button>
        </div>

        <h2>{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h2>

        <p className="authIntro">
          Demo-only authentication for client pitch purposes, including Google as an option.
        </p>

        <form className="authForm" onSubmit={handleSubmit}>
          {mode === 'signup' ? (
            <div className="fieldGroup">
              <label htmlFor="auth-full-name">Full name</label>
              <input
                id="auth-full-name"
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                autoComplete="name"
              />
            </div>
          ) : null}

          <div className="fieldGroup">
            <label htmlFor="auth-email">Email address</label>
            <input
              id="auth-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="fieldGroup">
            <label htmlFor="auth-password">Password</label>
            <input
              id="auth-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            />
          </div>

          {error ? <p className="formError">{error}</p> : null}

          <button type="submit" className="primaryBtn peachBtn fullBtn">
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <div className="authDivider">or</div>

        <button type="button" className="googleBtn" onClick={handleGoogle}>
          <span className="googleG">G</span>
          {mode === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}
        </button>
      </div>
    </div>
  )
}