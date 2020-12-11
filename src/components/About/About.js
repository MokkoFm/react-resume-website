import style from './Abouts.module.css'

const About = (props) => {
    return (
        <div className={style.abouts_wrapper}>
            <div className={style.about}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
};

export default About;