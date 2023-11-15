import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from '../component/UserList';
import { v4 as uuidv4 } from 'uuid';

export default class homepages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          'id': uuidv4(),
          'name': "Sümeyye",
          'surname': "Soy",
          'username': "sumeyyesoy",
        },
        {
          'id': uuidv4(),
          'name': "Ahmet",
          'surname': "Yıldız",
          'username': "ahmetyildiz",
        },
        {
          'id': uuidv4(),
          'name': "Ayşe",
          'surname': "Çelik",
          'username': "aysecelik",
        },
        {
          'id': uuidv4(),
          'name': "Mehmet",
          'surname': "Yılmaz",
          'username': "mehmetyilmaz",
        },

      ]

    }
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);

  }

  addUser = (name, surname, username) => {
    if ((name, surname, username)) {
      const users = [...this.state.users];
      users.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      this.setState({ users: users })
    }
    else {
      alert("Belirlenen alanları doldurunuz...")
    }
  }

  deleteUser = (gnduser) => {
    const users = this.state.users.filter((user) => {
      return user.id !== gnduser.id;
    });
    this.setState({ users })
  }

  editUser = (id, name, surname, username) => {
    if ((id, name, surname, username)) {
      const users = [...this.state.users];
      let updatedUsers = users.map((user) => {
        if (user.id === id) {
          user = {
            id: id,
            name: name,
            surname: surname,
            username: username,
          }
        }
        return user;

      })
      this.setState({
        users: updatedUsers,
      })
    }
  }
  render() {
    return (
      <div>
        <div className='container'>
          <Navbar className="my-2" color="light" light>
            <NavbarBrand href="/">react-info </NavbarBrand>
          </Navbar>
          <UserList users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser} editUser={this.editUser} />
        </div>
      </div >
    )
  }

}

