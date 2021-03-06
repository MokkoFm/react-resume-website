import commentReducer from './reducers/commentReducer'

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
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.blog = commentReducer(this._state.blog, action);
        this.rerenderEntireTree(this._state);
    }
}

window.store = store;

export default store;