export const metadata = {
  title: 'ADAU | Admin',
  description: 'Adau Admin Panel ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
