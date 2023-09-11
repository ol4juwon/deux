import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Components/HOC/loader";
// import withSuspense from "./Components/HOC/withSuspense";
const Home = lazy(() => import("./Pages/Home"));
const NotFound = lazy(()=> import("./Pages/NotFound"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/details" exact={false} component={NotFound} />
        </Switch>
        </Suspense>

      </Router>
    </Provider>
  );
}

export default App;
