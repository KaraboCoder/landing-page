import '../styles/blog-card.scss';

function BlogCard({ img, title, text }) {

    return (
        <div className="blog-card">
            <img alt='card-image' src={img} />
            <p className='title'>{title}</p>
            <p className='text'>{text}</p>
        </div>
    );
}

export default BlogCard;
