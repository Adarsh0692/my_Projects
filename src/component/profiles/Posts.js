import React, { useState } from "react";
import { GoVerified } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import IosShareIcon from "@mui/icons-material/IosShare";
import EqualizerSharpIcon from "@mui/icons-material/EqualizerSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RepeatIcon from "@mui/icons-material/Repeat";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Typography from "@mui/material/Typography";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';



const Posts = ({
  content,
  name,
  likeCount,
  commentCount,
  time,
  email,
  retweet,
  index,
  isLike,
  share,
  views,
}) => {
  const [like, setLike] = useState(isLike);
  const [likesCount, setLikeCount] = useState(likeCount);

  function handleLike() {
    setLike(!like);
    if (like) {
      setLikeCount(likesCount + 1);
    } else {
      setLikeCount(likesCount - 1);
    }
  }

  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img
            src={`https://picsum.photos/1000/500?q=${views}`}
            alt="profile img"
          />
        </div>
        <div className="posts__first__name">
          <strong>{name}</strong> <GoVerified className="verify" />
        </div>
        <div className="posts__first__username">
          {email} <span>{time}</span>
        </div>
        <Tooltip title="More">
        <span className="more">
        
          <MoreHorizSharpIcon />
         
        </span>
        </Tooltip>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">{content}</div>
        <div className="postss__details__img">
          <img onDoubleClick={handleLike}  src={`https://picsum.photos/1000/500?q=${retweet}`} alt="post" />
        </div>
        <div className="reactions">
          <span className="comment">
            <Tooltip title="Reply">
              <ModeCommentOutlinedIcon />
            </Tooltip>{" "}
            {commentCount}
          </span>

          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
               
                <span className="retweet">
                  <Tooltip title="Retweet">
                    <RepeatIcon {...bindTrigger(popupState)} />
                  </Tooltip>{" "}
                  {retweet}
                </span>

                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography
                    sx={{
                      p: 0.5,
                      cursor: "pointer",
                      ":hover": { background: "#f5f4f2" },
                    }}
                  >
                    {" "}
                    <span>
                      <RepeatIcon />
                    </span>{" "}
                    Retweet
                  </Typography>
                  <Typography
                    sx={{
                      p: 0.5,
                      cursor: "pointer",
                      ":hover": { background: "#f5f4f2" },
                    }}
                  >
                    {" "}
                    <span>
                      <DriveFileRenameOutlineIcon />
                    </span>{" "}
                    Quote Tweet
                  </Typography>
                </Popover>
              </div>
            )}
          </PopupState>

          <span className="like" onClick={handleLike}>
            {like ? (
              <Tooltip title="Like">
                <FavoriteBorderIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Unlike">
                <FavoriteIcon sx={{ color: "red" }} />
              </Tooltip>
            )}{" "}
            {likesCount}
          </span>
          <span className="views">
            <Tooltip title="View">
              <EqualizerSharpIcon />
            </Tooltip>{" "}
            {views}
          </span>
          <span className="share">
            <Tooltip title="share">
              <IosShareIcon />
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;