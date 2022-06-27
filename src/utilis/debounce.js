let timeout;
export const debounce = (func, wait) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        // console.log("Making api cll")
        func()
      }, wait);
    
  };
