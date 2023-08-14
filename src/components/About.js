import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div
    className="Home d-flex align-items-center justify-content-center"
    style={{
      overflow: "hidden",
      backgroundImage:
        "url('https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1380&t=st=1692007258~exp=1692007858~hmac=c685429a59a2d7f39b3115384aabf05c933af5574c88fc3cdc7e2039848bfa7d')",
      backgroundSize: "cover",
      height: "100vh",
    }}
  >
    <div className="w-100">
      <h1 className="text-light lh-lg">
        thanks for your vist, for any quastion contact me
      </h1>
      <Link to = "https://www.linkedin.com/in/wiaam-hilal-9b3776281/" className='btn btn-primary'>conatact me</Link>
    </div>
  </div>
  )
}

export default About