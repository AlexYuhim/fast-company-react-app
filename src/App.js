import React, { useState } from 'react'
import RenderTilteTab from './componets/renderTitleTabs'
import RenderTabs from './componets/renderTabs'
import FormatMassege from './componets/messeg'
import api from './api'
import Pagination from './componets/pagination'
import { paginet } from './utils/paginet'
// import RenderIcons from './componets/bootStrIcons'

// import 'bootstrap-icons/font/bootstrap-icons.json'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [count, setDiscrement] = useState(users.length)
  const [currentPage, setCurrentPage] = useState(1)
  const classes = 'badge m-2 bg-primary'
  const pageSize = 4

  const handelPageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const userCrop = paginet(users, currentPage, pageSize)

  const handleDelitUser = (id) => {
    setUsers((objUsers) => objUsers.filter((e) => e._id !== id))
    return setDiscrement(count - 1)
  }

  const hendelClik = (id, stat) => {
    const status = users.map((event) => {
      if (event._id === id) {
        if (!stat) {
          return { ...event, status: true }
        } else {
          return {
            ...event,
            status: false,
          }
        }
      }
      return event
    })
    setUsers(status)
  }
  if (users.length === 0) {
    return <h1 className="badge btn-danger m-2">Никто с тобой не тусанёт</h1>
  }
  return (
    <div>
      <h1 className={classes}>{FormatMassege(count)}</h1>
      <table className="table">
        <thead>{RenderTilteTab()}</thead>
        <tbody>
          <RenderTabs
            onhandleDelitUser={handleDelitUser}
            onhendelClik={hendelClik}
            {...[userCrop]}
          />
          {/* <RenderIcons onhendelClik={hendelClik} {...[users]} /> */}
        </tbody>
      </table>
      <Pagination
        itemCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onhandelPageChange={handelPageChange}
      />
    </div>
  )
}

export default App
