import React, { Fragment, useState, useEffect } from 'react';
import config from '../../config';
import UploadPost from '../UploadPost/UploadPost';
import Post from '../Post/Post';
import TextPost from '../Post/TextPost';
import FeaturedVid from '../../images/video2.mp4';
import './Profile.css';
import { useParams } from 'react-router-dom';

const Profile = props => {

  const [isLoading, setIsLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState("")
  const [userPosts, setUserPosts] = useState([])
  const [originalPosts, setOriginalPosts] = useState([])
  const [err, setError] = useState("")
  const [listFilter, setListFilter] = useState("")
  const { API_ENDPOINT } = config;

  const setUserData = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData.id)
    setProfileInfo(userData)
  }

  const getUserPosts = async () => {
    console.log(props.match.params.UserId)
    const user = props.match.params.UserId
    try {   
      const response = await fetch(`${API_ENDPOINT}/posts/${user}`);
      const jsonData = await response.json();

      setUserPosts(jsonData);
      console.log(jsonData)
      setOriginalPosts(jsonData)
      setIsLoading(false)
    } catch (err) {
        console.error(err.message)
    }
  }

  const getUserInfo = async () => {
    console.log(props.match.params)
    try {   
      const response = await fetch(`${API_ENDPOINT}/users/${props.match.params.UserId}`);
      const jsonData = await response.json();

      setProfileInfo(jsonData);
    } catch (err) {
        console.error(err.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setUserData()
    getUserPosts()
    getUserInfo()
  }, []);

  if(!isLoading) {
    const { profile_img_url, username, first_name, last_name } = profileInfo
    return (
      <Fragment>
        <div id="feed-container" className="fade-in-login">
          <div className="max-1000">
            <div className="profile-info">
              <img id="main-profile-img" src={profile_img_url}/>
              <p id="profile-username"><i class="fas fa-minus"></i> {username} <i class="fas fa-minus"></i></p>
              <p id="profile-name">{first_name} {last_name}</p>
            </div>
            <div className="profile-inner-container">
              <h1 id="profile-heading">My Latest Posts</h1>
              {userPosts
                .map(post => {
                  return (
                    <Post
                      key={post.id}
                      contentUrl={post.content_url}
                      postDescription={post.post_description}
                      postUploaderId={post.post_uploader_id}
                      uploadDate={post.date_created}
                      postId={post.id}
                      activeUser={props.activeUser}
                    />
                  )}
                )}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <div id="loading-container">
      <h2>Loading Page</h2>
    </div>
  )
}

export default Profile;