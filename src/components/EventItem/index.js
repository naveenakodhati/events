// Write your code here
import './index.css'

const EventItem = props => {
  const {eventData, onClickRegistration, changeColor} = props
  const {id, imageUrl, name, location, registrationStatus} = eventData

  const onChangeStatus = () => {
    onClickRegistration(registrationStatus, id)
  }

  const borderColor = id === changeColor ? 'border-color' : ''

  return (
    <li className="li-container">
      <div>
        <button className="img-buttons" type="button" onClick={onChangeStatus}>
          <img
            className={`image-el ${borderColor}`}
            src={imageUrl}
            alt="event"
          />
        </button>
        <p className="event-title">{name}</p>
        <p className="event-desc">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
