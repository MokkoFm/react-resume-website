import style from './Services.module.css'
import Service from './Service'

const Services = () => {
    return (
        <div className={style.services_wrapper}>
            <Service title="Frontend" description="HTML, CSS, Javascript, React" />
            <Service title="Backend" description="Python, Django, API, Amazon Web Services" />
            <Service title="SQL" description="MySQL, PostgreSQL, Mongo DB" />
        </div>
    )
};

export default Services;