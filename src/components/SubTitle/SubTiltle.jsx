import React from 'react'
import { Link } from 'react-router-dom'

function SubTiltle({ title, btntitle ,pathText}) {
  return (
    <div className="d-flex justify-content-between pt-4">
    <h3 >{title}</h3>
    {btntitle ? (
        <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
            <div className="shopping-now">{btntitle}</div>
        </Link>
    ) : null}
</div>
  )
}

export default SubTiltle