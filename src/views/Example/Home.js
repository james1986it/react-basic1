import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log("check timeout");
      // Thực hiện sau 3s sẽ tự chuyển hướng sang trang Todo app
      this.props.history.push("/todo");
    }, 3000);
  }
  render() {
    console.log(">>> check props của component Home: ", this.props);
    return (
      <>
        <div>Đây là trang chủ</div>
      </>
    );
  }
}

export default withRouter(Home);
