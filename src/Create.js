import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const addUserHandler = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <>
      <div className="create-form-div">
        <form onSubmit={addUserHandler}>
          <h4>Add new user</h4>
          <div className="mb-1">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
