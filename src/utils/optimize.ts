export const debounce = <T>(func: T, wait: number, immediate: boolean) => {
  let timeout: any = null;
  return (...args: IArguments[]) => {
    const later = () => {
      timeout = null;
      // func.apply(null, args)
      if (!immediate) typeof func === 'function' && func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) typeof func === 'function' && func(...args);
  };
};
