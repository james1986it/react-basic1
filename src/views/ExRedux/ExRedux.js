import React from "react";
import { connect } from "react-redux";

class ExRedux extends React.Component {
  // Hàm xoá job
  handleDeleteUser = (user) => {
    console.log(">>> user cần xoá: ", user);
    // Thực hiện xoá dữ liệu user bằng hàm: deleteUserRedux => được định nghĩa trong hàm mapDispatchToProps ở bên dưới
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = (event) => {
    this.props.AddUserRedux();
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
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Ví dụ về cách sử dung Redux</div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <>
                  <div key={item.id}>
                    {index + 1} - {item.name}{" "}
                    <button
                      type="button"
                      onClick={() => this.handleDeleteUser(item)}
                    >
                      x
                    </button>
                  </div>
                </>
              );
            })}
          <div>
            <button
              type="button"
              onClick={(event) => this.handleCreateUser(event)}
            >
              Add user
            </button>
          </div>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    // hàm xoá 1 user từ redux
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),

    //   Hàm thực hiện thêm mới 1 user
    AddUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

// Nếu trong 1 file component chỉ viết có 1 component thì export compoent sẽ dùng lệch bên dưới
export default connect(mapStateToProps, mapDispatchToProps)(ExRedux);
