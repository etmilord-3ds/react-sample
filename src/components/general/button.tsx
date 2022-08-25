import * as React from 'react';

type ButtonProps = {
  children: string | React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  name?: string
};

// This is an example of a simple or atomic component. It's sole responsibility
// is to render a button to the DOM that will have an event when clicked
// By having both it's content and event come in as props, it can be highly reusable
const Button: React.FC<ButtonProps> = ({ children, onClick, disabled= false , name= undefined}) => {
  return <button disabled={disabled} name={name} onClick={onClick}>{children}</button>;
};

export { Button };
