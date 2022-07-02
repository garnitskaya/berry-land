import classNames from 'classnames';
import './btton.scss';

interface IButton{
    children:React.ReactNode;
    onClick?: () => void;
    type?:string
}

const Button:React.FC<IButton> = ({ children, onClick, type }) => {
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