import './bannerBlock.scss';

const BannerBlock = () => {
    return (
        <div className='banner-block'>
            <div className='container'>
                <h1 className='banner-block__title'>Замороженные <br /> ягоды в Израиле</h1>
                <hr className='banner-block__line' />
                <div className='banner-block__descr'>Доставка на дом</div>
            </div>
        </div>
    );
};

export default BannerBlock;