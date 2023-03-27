import React from "react";
// thư viện hiển thị thông báo notify
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    // Hàm xóa 1 todo
    handleDeleteTodo = (event, todo) => {
        // Kiểm tra dữ liệu
        if (todo === null) {
            toast.error('Không có dữ liệu to do cần xóa, vui lòng kiểm tra lại!');
            return;
        }

        // Thực hiện xóa
        this.props.deleteTodo(todo);
    }

    // Hàm sửa 1 todo
    handleEditTodo = (event, todo) => {
        // Thực hiện xóa
        this.props.editTodo(todo);
    }

    render() {
        // Lấy dữ liệu listTodo được truyền từ component cha là Todo sang theo dạng props
        let { listTodo } = this.props;
        return (
            <>
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id} className="todo-child">
                                        <span>{index + 1} - {item.title}</span>
                                        <button className="edit" onClick={(event, todo) => this.handleEditTodo(event, item)}>Edit</button>
                                        <button className="delete" onClick={(event, todo) => this.handleDeleteTodo(event, item)}>Delete</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ListTodo;