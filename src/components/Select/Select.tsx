import { useSelect } from './useSelect';
import './Select.css';

export interface SelectProps {
  value?: string | number;
  options: (string | number)[];
  label?: string;
  disabled?: boolean;
  onChange?: (value: string | number) => void;
}

export const Select = (props: SelectProps) => {
  // hooks
  const { ref, value, isOpen, className, onClickSelect, onChange } =
    useSelect(props);

  return (
    <div className="select--container" ref={ref}>
      {props.label && (
        <span className={`select--label${isOpen ? ' select--opened' : ''}`}>
          {props.label}
        </span>
      )}
      <div className={className} onClick={onClickSelect}>
        {value}
      </div>
      <div className={`select--underline${isOpen ? ' select--opened' : ''}`} />
      <div
        className={`select--options-container${
          isOpen ? ' select--opened' : ''
        }`}
      >
        <ul>
          {isOpen &&
            props.options?.map(option => (
              <li
                className={`select--options${
                  value === option ? ' selected' : ''
                }`}
                key={option}
                onClick={() => onChange(option)}
              >
                {option}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
