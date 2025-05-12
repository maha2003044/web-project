
import "./globals.css"
import UserInfoProvider from "/Users/naghamalajmi/Desktop/webphase2 1/app/api/components/userInfoProvider.jsx"

export const metadata = {
  title: "Next-Auth Demo",
  description: "Example to demonstrate Next-Auth features",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserInfoProvider>
      
          {children}
        </UserInfoProvider>
      </body>
    </html>
  )
}