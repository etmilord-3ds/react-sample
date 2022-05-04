import * as React from 'react';

type ButtonProps = {
  children: string | React.ReactNode;
  onClick: () => {};
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export { Button };
