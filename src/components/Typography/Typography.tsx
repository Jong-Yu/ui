import { useTypography } from './useTypography';

export interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
  children: React.ReactNode;
  style?: React.CSSProperties;
  align?: 'left' | 'center' | 'right';
}

export const Typography = (props: TypographyProps) => {
  //
  const { className } = useTypography(props);

  return (
    <>
      {props.variant === 'h1' && (
        <h1 className={className}>{props.children}</h1>
      )}
      {props.variant === 'h2' && (
        <h2 className={className}>{props.children}</h2>
      )}
      {props.variant === 'h3' && (
        <h3 className={className}>{props.children}</h3>
      )}
      {props.variant === 'h4' && (
        <h4 className={className}>{props.children}</h4>
      )}
      {props.variant === 'h5' && (
        <h5 className={className}>{props.children}</h5>
      )}
      {props.variant === 'h6' && (
        <h6 className={className}>{props.children}</h6>
      )}
      {props.variant === 'body' && (
        <span className={className}>{props.children}</span>
      )}
    </>
  );
};
