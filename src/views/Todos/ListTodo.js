import React from "react";
// thư viện hiển thị thông báo notify
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        editTodo: {
            id: '',
            title: ''
        }
    }

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
        this.setState({
            editTodo: todo
        })
    }

    render() {
        // Lấy dữ liệu listTodo được truyền từ component cha là Todo sang theo dạng props
        let { listTodo } = this.props;
        // Lấy editTodo
        let { editTodo } = this.state;
        return (
            <>
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id} className="todo-child">
                                        {editTodo.id !== '' || editTodo.id != item.id ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <span>{index + 1} - <input value={item.title} /></span>
                                        }

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