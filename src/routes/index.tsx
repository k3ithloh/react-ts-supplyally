import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "../components/Loading";
import { PATH } from "../constants/paths";
import Layout from "../pages/layouts/MainLayout";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Pages
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Statistics = lazy(() => import("../pages/StatisticsPage"));
const TrackParcel = lazy(() => import("../pages/TrackParcelPage"));

const helmetContext = {};

export const Router = () => {
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
            <Routes>
              <Route path={PATH.LOGIN} element={<LoginPage />} />
              <Route path={PATH.STATS} element={<Statistics />} />
              <Route path={PATH.TRACK} element={<TrackParcel />} />
            </Routes>
          </Suspense>
        </Layout>
      </HelmetProvider>
    </BrowserRouter>
  );
};
