import React, { lazy, Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "../components/Loading";
import { PATH } from "../constants/paths";
import Layout from "../pages/layouts/MainLayout";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { UserContext } from "../userContext";
import PrivateRoute from "./PrivateRoute";

// Pages
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Statistics = lazy(() => import("../pages/StatisticsPage"));
const TrackParcel = lazy(() => import("../pages/TrackParcelPage"));
const Parcel = lazy(() => import("../pages/ParcelPage"));

const helmetContext = {};

export const Router = () => {
  const { user, setUser } = useContext(UserContext);
  const providerValue = { user, setUser };
  return (
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <meta charSet='utf-8' />
          <title>SupplyAlly</title>
          <link rel='canonical' />
        </Helmet>

        <Layout>
          <Suspense fallback={<Loading />}>
            <UserContext.Provider value={providerValue}>
              <Routes>
                <Route path={PATH.LOGIN} element={<LoginPage />} />
                <Route path={PATH.LOGIN} element={<PrivateRoute />}>
                  <Route path={PATH.STATS} element={<Statistics />} />
                  <Route path={PATH.TRACK} element={<TrackParcel />} />
                  <Route path={PATH.PARCEL} element={<Parcel />} />
                </Route>
              </Routes>
            </UserContext.Provider>
          </Suspense>
        </Layout>
      </HelmetProvider>
    </BrowserRouter>
  );
};
