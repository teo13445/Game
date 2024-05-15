
import '../style/globals.css';

import React from 'react';
import ProviderWrapper from '@/ui/Auth/ProviderWrapper';
import Providers from './store/provider'
export const metadata = {
  title: {
    default: 'S-market',
    template: '%s | S-market',
  },
  icons: {
    icon: { url: '/favicon.png', type: 'image/png' },
    },
  description: 'My ecommerce'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <ProviderWrapper >
            <Providers>
              {children}    
            </Providers>
        </ProviderWrapper>
      </body>
    </html>
  );
}
