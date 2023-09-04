import './button.css';
import { useButton } from './useButton';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  // hooks
  const { className, children, onClick } = useButton(props);

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};
