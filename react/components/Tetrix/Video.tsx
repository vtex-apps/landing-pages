import React, { FunctionComponent } from 'react'

const Video: FunctionComponent = () => (
  <section className="mv7 flex justify-center items-center">
    <iframe
      className="w-70-l w-90 vh-75"
      src="https://www.youtube.com/embed/fBe0HempPkU"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </section>
)

export default Video
