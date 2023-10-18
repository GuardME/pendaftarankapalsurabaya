import './globals.css'
import Theming from '../../theme/theming'
import Footer from "@/app/Footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Theming>
          {children}
        </Theming>
      </body>
    </html>
  )
}