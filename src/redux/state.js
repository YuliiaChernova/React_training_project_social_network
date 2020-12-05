let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, text: 'It is my first post', likesCount: 15 },
                { id: 2, text: 'Lets chatting', likesCount: 6 },
            ],
            inputValue: '',
    
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
            inputValue: '',
        },
        sideBar: {
            friendsData: [
                {id: 1, name: 'Mary', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
                {id: 2, name: 'Reena', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
                {id: 3, name: 'Melany', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU'},
            ]
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    addPost(postMessage) {
        let newPost = {
            id: 6,
            text: postMessage,
            likesCount: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.inputValue = '';
        this._callSubscriber(this._state);
    },
    changePostInput(letter) {
        this._state.profilePage.inputValue = letter;
        this._callSubscriber(this._state);
    },

    sendMessage(message) {
        let newMessage = {
            id: 1,
            message: message,
        };
    
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.inputValue = '';
        this._callSubscriber(this._state);
    },
    changeMessageInput(letter) {
        this._state.dialogsPage.inputValue = letter;
        this._callSubscriber(this._state);
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

window.store = store;

export default store;