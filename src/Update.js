import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./redux/features/userSlice";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users); //get the users array from store
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);

  const updateHanler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="updated-form-div">
        <form onSubmit={updateHanler}>
          <h4>Update user</h4>
          <div className="mb-1">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={uname}
              className="form-control"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={uemail}
              className="form-control"
              onChange={(e) => setUemail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
