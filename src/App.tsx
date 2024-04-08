import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
	return (
		<div className="min-h-screen flex flex-col justify-between">
			<Header />
			<main>
				<h1>Просто написал ради коммита</h1>
				<p>здесь что-то будет но потом</p>
				<p>здесь что-то будет но потом</p>
			</main>
			<Footer />
		</div>
	);
}

export default App;
