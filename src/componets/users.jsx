import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [count, setDiscrement] = useState(users.length)

  const classes = 'badge m-2 bg-'

  const tus = ' человек тусанёт с тобой сегодня'

  const tuss = ' человека тусанут с тобой сегодня'

  const handleDelitUser = (id) => {
    setUsers((objUsers) => objUsers.filter((e) => e._id !== id))
    return setDiscrement(count - 1)
  }

  const formatMassege = () => {
    return count > 1 && count <= 4 ? (
      <span>
        {count}
        {tuss}
      </span>
    ) : (
      <span>
        {count}
        {tus}
      </span>
    )
  }
  // const renderTilteTab = () => {
  //   return (
  //     <tr>
  //       <th scope="col">Имя </th>
  //       <th scope="col">Качества</th>
  //       <th scope="col">Профессия</th>
  //       <th scope="col">Встретился раз</th>
  //       <th scope="col">Рейтинг</th>
  //       <th scope="col"></th>
  //     </tr>
  //   )
  // }

  const renderTabs = () => {
    return users.map((eventUsers) => (
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
          {' '}
          <button
            key={eventUsers._id}
            className="badge btn-danger m-2"
            onClick={() => handleDelitUser(eventUsers._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  }

  if (users.length === 0) {
    return <h1 className="badge btn-danger m-2">Никто с тобой не тусанёт</h1>
  }
  return (
    <>
      <h1 className="badge m-2 bg-primary ">{formatMassege()}</h1>
      <table className="table">
        <thead>{renderTilteTab()}</thead>
        <tbody>{renderTabs()}</tbody>
      </table>
    </>
  )
}

export default Users
