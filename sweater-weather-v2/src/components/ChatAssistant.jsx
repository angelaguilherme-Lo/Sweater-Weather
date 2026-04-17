import { useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { useShop } from '../context/ShopContext'

export default function ChatAssistant() {
  const { chatOpen, setChatOpen, messages, sendChatMessage } = useShop()
  const [draft, setDraft] = useState('')

  const submit = (event) => {
    event.preventDefault()
    sendChatMessage(draft)
    setDraft('')
  }

  return (
    <div className="chatWidget">
      {chatOpen && (
        <section className="chatPanel glassPanel">
          <div className="chatHeader">
            <div>
              <strong>AI Style Assistant</strong>
              <p>Ask about materials, styles or sizing.</p>
            </div>
            <button className="circleBtn" onClick={() => setChatOpen(false)} aria-label="Close chat">
              <X size={16} />
            </button>
          </div>
          <div className="chatMessages">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`chatBubble ${message.role}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form className="chatForm" onSubmit={submit}>
            <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Ask about cashmere, cotton, linen..." />
            <button type="submit" className="peachBtn iconBtn"><Send size={16} /></button>
          </form>
        </section>
      )}
      <button className="chatTrigger" onClick={() => setChatOpen((prev) => !prev)}>
        <MessageCircle size={18} />
        <span>AI assistance</span>
      </button>
    </div>
  )
}