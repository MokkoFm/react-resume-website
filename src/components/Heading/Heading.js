import style from './Heading.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Heading = () => {
    return (
        <section id="home" class={style.home_banner}>
            <div class="container">
                <div class="row align-items-lg-center">
                    <div class="col-lg-7">

                        <div class={style.heading_box}>
                            <h2>Elsakov Sergei <span class={style.main_color}>Developer</span></h2>
                            <p>There are many variations of passages of Lorem Ipsum is at the available,
                                but the majority have <span class={style.main_color}>suffered</span> alteration some form,
                                by injected humour randomised words at the available.</p>
                            <a href="javascript:void(0);" class="btn btn-large btn-rounded btn-transparent-black mt-2">Learn More</a>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class={style.slider_right}>
                            <img  data-depth="0.05" src="https://sun9-19.userapi.com/impf/c851236/v851236774/2721f/o-xyAz2am_c.jpg?size=1440x2160&quality=96&proxy=1&sign=f40e3cd7c4e180bbd5d3e36515d92070&type=album" alt="side-image" class="scene"/>
                            <span data-depth="0.08" class="scene"></span>
                        </div>
                    </div>
                </div>
            </div>

            <span class="shape-square"></span>
            <span class="shape-triangle"></span>
            <span class="shape-plus"></span>
            <span class="shape-circle"></span>
        </section>
    )
};

export default Heading;