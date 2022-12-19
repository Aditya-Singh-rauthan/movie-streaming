import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Screens/Home";
import Header from "./Screens/Components/Header";
import Footer from "./Screens/Components/Footer";
import MoviesAndSeries from "./Screens/Components/Movies";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Navigate to={"/home"} />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/loading"
            element={<PageForLoadingAndError label={"Loading..."} />}
          />
          <Route exact path="/movie" element={<MoviesAndSeries />} />
          <Route exact path="/series" element={<MoviesAndSeries />} />
          <Route
            exact
            path="/*"
            element={
              <PageForLoadingAndError label={"Oops Something went wrong..."} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

export const PageForLoadingAndError = ({ label }) => (
  <div
    style={{
      minHeight: "40vh",
      padding: 20,
      paddingLeft: 100,
      paddingRight: 100,
      marginBottom: 20,
    }}
  >
    {label}
  </div>
);
