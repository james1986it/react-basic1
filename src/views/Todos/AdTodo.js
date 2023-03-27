import React from "react";
// thư viện hiển thị thông báo notify
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        id: '',
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            id: this.makeid(5),
            title: event.target.value
        });


    }

    // Hàm tạo id ngẫu nhiên
    makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }


    handleSubmit = (event) => {
        // Kiểm tra dữ liệu
        if (this.state.title === '') {
            toast.error('Chưa nhập dữ liệu vui lòng kiểm tra lại!');
            return;
        }

        // Gọi hàm add todo và truyền dữ liệu mới
        this.props.addNewTodo(this.state);

        // Set lại giá trị thẻ input
        this.setState({
            title: ''
        });
    }

    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add-todo">
                    <input type="text" onChange={(event) => this.handleOnChangeTitle(event)} value={title} />
                    <button type="button" className="add" onClick={(event) => this.handleSubmit(event)}>Add</button>
                </div>
            </>
        )
    }
}

export default AddTodo;