import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Props {
	children: any;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}