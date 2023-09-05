import { useCallback, useEffect, useRef } from 'react';

/**
 * @param action 외부 클릭시 실행할 함수
 */
export function useOutsideClick(action: () => void) {
  const ref = useRef<any>(null);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        action();
      }
    },
    [ref, action],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return ref;
}
