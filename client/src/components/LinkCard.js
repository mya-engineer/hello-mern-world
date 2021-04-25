import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>

      <p>
        To Link:&nbsp;
        <a href={link.to} target='_blank' rel='noopener noreferrer'>
          {link.to}
        </a>
      </p>
      <p>
        From Link:&nbsp;
        <a href={link.from} target='_blank' rel='noopener noreferrer'>
          {link.from}
        </a>
      </p>
      <p>
        Clicks Count:&nbsp;
        <strong>{link.clicks}</strong>
      </p>
      <p>
        Created:&nbsp;
        <strong>{new Date(link.date).toLocaleDateString('ru')}</strong>
      </p>
    </>
  )
}
