import { useMemo } from 'react';
import { TypographyProps } from './Typography';

export function useTypography(props: TypographyProps) {
  // var
  const className = useMemo(() => {
    const names = ['typography'];

    if (props.variant) {
      names.push(`typography-${props.variant}`);
    } else {
      names.push('typography-body');
    }

    if (props.align) {
      names.push(`typography-align-${props.align}`);
    }

    return names.join(' ');
  }, [props]);

  return {
    className,
  };
}
