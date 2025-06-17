import React from 'react'
import { Link } from 'react-router'

const NoteCard = ({note}) => {
  return (
    <Link to={`/note/${note._id}`} >
      NoteVard
    </Link>
  )
}

export default NoteCard
