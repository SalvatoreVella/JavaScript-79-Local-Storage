const user = {
  id: 1,
  name: "John",
  age: 25,
};
const localUserCookie = (user) => {
  const getName = JSON.stringify(Object.keys({user})[0]);
  const userName = JSON.stringify(user);
  console.log(getName);
  return localStorage.setItem(getName, userName);
}

localUserCookie(user);
