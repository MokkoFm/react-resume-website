import style from './Clients.module.css'
const NavLink = require("react-router-dom").NavLink;

let Client = (props) => {
    let path="/clients/" + props.id;
    return (
        <div className={style.client}>
            <NavLink to={path}><p>{props.name}</p></NavLink>
        </div>
    )
};

const Testimonial = (props) => {
    return (
        <div className={style.testemonial}>
            <p>{props.message}</p>
        </div>
    )
}

const myClients = [
    {id: 1, name: 'IboxCorp'},
    {id: 2, name: 'Helios Tour'},
    {id: 3, name: 'Formula Spa'},
]

const myTestimonials = [
    {id: 1, message: 'It was cool to work with Sergei!'},
    {id: 1, message: 'Amazing developer!'},
    {id: 1, message: 'Thank you, Sergei!'},
]

const myClientsList = myClients.map((client) => <Client name={client.name} id={client.id}/>);
const myTestimonialsList = myTestimonials.map((testimonial) => <Testimonial message={testimonial.message}/>);

const Clients = () => {
    return (
        <div className={style.clients}>
            <div>
                {myClientsList}
            </div>
            <div>
                {myTestimonialsList}
            </div>
        </div>
    )
};

export default Clients;