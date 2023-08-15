import './globals.css'

export const metadata = {
  title: 'HP Character Library',
  description: 'Harry Potter Characters Library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
        {children}
        </main>
        </body>

    </html>
  )
}
