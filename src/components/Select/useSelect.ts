import { useMemo, useState } from 'react';
import { SelectProps } from './Select';
import { useOutsideClick } from '../../hooks/useOutSideClick';

export const useSelect = (props: SelectProps) => {
  // state
  const [value, setValue] = useState(props.value);
  const [isOpen, setIsOpen] = useState(false);

  // hooks
  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  // var
  const className = useMemo(() => {
    const names: string[] = ['select--text-field'];

    if (props.disabled) {
      names.push('select--text-field--disabled');
    }

    return names.join(' ');
  }, [props]);

  // handler
  const onChange = (value: string | number) => {
    setValue(value);
    props.onChange && props.onChange(value);

    setIsOpen(false);
  };

  const onClickSelect = () => {
    if (props.disabled) return;

    setIsOpen(prev => !prev);
  };

  return {
    ref,
    value,
    isOpen,
    className,
    onClickSelect,
    onChange,
  };
};
