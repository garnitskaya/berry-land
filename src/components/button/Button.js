import classNames from 'classnames';
import './btton.scss';

const Button = ({ children, onClick, type }) => {
    const btnClass = classNames({
        'btn': true,
        'btn__white': type === 'white',
        'btn__green': type === 'green',
    });

    return (
        <button
            onClick={onClick}
            className={btnClass}>
            {children}
        </button>
    );
};

export default Button;