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

    if (props.bold) names.push('typography-bold');

    if (props.italic) names.push('typography-italic');

    return names.join(' ');
  }, [props]);

  return {
    className,
  };
}
