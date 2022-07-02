import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="footer__wrap">
                    <div className='footer__items'>
                        <div className='footer__title'>ДЛЯ КЛИЕНТОВ</div>
                        <a className='footer__item' href="#">Доставка и города</a>
                        <a className='footer__item' href="#">Доставка и города</a>
                    </div>
                    <div className='footer__items'>
                        <div className='footer__title'>О ПРОДУКЦИИ</div>
                        <a className='footer__item' href="#">Фото продукции</a>
                        <a className='footer__item' href="#">Вопросы и ответы</a>
                    </div>
                    <div className='footer__items'>
                        <div className='footer__title'>КОНТАКТЫ</div>
                        <a className='footer__item' href="mailto:info@berryland.co.il">info@berryland.co.il</a>
                        <a className='footer__item' href="tel:0559116577">055-9116577</a>
                    </div>
                    <div className='footer__items'>
                        <div className='footer__title'>ЧАСЫ РАБОТЫ</div>
                        <div className='footer__item'>вс – чт 10:00  – 18:00</div>
                        <div className='footer__item'>пт 10:00  – 13:00</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;