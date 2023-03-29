import React from "react";
import { withRouter } from "react-router-dom";

// import ảnh
import image1 from "../../assets/images/images.jpg";
// import image2 from "../../assets/images/image2.jpg";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   console.log("check timeout");
    //   // Thực hiện sau 3s sẽ tự chuyển hướng sang trang Todo app
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  render() {
    console.log(">>> check props của component Home: ", this.props);
    return (
      <>
        <div>Đây là trang chủ</div>
        <div>
          <img src={image1} alt="" />
        </div>
      </>
    );
  }
}

export default withRouter(Home);
