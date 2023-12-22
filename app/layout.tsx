import '@styles/globals.css';

export const metadata = {
    title: "ProductWise",
    description: "Jouw bewuste supermarkthulp"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="nl">
        <body className='grow max-h-screen bg-white' >
            <main >
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout