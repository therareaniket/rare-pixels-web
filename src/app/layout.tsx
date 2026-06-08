import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RarePixels Design | UI UX Design & Development Company",
  description: "RarePixels is a top UI/UX design services company and one of the leading branding agencies in India, delivering visually stunning and user-centric digital experiences. Reshaping the perception through Creative Innovation, Unique Ideation, Design Thinking",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  	return (
		<html lang="en" className="h-full antialiased" >
      		<body className="min-h-full flex flex-col">
				{children}
			</body>
    	</html>
  	);
}
