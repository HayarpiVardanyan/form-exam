import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getUserList } from '../http/listAPI';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUserList();
        setUsers(response);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-center">All Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Education</th>
            <th>Work</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.education}</td>
              <td>{user.work}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;




