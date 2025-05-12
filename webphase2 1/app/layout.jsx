
import "./globals.css"
import UserInfoProvider from "./api/components/userInfoProvider"



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