import React from 'react';

class MyComponent extends React.Component{
    /**
     * 
     * @returns 
     * JSX: cho phép viết HTML bên trong file js và viết được js bên trong html
     * JSX: luôn trả về 1 khối bao bọc bên trong cặp thẻ div hoặc có thể dùng thẻ đặc biệt frapment hoặc cặp thẻ <> </>
     * 
     */
    render() {
        let Name = 'Lực';

        return(
            <div>Hello my component, My name is  { Name } </div>
        )
    }
}

// Nếu trong 1 file component chỉ viết có 1 component thì export compoent sẽ dùng lệch bên dưới
export default MyComponent;

// Nếu trong 1 file có nhiều component class để export ra nhiều component class thì dùng như sau
// export default { MyComponent, MyComponent1};
// export { MyComponent, MyComponent1};

// Ở file sử dụng các component này thì sẽ import nhiều component Mycomponent thì import như sau
// import {MyComponent, MyComponent1} from 'Đường dẫn file component cần import'

