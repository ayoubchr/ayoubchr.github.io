import './legacy.css';
import './quiz.css';

export const metadata = {
  title: 'Tabieb2be · KIW leerpaden',
  description: 'Tabieb2be: interactieve leerpaden en echte examenvragen voor het toelatingsexamen arts, tandarts en dierenarts.',
};

export const viewport = { themeColor: '#f4f6ff' };

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
