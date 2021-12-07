const RenderTabs = (prop) => {
  console.log(prop)
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
