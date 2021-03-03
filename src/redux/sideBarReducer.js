let initialState = {
    friendsData: [
        {id: 1, name: 'Mary', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
        {id: 2, name: 'Reena', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
        {id: 3, name: 'Melany', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
    ]
};

const sideBarReducer = (state = initialState, action) => {
    return state;
};

export default sideBarReducer;