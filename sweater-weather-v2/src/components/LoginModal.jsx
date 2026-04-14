export default function LoginModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="glass loginModal" onClick={(e) => e.stopPropagation()}>
        <p className="eyebrow">Login</p>
        <h2>Welcome back to Sweater Weather</h2>
        <label>Email<input type="email" placeholder="your@email.com" /></label>
        <label>Password<input type="password" placeholder="••••••••" /></label>
        <button className="primaryBtn fullBtn">Sign in</button>
      </div>
    </div>
  )
}