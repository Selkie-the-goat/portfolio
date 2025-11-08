import { Inter, JetBrains_Mono } from 'next/font/google';
import './styles.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: 'Neekson Shrestha | Student & Developer',
  description: 'Personal portfolio of Neekson Shrestha - Student and aspiring developer from Nepal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
}
