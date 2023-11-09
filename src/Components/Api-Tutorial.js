import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ApiTutorial = () => {
  const [Users, setUsers] = useState([]);
  console.log(Users);

  const URL = "https://6538e49fa543859d1bb224ac.mockapi.io/data";
  // console.log(URL);
  const getData = async () => {
    await axios
      .get(`${URL}`)
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-center">API Tutorial</h1>
      <div className="p-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>
                <FaEdit />
              </th>
              <th>
                <MdDelete />
              </th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user.avatar}
                    alt="..."
                    width={30}
                    height={30}
                    className="rounded-circle"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <FaEdit />
                </td>
                <td>
                  <MdDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ApiTutorial;