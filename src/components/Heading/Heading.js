import style from './Heading.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Heading = () => {
    return (
        <section id="home" className={style.home_banner}>
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-lg-7">

                        <div className={style.heading_box}>
                            <h2>Elsakov Sergei <span className={style.main_color + ' ' + style.small_font}>Web-Developer</span></h2>
                            <p>There are many variations of passages of Lorem Ipsum is at the available,
                                but the majority have <span className={style.main_color}>suffered</span> alteration some form,
                                by injected humour randomised words at the available.</p>
                            <a href="javascript:void(0);" className="btn btn-large btn-rounded btn-transparent-black mt-2">Learn More</a>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className={style.slider_right}>
                            <img  data-depth="0.05" src="https://sun9-19.userapi.com/impf/c851236/v851236774/2721f/o-xyAz2am_c.jpg?size=1440x2160&quality=96&proxy=1&sign=f40e3cd7c4e180bbd5d3e36515d92070&type=album" alt="side-image" class="scene"/>
                            <span data-depth="0.08" className="scene"></span>
                        </div>
                    </div>
                </div>
            </div>

            <span className="shape-square"></span>
            <span className="shape-triangle"></span>
            <span className="shape-plus"></span>
            <span className="shape-circle"></span>
        </section>
    )
};

export default Heading;