import React from "react";
import { Login } from "../components/Login";
import { PageLayout } from "../pages/layouts/PageLayout";

const _LoginPage = () => {
  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;
