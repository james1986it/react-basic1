// khai báo rootReducer

// Cần phải khai báo 1 init cho state của redux
// Sau này sẽ dùng api để lấy dữ liệu
const initState = {
    users: [
        {
            id: 1,
            name: 'Lực nd 1'
        },
        {
            id: 2,
            name: 'Lực nd 2'
        },
    ]
}

/**
 * Gồm 2 tham số
 * @param {*} state => state của redux
 * @param {*} action  => action của react gửi cho redux
 */
const rootReducer = (state = initState, action) => {

    return state;
}

export default rootReducer;