import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Buy me mo:mo - Fund your projects with mo:mo",
  description: "A fun way to fund your projects with mo:mo! Share your ideas, and let others support your creativity one mo:mo at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen h-full w-full bg-slate-950 text-white"><div className="min-h-screen bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
            {children}
          </div></div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
