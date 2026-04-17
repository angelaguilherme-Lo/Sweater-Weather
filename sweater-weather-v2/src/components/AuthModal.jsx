import { useState } from 'react'
import { X } from 'lucide-react'

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('signin')

  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(mode === 'signin' ? 'Demo sign in successful.' : 'Demo sign up successful.')
    onClose?.()
  }

  const handleGoogle = () => {
    alert(mode === 'signin' ? 'Demo Google sign in successful.' : 'Demo Google sign up successful.')
    onClose?.()
  }

  return (
    <div className="authModalBackdrop" onClick={onClose}>
      <div className="authModal glass" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="iconBtn authClose" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="authTabs">
          <button
            type="button"
            className={`authTab ${mode === 'signin' ? 'active' : ''}`}
            onClick={() => setMode('signin')}
          >
            Sign in
          </button>
          <button
            type="button"
            className={`authTab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => setMode('signup')}
          >
            Sign up
          </button>
        </div>

        <h2>{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h2>
        <p className="authIntro">
          Demo-only authentication for client pitch purposes, including Google as an option.
        </p>

        <form className="authForm" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="fieldGroup">
              <label htmlFor="full-name">Full name</label>
              <input id="full-name" type="text" placeholder="Enter your name" />
            </div>
          )}

          <div className="fieldGroup">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div className="fieldGroup">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" />
          </div>

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