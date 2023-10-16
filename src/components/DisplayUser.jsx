import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DisplayUser = () => {
  const loadUsers = useLoaderData();
  const [users,setUsers] = useState(loadUsers)


  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`,{
        method:"DELETE"
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if (data.deletedCount > 0) {
            alert('delete the item')
            const remaining = users.filter(cof => cof._id !== _id);
            setUsers(remaining);
          }
    })
  };

  return (
    <div>
      <h2>User: {users.length}</h2>
      {users.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <br />
          <button
            onClick={() => handleDelete(user._id)}
            className="mr-2 btn bg-slate-200 text-black"
            type="submit"
          >
            Delete
          </button>
          <Link to={`/users/${user._id}`}>
            <button className=" btn bg-slate-200 text-black" type="submit">
              UPDATE
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayUser;
