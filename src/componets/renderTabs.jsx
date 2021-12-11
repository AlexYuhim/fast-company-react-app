import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

const RenderTabs = (prop) => {
  const classes = 'badge m-2 bg-'

  return prop[0].map((eventUsers) => (
    <tr key={eventUsers._id}>
      <td>{eventUsers.name}</td>
      <td>
        {eventUsers.qualities.map((eventQualities) => (
          <span
            className={classes + eventQualities.color}
            key={eventQualities._id}
          >
            {eventQualities.name}
          </span>
        ))}
      </td>
      <td>{eventUsers.profession.name}</td>
      <td>{eventUsers.completedMeetings}</td>
      <td>{eventUsers.rate}/5</td>
      <td>
        <button
          onClick={() => {
            prop.onhendelClik(eventUsers._id, eventUsers.status)
          }}
        >
          <i
            style={{ fontSize: '20px' }}
            key={eventUsers._id}
            className={`${eventUsers.status !== true
                ? 'bi bi-hand-thumbs-up'
                : 'bi bi-hand-thumbs-down-fill'
              }`}
          />
        </button>
      </td>
      <td>
        <button
          key={eventUsers._id}
          className="badge btn-danger m-2"
          onClick={() => prop.onhandleDelitUser(eventUsers._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))
}
export default RenderTabs
