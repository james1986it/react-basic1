import React from "react";
import { connect } from "react-redux";

class ExRedux extends React.Component {
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

  // add job mới khi submit form bên component con addComponent
  addNewJob = (job) => {
    console.log(">>> job: ", job);
    // add thêm job vào arrJobs
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });

    // Hoặc có thể viết như sau
    /*
      // lấy state hiện tại
      let currentJob = this.state.arrJobs;
      // đẩy dữ liệu vào job hiện tại
      currentJob.push(job);
      // set lại giá trị state
      this.setState({
        arrJobs: currentJob,
        // arrJobs: [...this.state.arrJobs, job],
      });
    */
  };

  // Hàm xoá job
  removeJob = (jobItem, event) => {
    console.log(">>> job cần xoá: ", jobItem);
    console.log(">>> event: ", event);

    // Lấy job hiện tại
    let currentJob = this.state.arrJobs;
    // Lấy ra tất cả các phần tư khác với phần tử cần xoá jobItem
    currentJob = currentJob.filter((item) => item.id !== jobItem.id);

    // Set lại giá trị jobs
    this.setState({
      arrJobs: currentJob,
    });
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
    console.log(">>> Check props: ", this.props);
    return (
      <>
        <div>Ví dụ về cách sử dung Redux</div>
      </>
    );
  }
}

// Map state của redux với props của component ExRedux, tạo ra 1 sợi dây liên hệ giữa react và redux
// State của redux
const mapStateToProps = (state) => {
  return {
    // state.users này là dữ liệu được định nghĩa ở file src/store/reducers/rootReducer.js
    dataRedux: state.users,
  };
};

// Nếu trong 1 file component chỉ viết có 1 component thì export compoent sẽ dùng lệch bên dưới
export default connect(mapStateToProps)(ExRedux);
