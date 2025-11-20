import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * * This component is placed inside the main Router setup and monitors 
 * changes to the route (location). Every time the route changes, 
 * it forces the window to scroll to the top of the page.
 */
function ScrollToTop() {
    // Get the current location object from react-router-dom
    const { pathname } = useLocation();

    useEffect(() => {
        // When the pathname changes (i.e., navigation occurs),
        // scroll the window to the top (0, 0) coordinates.
        window.scrollTo(0, 0);
    }, [pathname]); // Rerun this effect whenever the pathname changes

    // This component doesn't render anything visible
    return null;
}

export default ScrollToTop;