import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

import styles from "./Core.module.css";

import { File } from "../types";

import {
  selectOpenNewPost,
  resetOpenNewPost,
  fetchPostStart,
  fetchPostEnd,
  fetchAsyncNewPost,
} from "../post/postSlice";

import { Button, TextField, IconButton } from "@material-ui/core";
import { MdAddAPhoto } from "react-icons/md";
import { GrWaypoint } from "react-icons/gr"
const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    width: 350,
    height: 500,
    padding: "50px",
　　 transform: "translate(-50%, -50%)",
  },
};

　const NewPost: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const openNewPost = useSelector(selectOpenNewPost);

  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const handlerEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput?.click();
  };

  const newPost = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const packet = { title: title, img: image };
    await dispatch(fetchPostStart());
    await dispatch(fetchAsyncNewPost(packet));
    await dispatch(fetchPostEnd());
    setTitle("");
    setImage(null);
    dispatch(resetOpenNewPost());
  };

  return (
    <>
     
      <Modal
        isOpen={openNewPost}
        onRequestClose={async () => {
          await dispatch(resetOpenNewPost());
        }}
        style={customStyles}
      >
        <form className={styles.core_signUp}>
          <h1 className={styles.core_title}>tureru app</h1>
          
          <br />
          <TextField
            placeholder="場所、釣った魚"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="file"
            id="imageInput"
            hidden={true}
            onChange={(e) => setImage(e.target.files![0])}
          />
          <br />
          <IconButton onClick={handlerEditPicture}>
            <MdAddAPhoto />
          </IconButton>
          <br />
          <Button
            disabled={!title || !image }
            variant="contained"
            color="primary"
            onClick={newPost}
          >
            釣ったぞー！！
            <GrWaypoint />
          </Button>
        </form>
      </Modal>
     
    </>
  );
};

export default NewPost;