import React from 'react'
import { Table } from 'reactstrap';
import FormComponent from './FormComponent'

class UserList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      user:{}
    }
    this.hide = this.hide.bind (this)
  }
  hide() {
    this.setState({show:false})
  }
  getElementId(value) {
    this.setState({
      user: value,
      show: true,
      title: value.name

    })
  }
 
  render() {
    return (
      <div>
        <div className='container'>
          <button className='btn btn-primary' onClick={() => {this.setState ({user:{}, show : true, title: "New User"})}} >Add</button>
          {
            this.state.show ? (
              <FormComponent show = {this.state.show} 
              hide= {this.hide} 
              addUser = {this.props.addUser} 
              user={this.state.user} 
              title={this.state.title}
              editUser = {this.props.editUser}/>
            ):null
          }
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>SurName</th>
                <th>UserName</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.username}</td>
                  <td>
                    <button className='btn btn-warning' onClick={()=> this.getElementId(user)}>Edit</button>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=> this.props.deleteUser(user)} >Delete</button>
                  </td>
                </tr>

              ))
              }
            </tbody>
          </Table>
        </div>
      </div>
    )

  }

}
export default UserList;