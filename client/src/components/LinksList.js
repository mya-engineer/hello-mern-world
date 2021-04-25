import React from 'react'
import { useHistory } from 'react-router'

export const LinksList = ({ links }) => {
  const history = useHistory()

  if (!links.length) {
    return <p className='center'>No Links Yet!</p>
  }

  return (
    <div>
      <table className='highlight'>
        <thead>
          <tr>
            <th>#</th>
            <th>Original</th>
            <th>Reduced</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => {
            return (
              <tr
                onClick={() => history.push(`/detail/${link._id}`)}
                style={{ cursor: 'pointer' }}
                key={link._id}>
                <td>{index + 1}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
