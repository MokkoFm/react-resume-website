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

const Clients = (props) => {
    const myClientsList = props.state.myClients.map((client) => <Client name={client.name} id={client.id}/>);
    const myTestimonialsList = props.state.myTestimonials.map((testimonial) => <Testimonial message={testimonial.message}/>);

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