import { WA_NUMBER } from './WhatsAppFloat'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noreferrer"
        >
          +6289515460401
        </a>
      </div>
    </div>
  )
}
