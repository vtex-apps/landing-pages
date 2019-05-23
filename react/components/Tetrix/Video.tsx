import React, { FunctionComponent } from 'react'

const Video: FunctionComponent = () => (
  <section className="mv7 flex justify-center items-center">
    <video className="w-70" controls>
      <source src="movie.mp4" type="video/mp4" />
      <source src="movie.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </section>
)

export default Video
