import React, {useEffect, useRef} from 'react'
import './main.scss'
import { useDispatch, useSelector } from 'react-redux';
import {getRepos} from "../actions/repos.js";
import Repo from './repo/Repo.jsx';
import { setCurrentPage } from '../reducers/reposReducer';



function Main() {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.courses)
  const isFetching = useSelector(state => state.repos.isFetching)


  const currentPage = useSelector(state => state.repos.currentPage)

  const perPage = useSelector(state => state.repos.perPage)
  const pages = [1,2,3]
  useEffect(() => {
    dispatch(getRepos(currentPage, perPage))
   }, [currentPage]);
  function searchHandler() {
    dispatch(setCurrentPage(1))
    dispatch(getRepos(currentPage, perPage))
   }


  const video = useSelector(state => state.videos.video)
  const videoURL = 'http://127.0.0.1:5173/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8';
  const play = video.ok ? video : videoURL;

  const videoRef = useRef(null);
  const hoverTargetRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

const displayRepos = repos.slice(
  (currentPage - 1) * perPage,
  currentPage * perPage
);
  return (
    <div id="hover-target"
    ref={hoverTargetRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} className='main' > 
    <div className="video">
      <link href="https://vjs.zencdn.net/7.16.0/video-js.css" rel="stylesheet" />
      <video loop muted ref={videoRef} id="my-video" className="video-js vjs-default-skin" controls preload="auto" width="360" height="220"  data-setup='{}'>
        <source src={play} type="application/x-mpegURL" />
      </video>
      <script defer src="https://vjs.zencdn.net/7.16.0/video.js"></script>
    </div>
    <div className='container'>
    { isFetching === false
      ?
      displayRepos.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))
      :
      <div className='fetching'></div>
    }
    { isFetching === false
    ?
    <div className="pages">
      {pages.map((page, index) => <span key={index}
       className={currentPage == page ? "current-page" : 'page'}
       onClick={() => dispatch(setCurrentPage(page))}
       >{page}</span>)}
    </div>
    :
    <></>
    }
    </div>
    </div>
  )
}

export default Main
