import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/actions/index";
import  styled from "styled-components";

const DeleteAllUser = () => {
  
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  };

  return (
    <div style={{marginTop:20}}>
      <button className="btn clear-btn" onClick={() => deleteAllUsers()}>Delete Users</button>
    </div>
  );
};

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem; 
  }
`

export default DeleteAllUser;

