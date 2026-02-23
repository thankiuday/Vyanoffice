import { useState } from 'react'

/**
 * Contact form with enquiry type (General, Bulk order, Print upload).
 * Submit action is placeholder; connect to backend/API later.
 */
const ENQUIRY_TYPES = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'bulk', label: 'Bulk Order Enquiry' },
  { value: 'print', label: 'Print Upload / Online Print' },
]

export default function ContactForm() {
  const [type, setType] = useState('general')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to backend/API or mailto
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-primary-100 border border-primary-300 p-6 text-center">
        <p className="text-black font-medium">Thank you! We will get back to you soon.</p>
        <p className="text-sm text-gray-600 mt-1">You can also call or WhatsApp us for faster response.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="enquiry-type" className="block text-sm font-medium text-black mb-1">
          Enquiry Type
        </label>
        <select
          id="enquiry-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
        >
          {ENQUIRY_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
            placeholder="10-digit mobile"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
          placeholder="your@email.com"
        />
      </div>

      {type === 'print' && (
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-black mb-1">Upload file (optional)</label>
          <input
            id="file"
            name="file"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-primary-400"
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
          placeholder={type === 'bulk' ? 'Describe your bulk order (quantity, type, deadline)' : 'Your message'}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-400 text-black font-semibold py-3 rounded-lg hover:bg-primary-500 transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  )
}
