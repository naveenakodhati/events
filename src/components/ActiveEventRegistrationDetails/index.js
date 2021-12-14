// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const renderRegistrationStatus = () => {
    const {status} = props

    switch (status) {
      case 'YET_TO_REGISTER':
        return (
          <div className="display-active-container">
            <img
              className="display-event-img"
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
            />
            <p className="display-content">
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you fall totally in love with
              this beautiful art form.
            </p>
            <div className="button-container">
              <button type="button" className="button-el">
                Register Here
              </button>
            </div>
          </div>
        )
      case 'REGISTERED':
        return (
          <div className="display-active-container">
            <img
              className="display-event-img"
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
            />
            <h1 className="registered-desc">
              You have already registered for the event
            </h1>
          </div>
        )
      case 'REGISTRATIONS_CLOSED':
        return (
          <div className="display-active-container">
            <img
              className="display-event-img"
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
            />
            <h1 className="registered-desc">Registrations Are Closed Now!</h1>
            <p className="display-content">
              Stay tuned. We will reopen the registrations soon!
            </p>
          </div>
        )

      default:
        return null
    }
  }

  return renderRegistrationStatus()
}

export default ActiveEventRegistrationDetails
