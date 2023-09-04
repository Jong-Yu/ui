import { useEffect, useMemo, useRef, useState } from 'react';
import { TextFieldProps } from './TextField';

export function useTextField(props: TextFieldProps) {
  // state
  const [isFocus, setIsFocus] = useState(false);

  // ref
  const ref = useRef<HTMLInputElement>(null);

  // var
  const className = useMemo(() => {
    const name: string[] = ['text-field'];

    if (props.disabled) {
      name.push('text-field--disabled');
    }

    return name.join(' ');
  }, [props]);

  // handler
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.disabled) return;

    props.onChange && props.onChange(e, e.target.value);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  // useEffect
  useEffect(() => {
    if (props.autoFocus && ref.current !== null) {
      ref.current.focus();
    }
  }, [ref, props.autoFocus]);

  return {
    ref,
    isFocus,
    className,
    onChange,
    onFocus,
    onBlur,
  };
}
