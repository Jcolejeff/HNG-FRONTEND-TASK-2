import { Home, Contact, ErrorPage } from "./pages";
import { Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
