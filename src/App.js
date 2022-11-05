import { Home, Contact, ErrorPage } from "./pages";
import { ScrollToTop } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
			</ScrollToTop>
		</Router>
	);
};

export default App;
