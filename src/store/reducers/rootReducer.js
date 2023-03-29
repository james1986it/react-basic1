// khai báo rootReducer

// Cần phải khai báo 1 init cho state của redux
// Sau này sẽ dùng api để lấy dữ liệu
const initState = {
  users: [
    {
      id: 1,
      name: "Lực nd 1",
    },
    {
      id: 2,
      name: "Lực nd 2",
    },
  ],
  post: [],
  data: [],
};

/**
 * Gồm 2 tham số
 * @param {*} state => state của redux
 * @param {*} action  => action của react gửi cho redux
 */
const rootReducer = (state = initState, actions) => {
  // Xử lý các action
  switch (actions.type) {
    // Action xoá 1 user
    case "DELETE_USER":
      console.log(">>> Action: ", actions);
      let users = state.users;
      //   Dữ liệu user cần xoá ở payload
      let userDelete = actions.payload;
      //   loại bỏ user cần bỏ
      users = users.filter((item) => item.id !== userDelete.id);

      // Trả về dữ liệu state với users mới ghi đè lên user cũ
      return {
        ...state,
        users,
      };

    //   Action tạo mới 1 user ngẫu nhiên
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10000);
      let addUserRandom = {
        id: id,
        name: `Random - ${id}`,
      };

      return {
        ...state,
        users: [...state.users, addUserRandom],
      };

    default:
      return state;
  }
};

export default rootReducer;
