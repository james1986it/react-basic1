import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";



class DetailUser extends React.Component {
    state = {
        detailUser: []
    }

    async componentDidMount() {
        let id = 0;
        // Kiểm tra tham số truyền vào từ url
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            // Lấy id user
            id = this.props.match.params.id;
            // Lấy chi tiết 1 user
            let res = await axios.get(`https://reqres.in/api/users/${id}`);

            this.setState({
                detailUser: res && res.data && res.data.data ? res.data.data : []
            });
            console.log(">>> chi tiết 1 user:  ", res);
        }

    }

    handleBackUser = (event) => {
        this.props.history.push('/listuser');
    }

    render() {
        let { detailUser } = this.state;
        // Kiểm tra dữ liệu
        let isEmptyOb = Object.keys(detailUser).length === 0;

        console.log(">>> this.props:  ", this.props);
        return (
            <>
                <div>Chi tiết 1 User</div>
                {isEmptyOb === false &&
                    <>
                        <div>First name: {detailUser.first_name}</div>
                        <div>Last name: {detailUser.last_name}</div>
                        <div>Email: {detailUser.email}</div>
                        <div><img alt={detailUser.first_name} src={detailUser.avatar} /></div>
                    </>
                }

                <div><button onClick={(event) => this.handleBackUser(event)}>Back</button></div>
            </>
        )
    }
}

export default withRouter(DetailUser);