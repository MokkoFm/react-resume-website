import style from './Services.module.css'

const Service = (props) => {
    return (
        <div className={style.services_wrapper}>
            <div className={style.service}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
};

export default Service;