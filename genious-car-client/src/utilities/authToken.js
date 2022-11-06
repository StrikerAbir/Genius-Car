export const setAuthToken = (user) => {
    const currentUser = {
      email: user.email,
    };
    console.log(currentUser);
    //get jwt token
    fetch("https://genious-car-server-wheat.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // local storage is not best place to store jwt data. but easy
        localStorage.setItem("token", data.token);
      });
}