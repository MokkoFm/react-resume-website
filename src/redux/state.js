let store = {
    _state: {
        'blog': {
            'comments': [
                {id: 1, text: "Cool article!", likes: 11}
            ],
            'newComment': 'Напиши меня',
        },
        'clients': {
            'myClients': [
                {id: 1, name: 'IboxCorp'},
                {id: 2, name: 'Helios Tour'},
                {id: 3, name: 'Formula Spa'},
            ],
            'myTestimonials': [
            {id: 1, message: 'It was cool to work with Sergei!'},
            {id: 1, message: 'Amazing developer!'},
            {id: 1, message: 'Thank you, Sergei!'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log("State has changed");
    },
    addComment() {
        let newСomment = {
            'id': 2,
            'text': this._state.blog.newComment,
            'likes': 0,
        };
        this._state.blog.comments.push(newСomment);
        this._state.blog.newComment = '';
        this.rerenderEntireTree(this._state);
    },
    updateComment(newText) {
        this._state.blog.newComment = newText;
        this.rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}

window.store = store;

export default store;