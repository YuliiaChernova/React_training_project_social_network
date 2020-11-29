let state = {
    profilePage: {
        postsData: [
            { id: 1, text: 'It is my first post', likesCount: 15 },
            { id: 2, text: 'Lets chatting', likesCount: 6 },
        ],
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Mary' },
            { id: 4, name: 'Helga' },
        ],
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'Hakuna Matata' },
            { id: 4, message: 'How are you?' },
        ],
    },
    sideBar: {
        friendsData: [
            {id: 1, name: 'Mary', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
            {id: 2, name: 'Reena', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
            {id: 3, name: 'Melany', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
        ]
    }
}

export default state;