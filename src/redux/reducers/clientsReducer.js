let initialState = {
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

const clientsReducer = (state=initialState, action) => {
    switch (action.type) {    
        default:
            return state;
    }
};

export default clientsReducer;