import { useEffect } from 'react';
import spufoLogo from '/assets/images/Curved_FinalSpufoLogo.svg';
import twojoLogo from '/assets/images/twojo_logo_black.png';

export const usePageMeta = (isSpufoPath: boolean) => {
  useEffect(() => {
    // Update title
    document.title = isSpufoPath ? 'SPUFO' : 'Twojo';

    // Update favicon
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!favicon) {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = isSpufoPath ? spufoLogo : twojoLogo;
      document.head.appendChild(newFavicon);
    } else {
      favicon.href = isSpufoPath ? spufoLogo : twojoLogo;
    }

    // Cleanup function
    return () => {
      document.title = 'Twojo'; // Default title
    };
  }, [isSpufoPath]);
};
