import React from 'react'



export default function Newsitem(props) {
    let {title,description,imageUrl,newsUrl} = props
  return (
    <div className="container">
        <div className="card" style={{width : '18rem'}}>
            <img src={!imageUrl?'No-image-availablex2.webp':imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} targer="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
        </div>
  )
}
