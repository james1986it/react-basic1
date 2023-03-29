import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";


class ListUser extends React.Component {
  // biến state
  state = {
    listusers: [],
  };

  // do có thể load dữ liệu sẽ bị lâu dẫn đến bất đồng bộ nên sẽ dùng đến các async
  //   componentDidMount() {
  //     // Goi api để lấy dữ liệu
  //     axios.get("https://reqres.in/api/users?page=1").then((res) => {
  //       console.log(">>> check res: ", res);
  //     });
  //   }

  async componentDidMount() {
    // Goi api để lấy dữ liệu
    let res = await axios.get("https://reqres.in/api/users?page=1");
    console.log(">>> check res: ", res);

    this.setState({
      listusers: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  handleOnClickDetailUser = (user) => {
    this.props.history.push(`/listuser/${user.id}`);
  }

  // Hàm này khi gọi component sẽ đc thực hiện render đầu tiên (lần 1) sau đó nó sẽ gọi đến hàm componentDidMount
  render() {
    let { listusers } = this.state;
    return (
      <>
        <div>Trang list user</div>
        <table id="customers">
          <tbody>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
            {listusers &&
              listusers.length > 0 &&
              listusers.map((item, index) => {
                return (
                  <>
                    <tr key={item.id} onClick={() => this.handleOnClickDetailUser(item)}>
                      <td>{item.id}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.avatar}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}

export default withRouter(ListUser);
