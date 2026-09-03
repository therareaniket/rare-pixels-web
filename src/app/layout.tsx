import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { useThemeTrigger } from "@/hooks/useThemeTrigger";


export const metadata: Metadata = {
  title: "RarePixels Design | UI UX Design & Development Company",
  description: "RarePixels is a top UI/UX design services company and one of the leading branding agencies in India, delivering visually stunning and user-centric digital experiences. Reshaping the perception through Creative Innovation, Unique Ideation, Design Thinking",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	 
  	return (
		<html lang="en">
      		<body data-theme="white" className="min-h-full flex flex-col">
				<Header />

				{children}

				{/* <Footer /> */}
			</body>
    	</html>
  	);
}
