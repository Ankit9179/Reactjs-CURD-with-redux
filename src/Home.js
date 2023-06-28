import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./redux/features/userSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deletehanler = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <>
      <div className="data-table">
        <h2 className="text-center  mb-3">CRUD operation with redux</h2>
        <Link to={"create"} className="btn btn-success mt-5 mb-3">
          Create +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>
                    <Link to={`/edit/${data.id}`} className="btn btn-primary">
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => deletehanler(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
