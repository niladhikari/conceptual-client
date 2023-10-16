import { useLoaderData } from "react-router-dom";

const UpdateData = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const { _id, name,email,password } =
  singleData;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const updateData = {
      name,
      email,
      password,
    };
    console.log(updateData);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            alert('update the data')
          }
      });
  };

  return (
    <div>
      <h1>Updated: </h1>
      <form onSubmit={handleUpdate} action="">
        <input type="text" defaultValue={name} name="name" id="" />
        <br />
        <input
          type="email"
          defaultValue={email}
          name="email"
          id=""
        />
        <br />
        <input
          type="password"
          name="password"
          defaultValue={password}
          id=""
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateData;
