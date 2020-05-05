/*------------------------------------------------------
 * HOOK: useWindowSize
 *------------------------------------------------------
 *
 * How to use:
 *
 * Import the hook:
 *      import useWindowSize from '../hooks/useWindowSize'
 *
 * Before the return within the component:
 *      const windowSize = useWindowSize()
 *      console.log(windowSize)
 *----------------------------------------------------*/

/* Vendor imports */
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  /**
   * Check if the client has a window object
   */
  const isBrowser = typeof window !== 'undefined';

  /**
   * Get the window width and height
   */
  function getSize() {
    return {
      width: isBrowser ? window.innerWidth : undefined,
      height: isBrowser ? window.innerHeight : undefined,
    };
  }

  /**
   * Set the window width and height
   */
  const [windowSize, setWindowSize] = useState(getSize);

  /**
   * Update the width and height onResize
   */
  useEffect(() => {
    if (!isBrowser) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove listener on unmount
      window.removeEventListener('resize', handleResize);
    };
  }); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useWindowSize;
