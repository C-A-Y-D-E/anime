import React, { lazy, Suspense, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { Route, Switch } from "react-router-dom";
import { loadUser, userLikes } from "./store/actions/user";
import ProtectedRoute from "./components/ProtectedRoutes";
import VideoPlayer from "./components/VideoPlayer";
import { batch, useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification";
import { Provider } from "react-redux";
import { adminStore } from "./store/index";
import LoadingPage from "./components/LoadingPage";
import ErrorPage from "./pages/ErrorPage";
const Navbar = lazy(() => import("./components/Navbar"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const ForgotPassword = lazy(() => import("./pages/forgotPassword"));
const ResetPassword = lazy(() => import("./pages/resetPassword"));
const Home = lazy(() => import("./pages/Home"));
const AnimePage = lazy(() => import("./pages/Anime/index"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const User = lazy(() => import("./pages/profile"));

const App = () => {
  const user = useSelector((states) => states.user);
  const dispatch = useDispatch();
  useEffect(() => {
    batch(() => {
      dispatch(loadUser());
      dispatch(userLikes());
    });
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <GlobalStyle />
        <Navbar />
        <Notification />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <ProtectedRoute user={user} path="/user" exact component={User} />
          <Route path="/dashboard" exact>
            <Provider store={adminStore}>
              {user.user.role === "admin" ? (
                <Dashboard />
              ) : (
                <ErrorPage status={403} />
              )}
            </Provider>
          </Route>
          <Route path="/forgot-password" exact component={ForgotPassword} />

          <Route path="/reset-password/:id" exact component={ResetPassword} />
          <ProtectedRoute
            user={user}
            path="/view/:id"
            component={AnimePage}
            exact
          />

          <ProtectedRoute
            path="/view/:animeId/:seasonId/:episodeId"
            exact
            component={VideoPlayer}
            user={user}
          />
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
