import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import './repo.scss';
import { useNavigate } from 'react-router-dom';
import { setId } from '../../reducers/reposReducer';
import { setRep } from '../../reducers/reposReducer';
import axios from "axios";
const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0';
const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM';
const token = [header, body, signature].join('.');


function Repo(props) {
const repo = props.repo;

const dispatch = useDispatch();
const handleClick = async () => {
  const elementId = await repo.id;
  dispatch(setId(elementId));
  const responseOne = await axios.get(`api/v1/core/preview-courses/${elementId}`,
  {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    }})
  dispatch(setRep(responseOne.data))
};
const navigate = useNavigate();

function handle() {
  setTimeout(() => {
    window.location.reload();
  }, 2200);
  navigate('/card');
}
  return (
    <>
     <div onClick={handle}>
    <div onClick={() => handleClick()} className='repo'>
      <div className="repo-header">
        <h2 className="repo-header__title">
          {repo.title}
        </h2>
        <div className="repo-header__photo">
          <img src={repo.previewImageLink + '/cover.webp'} />
        </div>
        <h4 className="repo-header__course-name">
        {repo.meta.slug}
        </h4>
        <h3 className="repo-header__lessons-count">
          {repo.lessonsCount} lessons
        </h3>
        <div className="repo-header__skills">
          {repo.meta.skills}
        </div>
        <div className="repo-header__rating">
          {repo.rating} stars
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Repo;
