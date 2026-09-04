import { WhatsAppIcon } from './icons'

export const WA_NUMBER = '6289515460401'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
    >
      <WhatsAppIcon size={30} />
    </a>
  )
}
