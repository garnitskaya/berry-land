import "./wrapBlock.scss";

type PropsType = {
  title: string;
  children: React.ReactNode;
  cl?: string;
};

const WrapBlock: React.FC<PropsType> = ({ title, children, cl="" }) => {
  return (
    <div className={`wrap-block ${cl}`}>
      <h1 className="wrap-block__title">{title}</h1>
      {children}
    </div>
  );
};

export default WrapBlock;
