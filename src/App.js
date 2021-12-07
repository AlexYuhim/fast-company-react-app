import React, { useState } from 'react'
import RenderTilteTab from './componets/renderTitleTabs'
import RenderTabs from './componets/renderTabs'
import FormatMassege from './componets/messeg'
import api from './api'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [count, setDiscrement] = useState(users.length)
  const classes = 'badge m-2 bg-primary'
  const handleDelitUser = (id) => {
    setUsers((objUsers) => objUsers.filter((e) => e._id !== id))
    return setDiscrement(count - 1)
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
          <RenderTabs onhandleDelitUser={handleDelitUser} {...[users]} />
        </tbody>
      </table>
      {/* <RenderTabs {...[users]} /> */}
    </div>
  )
}

export default App
