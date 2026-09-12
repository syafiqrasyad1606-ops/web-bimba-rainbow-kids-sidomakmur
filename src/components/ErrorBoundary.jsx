import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {

    console.error('Terjadi error yang tidak tertangani:', error, info)
  }

  handleReload = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="crash-screen">
          <h1>Ups, ada yang salah</h1>
          <p>
            Halaman ini mengalami error tak terduga. Coba muat ulang, atau
            kembali ke halaman utama.
          </p>
          <button type="button" onClick={this.handleReload}>
            Kembali ke Beranda
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
