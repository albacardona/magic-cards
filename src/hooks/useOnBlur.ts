import { useEffect, type RefObject } from 'react';

export const useOnBlur = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: MouseEvent | TouchEvent) => void,
): void => {
  useEffect(() => {
    const handleClickOnBlur = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('mousedown', handleClickOnBlur);
    document.addEventListener('touchstart', handleClickOnBlur);

    return () => {
      document.removeEventListener('mousedown', handleClickOnBlur);
      document.removeEventListener('touchstart', handleClickOnBlur);
    };
  }, [ref, callback]);
};
