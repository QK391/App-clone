import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Container/Header";
import Home from "./Container/Home";
import Cart from "./Container/Cart";
import Detail from "./Container/Detail";
import SearchMenu from "./Container/SearchMenu";
import Footer from "./Container/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:id" component={SearchMenu} />
        <Route exact path="/gio-hang" component={Cart} />
        <Route exact path="/thong-tin-san-pham/:id" component={Detail} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
