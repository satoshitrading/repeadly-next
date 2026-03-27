import './globals.css';
import { ReactNode } from "react";
import ClientLayout from './client-layout';

export const metadata = {
  title: "Repeadly — Customer Loyalty & Rewards Program for Small Businesses",
  description: "Repeadly is the simplest customer loyalty and rewards platform for small businesses.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}