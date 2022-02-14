import '../../styles/more-info-section.scss'
import HeroImg from '../../images/hero-image2.png'

function MoreInfoSection() {
    return (
        <section className='more-info-section'>
            <h2>Lorem ipsum something</h2>
            <div className='content-wrapper'>
                <div className='hero-image'>
                    <img alt='hero' src={HeroImg} />
                </div>
                <div className='text-content'>
                    <h3>New Product, new Story</h3>
                    <p>Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus facilisis ipsum sit amet molestie. Proin lobortis eros a turpis tempor, sed ornare augue aliquam. Donec imperdiet nulla ut placerat molestie. In hendrerit blandit ante facilisis ultrices. Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.</p>
                </div>
            </div>
        </section>
    );
}

export default MoreInfoSection;
