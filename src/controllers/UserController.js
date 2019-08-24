const users = [
  {
    name: "testesssdasda",
    email: "teste@gmail.com"
  },
  {
    name: "teste2",
    email: "teste2@gmail.com"
  }
];

class UserController {
  index(req, res) {
    return res.json({ name: users[0].name, email: users[0].email });
  }
}

export default new UserController();
