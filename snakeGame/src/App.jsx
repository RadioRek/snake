import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Snake from "./pages/Snake";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/snake" element={<Snake />} />
			<Route path="*" element={<h1>404</h1>} />
		</Routes>
	);
}

export default App;
