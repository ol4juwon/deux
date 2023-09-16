import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Loader from "./Components/HOC/loader";
import Details from "./Pages/Details";
import withSuspense from "./Components/HOC/withSuspense";
import SearchPage from "./Pages/Search";
// import withSuspense from "./Components/HOC/withSuspense";
const Home = lazy(() => import("./Pages/Home"));
const NotFound = lazy(()=> import("./Pages/NotFound"));

function App() {
  
  const paths = window.location.pathname;
  const routes =[
    {
      path: "/404",
      element: <NotFound />,
      // exact: true,
    },
    {path: "/",
    element: <Home /> 
    },
    {
      path: "/movies",
      element: <Details />
    }
  ];
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader/>}>
        <Switch>
      <Route path="/" exact={true} component={() => <Home />} />
      <Route path="/movies/:id" exact={true} component={(e) => <Details  data={e}/>} />
      <Route path="/search/:query" exact={true} component={(e) => <SearchPage  data={e}/>} />

          {/* {paths === "/" ? (
        <Redirect to={<Home />} />
      ) : (
        <Redirect to={<NotFound />} />
      )} */}
        </Switch>
        </Suspense>

      </Router>
    </Provider>
  );
}

export default App;


