import { useMemo } from 'react';
import { ButtonProps } from './Button';

export function useButton(props: ButtonProps) {
  // var
  const onClick = () => {
    props.onClick && !props.disabled && props.onClick();
  };

  const className = useMemo(() => {
    const names: string[] = ['button'];

    if (props.primary) {
      names.push('button--primary');
    } else {
      names.push('button--secondary');
    }

    if (props.size === 'large') {
      names.push('button--large');
    } else if (props.size === 'small') {
      names.push('button--small');
    }

    if (props.disabled) {
      names.push('button--disabled');
    }

    if (props.fullWidth) {
      names.push('button--full-width');
    }

    return names.join(' ');
  }, [props]);

  return {
    onClick,
    className,
    children: props.children,
  };
}
