import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";
import clap from "./../../public/icons/clap.png";
import { isEmpty } from "./Utils";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      title: post.title,
      content: post.content,
      author: post.author,
      likes: ++post.likes,
      id: post.id,
    };

    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: user[0].id,
    };

    dispatch(addLike(postData));
    dispatch(addUserLike(userData));
  };

  return (
    <div onClick={handleLike}>
      <img src={clap} alt="like this" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
