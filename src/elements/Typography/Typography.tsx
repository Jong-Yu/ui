import { useTypography } from './useTypography';
import './Typography.css';

export interface TypographyProps {
  variant: 'title' | 'contents' | 'caption';
  children: React.ReactNode;
  bold?: boolean;
  italic?: boolean;
  style?: React.CSSProperties;
}

export const Typography = (props: TypographyProps) => {
  //
  const { className } = useTypography(props);

  return (
    <>
      {props.variant === 'title' && (
        <h1 className={className}>{props.children}</h1>
      )}
      {props.variant === 'contents' && (
        <span className={className}>{props.children}</span>
      )}
      {props.variant === 'caption' && (
        <span className={className}>{props.children}</span>
      )}
    </>
  );
};
