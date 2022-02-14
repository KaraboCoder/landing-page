import '../../styles/hero-section.scss'
import HeroImg from '../../images/hero-image1.png'

function HeroSection() {
    return (
        <section className='hero-section'>
            <div className='text-content'>
                <h1>Start new... Today!</h1>
                <p>Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum</p>
            </div>
            <div className='hero-image'>
                <img alt='hero' src={HeroImg} />
            </div>
        </section>
    );
}

export default HeroSection;
