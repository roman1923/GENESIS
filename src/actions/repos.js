import axios from "axios";
import {setIsFetching, setRepos} from '../reducers/reposReducer'
import {setVideo} from '../reducers/videoReducer'
import {store} from '../reducers/index.js';

const currentState = store.getState();
const stateId = currentState.repos.ident;
const courseID = JSON.parse(JSON.stringify(stateId))
const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0';
const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM';
const token = [header, body, signature].join('.');

export const getRepos = () => {

        return async (dispatch) => {
        dispatch(setIsFetching(true))
        const responseVideo = await axios.get('videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8')
        const link = responseVideo.request.responseURL;
        const responseMany = await axios.get(`api/v1/core/preview-courses`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        dispatch(setRepos(responseMany.data))
        dispatch(setVideo(link))
    }
};






