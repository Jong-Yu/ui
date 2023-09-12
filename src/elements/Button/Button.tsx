import { CSSProperties } from 'react';
import { useButton } from './useButton';
import './button.css';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}

export const Button = (props: ButtonProps) => {
  // hooks
  const { className, onClick } = useButton(props);

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};
