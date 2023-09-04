import { useMemo } from 'react';
import { ButtonProps } from './Button';

export function useButton(props: ButtonProps) {
  // var
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

    return names.join(' ');
  }, [props]);
  // handler
  const onClick = () => {
    if (props.disabled) return;
    props.onClick && props.onClick();
  };

  return {
    className,
    onClick,
  };
}
