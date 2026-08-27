import './globals.css';

export const metadata = {
  title: 'CEO Access Marketing Tracker',
  description: 'Monthly marketing dashboard for CEO Access',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
