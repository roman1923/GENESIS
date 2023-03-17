import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './card.scss'

function Card() {
const repo = useSelector(state => state.repos.ide)

const repos = useSelector(state => state.repos);
const ideId = useSelector(state => state.repos.ide.id);
const matchingCourse = repos.courses.find(course => course.id === ideId);
const courseVideo = 'http://127.0.0.1:5173/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8'
if (matchingCourse) {
  var coursesVideos = 'http://127.0.0.1:5173/' + matchingCourse.meta.courseVideoPreview.link.slice(18,);
  var lessonsCount = matchingCourse.lessonsCount;
  var picture = matchingCourse.previewImageLink + '/cover.webp';
}
const courseVid = coursesVideos ? coursesVideos : courseVideo;
const location = useLocation();
const navigate = useNavigate();

const goBack = () => {
  if (location.state && location.state.from) {
    navigate(location.state.from);
  } else {
    navigate(-1);
  }
};

  return (
    <div>
      <button onClick={goBack} className="back-btn">Back</button>
      <div className='moovie'>
      <link href="https://vjs.zencdn.net/7.16.0/video-js.css" rel="stylesheet" />
      <video loop controls preload="auto" width="360" height="220"  data-setup='{}'>
        <source src={courseVid} type="application/x-mpegURL" />
      </video>
      </div>
      <script defer src="https://vjs.zencdn.net/7.16.0/video.js"></script>
    <div className='data'>
      <h1>{repo.title}</h1>
      <div>{repo.status}</div>
      <h4>{repo.description}</h4>
      <div>{repo.duration} duration</div>
      <h3>{repo.rating} rating</h3>
      <h5>{lessonsCount} lessons</h5>
      <img src={picture} alt="picture" />
    </div>
    </div>
  )
}

export default Card
