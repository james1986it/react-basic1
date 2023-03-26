import React from "react";
import ChildComponent from "./ChildComponent";
// import FuntionComponent from "./FuntionComponent";

class MyForm extends React.Component {
  // Khai báo biến state
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: 1, title: "Title 1", salary: "500" },
      { id: 2, title: "Title 2", salary: "300" },
      { id: 3, title: "Title 3", salary: "200" },
      { id: 4, title: "Title 4", salary: "900" },
      { id: 5, title: "Title 5", salary: "700" },
      { id: 6, title: "Title 6", salary: "100" },
      { id: 7, title: "Title 7", salary: "1200" },
      { id: 8, title: "Title 8", salary: "7200" },
      { id: 9, title: "Title 9", salary: "4300" },
      { id: 10, title: "Title 10", salary: "2300" },
      { id: 11, title: "Title 11", salary: "4300" },
      { id: 12, title: "Title 12", salary: "2100" },
    ],
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // Ngăn chặn hành động mặc định của nút submit form, nút submit form có type là submit
    // event.preventDetault();

    // log dữ liệu form
    console.log(">>> Dữ liệu form: ", this.state);
  };

  /**
   *
   * @returns
   * JSX: cho phép viết HTML bên trong file js và viết được js bên trong html
   * JSX: luôn trả về 1 khối bao bọc bên trong cặp thẻ div hoặc có thể dùng thẻ đặc biệt frapment hoặc cặp thẻ <> </>
   *
   */
  render() {
    // Log để biết biến state thay đổi
    console.log(">>> call render: ", this.state);
    return (
      <>
        <div>
          <form>
            <label htmlFor="fname">First name:</label>
            <br />
            <input
              type="text"
              value={this.state.firstName}
              onChange={(event) => this.handleChangeFirstName(event)}
            />
            <br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input
              type="text"
              value={this.state.lastName}
              onChange={(event) => this.handleChangeLastName(event)}
            />
            <br />
            <br />
            <input
              type="button"
              value="Submit"
              onClick={(event) => this.handleSubmit(event)}
            />
          </form>
        </div>

        <ChildComponent
          name={this.state.firstName}
          number={1}
          arrJobs={this.state.arrJobs}
        />
        {/* <ChildComponent
          name={"thuộc tính props 2"}
          number={2}
          arrJobs={this.state.arrJobs}
        />
        <ChildComponent
          name={"thuộc tính props 3"}
          number={3}
          arrJobs={this.state.arrJobs}
        /> */}
      </>
    );
  }
}

// Nếu trong 1 file component chỉ viết có 1 component thì export compoent sẽ dùng lệch bên dưới
export default MyForm;

// Nếu trong 1 file có nhiều component class để export ra nhiều component class thì dùng như sau
// export default { MyComponent, MyComponent1};
// export { MyComponent, MyComponent1};

// Ở file sử dụng các component này thì sẽ import nhiều component Mycomponent thì import như sau
// import {MyComponent, MyComponent1} from 'Đường dẫn file component cần import'
