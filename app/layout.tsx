import "@styles/globals.css";
import NavigationBar from "@components/nav/NavigationBar";

export const metadata = {
  title: "ProductWise",
  description: "Jouw bewuste supermarkthulp",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="nl">
      <body className="grow max-h-screen bg-white">
        <main>
          <NavigationBar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
