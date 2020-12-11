import style from './Clients.module.css'
const NavLink = require("react-router-dom").NavLink;

let Client = (props) =>{

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

const Clients = () => {
    return (
        <div className={style.clients}>
            <div>
                <Client name="IboxCorp" id="1"/>
                <Client name="Helios Tour" id="2"/>
                <Client name="Formula Spa" id="3"/>
            </div>
            <div>
                <Testimonial message="It was cool to work with Sergei!"/>
                <Testimonial message="Amazing developer!"/>
                <Testimonial message="Thank you, Sergei!"/>
            </div>
        </div>
    )
};

export default Clients;