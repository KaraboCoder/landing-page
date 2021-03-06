import '../styles/button.scss';

function Button({ text }) {

    return (
        <button className="button">
            {text}
        </button>
    );
}

export default Button;
