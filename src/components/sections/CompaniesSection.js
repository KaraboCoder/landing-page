import '../../styles/companies-section.scss'
import SampleLogo from '../../images/sample-logo.png'

function CompaniesSection() {
    return (
        <section className='companies-section'>
            <img src={SampleLogo} />
            <img src={SampleLogo} />
            <img src={SampleLogo} />
            <img src={SampleLogo} />
            <img src={SampleLogo} />
        </section>
    );
}

export default CompaniesSection;
