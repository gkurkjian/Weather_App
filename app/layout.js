
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Weather App',
  description: 'Get current weather updates by city',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
