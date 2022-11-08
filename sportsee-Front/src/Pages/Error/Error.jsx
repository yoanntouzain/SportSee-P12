import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
  return (
    <div className="main-error">
      <div className="container-error">
        <div className="container-title">
          <h1 className="title-error">404</h1>
        </div>

        <div className="container-content">
          <p className="content-error">
            Oups! La page que vous demandez n'existe pas.
          </p>
        </div>
      </div>
    </div>
  )
}
