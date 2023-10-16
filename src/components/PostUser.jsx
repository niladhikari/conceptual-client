const PostUser = () => {
  const handlePostUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    const myData = {
      name,
      email,
      password,
    };
    console.log(myData);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            alert('user add successfully')
          }
      });

  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">User: </h1>
        <form onSubmit={handlePostUser} action="">
          <input className="mb-2" type="text" name="name" id="" />
          <br />
          <input className="mb-2" type="email" name="email" id="" />
          <br />
          <input className="mb-2" type="password" name="password" id="" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PostUser;
