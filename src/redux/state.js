let rerenderEntireTree = () => {
    console.log("State has changed")
}

let state = {
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
};

window.state = state;

export let addComment = () => {
    let newСomment = {
        'id': 2,
        'text': state.blog.newComment,
        'likes': 0,
    };
    state.blog.comments.push(newСomment);
    state.blog.newComment = '';
    rerenderEntireTree(state);
}

export let updateComment = (newText) => {
    state.blog.newComment = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;