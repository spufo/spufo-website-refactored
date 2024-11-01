import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import spufoLogo from '/assets/images/Curved_FinalSpufoLogo.svg';
import twojoLogo from '/assets/images/twojo_logo_black.png';

export const usePageMeta = (isSpufoPath: boolean, pathname: string) => {
  const { t } = useTranslation();

  useEffect(() => {
    let title = isSpufoPath ? 'SPUFO' : 'Twojo';

    // Add subpage to title for non-root paths
    if (!isSpufoPath && pathname !== '/') {
      const pageTitles: { [key: string]: string } = {
        '/about': t('about'),
        '/blog': 'Blog',
        '/contact': t('contact'),
        '/impressum': t('impressum.publisher'),
        '/privacy': t('footerPrivacyStatement'),
        '/datenschutz': t('footerPrivacyStatement')
      };

      const subpage = pageTitles[pathname];
      if (subpage) {
        title = `Twojo - ${subpage}`;
      }
    }

    // Update title
    document.title = title;

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
  }, [isSpufoPath, pathname, t]);
};
