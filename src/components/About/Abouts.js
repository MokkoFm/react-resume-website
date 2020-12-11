import style from './Abouts.module.css'
import About from './About'

const Abouts = () => {
    return (
        <div className={style.abouts_wrapper}>
            <About title="About me" description="I am developing for 3 yers" />
            <About title="About GitHub" description="You can find my code here" />
            <About title="About my family" description="I love my wife, our 3 cats and disabled dog" />
        </div>
    )
};

export default Abouts;