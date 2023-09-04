import { CSSProperties } from 'react';
import { useTextField } from './useTextField';
import './textField.css';

export interface TextFieldProps {
  value?: string;
  disabled?: boolean;
  style?: CSSProperties | undefined;
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: string) => void;
}

export const TextField = (props: TextFieldProps) => {
  // hooks
  const { ref, isFocus, className, onChange, onFocus, onBlur } =
    useTextField(props);

  return (
    <div className="text-field--container">
      <input
        ref={ref}
        value={props.value}
        className={className}
        disabled={props.disabled}
        style={props.style}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div
        className={`text-field--underline${
          isFocus ? ' text-field--focused' : ''
        }`}
      />
    </div>
  );
};
