import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer_wrapper}>
            <ul class={style.social_links}>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
            <div className={style.copyright}>
                <p>2020. Sergei Elsakov</p>
            </div>
        </div>
    )
};

export default Footer;