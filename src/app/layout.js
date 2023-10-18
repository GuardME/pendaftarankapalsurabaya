import './globals.css'
import Theming from '../../theme/theming'

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