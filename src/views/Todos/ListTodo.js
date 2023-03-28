import React from "react";
// thư viện hiển thị thông báo notify
import { toast } from 'react-toastify';
import AddTodo from "./AdTodo";

class ListTodo extends React.Component {
    constructor(props) {
        super(props);

        console.log(">>>> vào đây đầu tiên");

        // Don't call this.setState() here!
        // Khai báo giá trị biến state ban đầu
        this.state = {
            listTodo: this.props.listTodo,
            editTodo: {
                id: '',
                title: ''
            }
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
        // this.props.deleteTodo(todo);

        // todo hiện tại
        let currentListTodo = this.state.listTodo;
        // Lọc chỉ lấy các listtodo khác với todo cần xóa
        currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);

        // Set lại listtodo mới
        this.setState({
            listTodo: currentListTodo
        });

        toast.success('Bạn xóa dữ liệu Todo thành công');
    }

    // Hàm sửa 1 todo
    handleEditTodo = (event, todo) => {
        console.log(">>> state hiện tại: ", this.state);
        this.setState({
            editTodo: todo
        })

        console.log(">>> state sau khi click vào edit: ", this.state);
    }

    onChangeEditTodo = (event) => {
        // edit hiện tại
        let editotoCopy = this.state.editTodo;
        editotoCopy.title = event.target.value;
        // set lại state edittodo
        this.setState({
            editTodo: editotoCopy
        });
    }

    handleUpdateTodo = (event) => {
        // edit hiện tại
        let editotoCopy = this.state.editTodo;
        // Lấy dữ liệu listTodo hiện tại
        let listTodoCopy = this.state.listTodo;
        // loại bỏ dữ liệu cũ
        listTodoCopy = listTodoCopy.filter((item) => item.id !== editotoCopy.id);

        console.log(">>> listTodoCopy: ", listTodoCopy);
        console.log(">>> editotoCopy: ", editotoCopy);

        // set lại dữ liệu
        // Reset editTodo
        this.setState({
            listTodo: [...listTodoCopy, editotoCopy],
            editTodo: {
                id: '',
                title: ''
            }
        });

        toast.success('Bạn cập nhật dữ liệu Todo thành công');
    }

    componentDidMount = (event) => {
        console.log(1);
    }


    // Hàm tạo mới 1 todo
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        });

        // Thông báo dạng popup notify
        toast.success('Bạn đã thêm mới Todo thành công');
    }

    render() {
        // Lấy dữ liệu listTodo được truyền từ component cha là Todo sang theo dạng props
        // let { listTodo } = this.props;
        // Lấy editTodo
        let { listTodo, editTodo } = this.state;

        return (
            <>
                <AddTodo
                    addNewTodo={this.addNewTodo}
                    itemTdoEdit={this.state.itemTdoEdit}
                />
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id} className="todo-child">
                                        {editTodo.id !== '' && editTodo.id === item.id ?
                                            <>
                                                <span>{index + 1} - <input
                                                    value={editTodo.title}
                                                    onChange={(event) => this.onChangeEditTodo(event)}
                                                />
                                                </span>
                                                <button className="edit" onClick={(event, todo) => this.handleUpdateTodo(event, item)}>Update</button>
                                            </>
                                            :
                                            <>
                                                <span>{index + 1} - {item.title}</span>
                                                <button className="edit" onClick={(event, todo) => this.handleEditTodo(event, item)}>Edit</button>
                                            </>
                                        }
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