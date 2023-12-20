import '@styles/globals.css';

export const metadata = {
    title: "ProductWise",
    description: "Jouw bewuste supermarkthulp"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="nl">
        <body>
            <div>
                <div className='bg-blue'/>
            </div>
            <main className='grow'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout