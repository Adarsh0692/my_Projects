import React, { useState } from "react";
import {
 
  FaComment,
  FaRetweet,
  FaHeart,
  
} from "react-icons/fa";
import { GoVerified} from 'react-icons/go'
import { FiShare} from 'react-icons/fi'
import { CgPoll} from 'react-icons/cg'
import { FcLike} from 'react-icons/fc'



const Posts = ({content,name,likeCount,commentCount,time,email,retweet,index,isLike}) => {
  const [like, setLike] = useState(isLike)
  const [likesCount, setLikeCount] = useState(likeCount)
  function handleLike(){
    setLike(!like)
    if(like){
    setLikeCount(likesCount + 1)
    } else{
      setLikeCount(likesCount -1)
    }
  }
  
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src={`https://picsum.photos/1000/500?q=${index}`} alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>{name}</strong> <GoVerified className="verify" />
        </div>
        <div className="posts__first__username">
          {email} <span>{time}</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          {content}
        </div>
        <div className="postss__details__img">
          <img src={`https://picsum.photos/1000/500?q=${index}`} alt="post" />
        </div>
        <div className="reactions">
          <span className="comment">
            <FaComment  /> {commentCount}
          </span>
          <span className="retweet">
            <FaRetweet  /> {retweet}
          </span>
          <span className="like" onClick={handleLike}>
            {like? <FaHeart/> : <FcLike  />} {likesCount}
          </span>
          <span className="views">
            <CgPoll  /> {likeCount}
          </span>
          <span className="share">
            <FiShare  /> 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;