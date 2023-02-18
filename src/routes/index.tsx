import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { PATH } from "../constants/paths";
import { MainLayout } from "../pages/layouts/MainLayout";
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

        <MainLayout>
          <Routes>
            <Route path={PATH.LOGIN} element={<LoginPage />} />
            <Route path={PATH.STATS} element={<Statistics />} />
            <Route path={PATH.TRACK} element={<TrackParcel />} />
          </Routes>
        </MainLayout>

      </HelmetProvider>
    </BrowserRouter>
  );
};
