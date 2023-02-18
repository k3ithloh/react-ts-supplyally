import React from "react";
import { Statistics } from "../components/Statistics";
import { PageLayout } from "../pages/layouts/PageLayout";

const _StatisticsPage = () => {
  return (
    <PageLayout>
      <Statistics />
    </PageLayout>
  );
};

const StatisticsPage = React.memo(_StatisticsPage);
export default StatisticsPage;
