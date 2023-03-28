import React from "react";
import "./ListTodo.scss";
// thư viện hiển thị thông báo notify
import { toast } from "react-toastify";
import ListTodo from "./ListTodo";

class Todo extends React.Component {
  state = {
    listTodo: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bug" },
    ],
    itemTdoEdit: {
      id: "",
      title: "",
    },
  };

  // Hàm xóa 1 todo
  deleteTodo = (todo) => {
    // todo hiện tại
    let currentListTodo = this.state.listTodo;
    // Lọc chỉ lấy các listtodo khác với todo cần xóa
    currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);

    // Set lại listtodo mới
    this.setState({
      listTodo: currentListTodo,
    });

    toast.success("Bạn xóa dữ liệu Todo thành công");
  };

  // Hàm sửa 1 todo
  editTodo = (todo) => {
    console.log(">>> giá trị todo cần sửa: ", todo);
  };

  render() {
    let { listTodo } = this.state;
    return (
      <>
        <p>This is Todo App</p>
        <div>Đây là ứng dụng To Do App</div>
        <div className="list-todo-container">
          <ListTodo
            listTodo={listTodo}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
          />
        </div>
      </>
    );
  }
}

export default Todo;
