const Button = ({ text, onClick }: IProps) => {
  return <button onClick={onClick}>{text}</button>;
};
type IProps = {
  text: string;
  onClick: () => number;
};

export { Button };
