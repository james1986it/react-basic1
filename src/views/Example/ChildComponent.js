import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  onChangeShowHide = (event) => {
    this.setState({
      showJobs: !this.state.showJobs,
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
    console.log(">>> call render: ", this.state);
    // cú pháp lấy các biến nhanh từ dữ liệu object
    let { name, number, arrJobs } = this.props;

    //  Lấy biến showJOb
    let { showJobs } = this.state;

    // Hoặc có thể lấy như sau
    // left name = this.props.name;
    // left number = this.props.number;

    return (
      <>
        <div>
          <label> Đây là component con {number}</label>
          <br />
          <label>
            {" "}
            Đây là giá trị của biến props từ cha truyền xuống con: {name}
          </label>
        </div>
        <div>
          <p>Job list</p>
          {showJobs === false && (
            <div>
              <button onClick={(event) => this.onChangeShowHide(event)}>
                show content
              </button>
            </div>
          )}
          {/* Dùng điều kiện của react hoạc có thể dùng if else của js */}
          {showJobs === true && (
            <>
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id + "." + number}>
                    {item.title} - {item.salary}{" "}
                    <button
                      onClick={(event) => this.props.removeJob(item, event)}
                    >
                      Xoá
                    </button>
                  </div>
                );
              })}
              <div>
                <button onClick={(event) => this.onChangeShowHide(event)}>
                  Hide content
                </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

// Nếu trong 1 file component chỉ viết có 1 component thì export compoent sẽ dùng lệch bên dưới
export default ChildComponent;

// Nếu trong 1 file có nhiều component class để export ra nhiều component class thì dùng như sau
// export default { MyComponent, MyComponent1};
// export { MyComponent, MyComponent1};

// Ở file sử dụng các component này thì sẽ import nhiều component Mycomponent thì import như sau
// import {MyComponent, MyComponent1} from 'Đường dẫn file component cần import'
