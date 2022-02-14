import { CompaniesSection, Header, HeroSection, MoreInfoSection, BlogCard, Button } from './components';
import './styles/App.scss';
import LogoWhite from './images/Logo-white.svg';
import CardImg from './images/card-img.png'

const BLOGS = [
  {
    img: CardImg,
    title: "Blog Title #1",
    text: "Blog excerpt - first lines - for approx two lines"
  },
  {
    img: CardImg,
    title: "Blog Title #1",
    text: "Blog excerpt - first lines - for approx two lines"
  },
  {
    img: CardImg,
    title: "Blog Title #1",
    text: "Blog excerpt - first lines - for approx two lines"
  },
  {
    img: CardImg,
    title: "Blog Title #1",
    text: "Blog excerpt - first lines - for approx two lines"
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MoreInfoSection />
      <CompaniesSection />
      <section className='blogs'>
        <div className='content'>
          {
            BLOGS.map((blog, i) => <BlogCard key={i} {...blog} />)
          }
        </div>
        <div className='button-wrapper'>
          <Button text="Read more" />
        </div>
      </section>
      <footer>
        <img src={LogoWhite} alt="logo" />
        <span className='copy'>All rights reserved &copy;</span>
      </footer>
    </div>
  );
}

export default App;
