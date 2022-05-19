import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ReplyIcon from "@mui/icons-material/Reply";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ShareIcon from "@mui/icons-material/Share";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_header_text">
            <h3>
              {displayName}{" "}
              <span className="post_header_special">
                {verified && <VerifiedIcon className="post_badge" />}
                {"  "}@{userName}
              </span>
            </h3>
          </div>
          <div className="header_desc">
            <p>{text}</p>
          </div>
        </div>
        <img
          src={image}
          alt="..."
        />
        <div className="post_footer">
          <ChatOutlinedIcon  />
          <ReplyIcon  />
          <ThumbUpAltOutlinedIcon  />
          <ShareIcon  />
        </div>
      </div>
    </div>
  );
}

export default Post;
