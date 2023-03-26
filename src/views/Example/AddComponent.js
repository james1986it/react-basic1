import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangetitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangesalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // Ngăn chặn hành động mặc định của nút submit form, nút submit form có type là submit
    // event.preventDetault();

    // log dữ liệu form
    console.log(">>> Dữ liệu form: ", this.state);

    // Kiểm tra biến của form
    if (!this.state.title || !this.state.salary) {
      alert("Dữ liệu rỗng vui lòng kiểm tra lại!");
      return;
    }

    // lấy props và hàm được truyền từ component cha MyForm1 sau đó truyền dữ liệu vào hàm addNewJob
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000000),
      title: this.state.title,
      salary: this.state.salary,
    });

    // reset lại giá trị trên form
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <div>
          <form>
            <label htmlFor="fname">Title:</label>
            <br />
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => this.handleChangetitle(event)}
            />
            <br />
            <label htmlFor="lname">Salary:</label>
            <br />
            <input
              type="text"
              value={this.state.salary}
              onChange={(event) => this.handleChangesalary(event)}
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
      </>
    );
  }
}

export default AddComponent;
