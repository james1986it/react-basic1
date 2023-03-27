import React from "react";

class MyComponent extends React.Component {
  // Khai báo biến state
  state = {
    name: "Lực nd",
    company: "Công ty cổ phần quảng cáo trực tuyến 24h",
  };

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // Hàm này chạy khi có dữ liệu update
  // Sử dụng khi muốn so sánh dữ liệu hiện tại và tương lai hoặc quá khứ là thích hợp
  // Hoặc muốn thay đổi dữ liệu của component con khi component cha thay đổi
  componentDidUpdate(prevProps, prevState) {
    console.log(">>> chạy conponents Did Update:", "prevProps: ", prevProps, "; prevState: ", prevState, "; this state: ", this.state);
  }

  // Hàm này chạy đầu tiên sau hàm render khi 1 class component được gọi
  // Sử dụng để gọi api để lấy dữ liệu hiển thị
  componentDidMount() {
    console.log(">>> chạy conponents Did mount");
  }

  /**
   *
   * @returns
   * JSX: cho phép viết HTML bên trong file js và viết được js bên trong html
   * JSX: luôn trả về 1 khối bao bọc bên trong cặp thẻ div hoặc có thể dùng thẻ đặc biệt frapment hoặc cặp thẻ <> </>
   *
   */
  render() {
    // let Name = 'Lực';

    return (
      <>
        <div>
          <label>Nhập tên: </label>{" "}
          <input onChange={(event) => this.onChangeName(event)} />
          <p>
            <label>Tên của bạn là: {this.state.name}</label>
          </p>
        </div>
      </>
    );
  }
}

// Nếu trong 1 file component chỉ viết có 1 component thì export compoent sẽ dùng lệch bên dưới
export default MyComponent;

// Nếu trong 1 file có nhiều component class để export ra nhiều component class thì dùng như sau
// export default { MyComponent, MyComponent1};
// export { MyComponent, MyComponent1};

// Ở file sử dụng các component này thì sẽ import nhiều component Mycomponent thì import như sau
// import {MyComponent, MyComponent1} from 'Đường dẫn file component cần import'
