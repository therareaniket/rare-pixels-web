import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "RarePixels Design | UI UX Design & Development Company",
  description: "RarePixels is a top UI/UX design services company and one of the leading branding agencies in India, delivering visually stunning and user-centric digital experiences. Reshaping the perception through Creative Innovation, Unique Ideation, Design Thinking",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  	return (
		<html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)} >
      		<body className="min-h-full flex flex-col">
				<ThemeProvider>
					<Header />

					{children}

					<Footer />
				</ThemeProvider>
			</body>
    	</html>
  	);
}
