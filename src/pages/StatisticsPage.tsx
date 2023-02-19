import React from "react";
import { Statistics } from "../components/Statistics";
import { PageLayout } from "../pages/layouts/PageLayout";

const _StatisticsPage = () => {
  return (
    <div className='flex justify-center flex-col text-center'>
      <h1 className='stat-header font-bold pb-8'> Statistics</h1>
      <div>
        <div className='font-normal text-base'>You tracked</div>
        <div className='font-bold track-number'>211</div>
        <div className='font-normal text-base'>Last tracked at 6:30pm</div>
        <div className='flex justify-center pt-5 pb-5'>
          <img
            className='h-fit w-fit'
            src={require("../assets/Icon/chevron-left.png")}
            alt=''
          />
          <div className='font-bold text-base pl-14 pr-14'>14 Feb 2023</div>
          <img
            className='h-fit w-fit'
            src={require("../assets/Icon/chevron-right.png")}
            alt=''
          />
        </div>
      </div>

      <div className='flex justify-center text-left'>
        <ul className='bg-white rounded-lg border border-gray-200 w-96 text-gray-900 w-2/3'>
          <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg'>
            <div className='grid grid-cols-12'>
              <div className='col-span-6 text-base font-bold'>Tracking ID</div>
              <div className='col-span-6 text-base font-bold'>
                Last Updated Date
              </div>
            </div>
          </li>
          <li className='px-6 py-2 border-b border-gray-200 w-full'>
            <div className='grid grid-cols-12'>
              <div className='col-span-6'>11190738200</div>
              <div className='col-span-6'>12 Feb 2023, 12:23PM</div>
            </div>
          </li>
          <li className='px-6 py-2 border-b border-gray-200 w-full'>
            <div className='grid grid-cols-12'>
              <div className='col-span-6'>11168320300</div>
              <div className='col-span-6'>12 Feb 2023, 12:23PM</div>
            </div>
          </li>
          <li className='px-6 py-2 border-b border-gray-200 w-full'>
            <div className='grid grid-cols-12'>
              <div className='col-span-6'>11189020500</div>
              <div className='col-span-6'>12 Feb 2023, 12:23PM</div>
            </div>
          </li>
          <li className='px-6 py-2 w-full rounded-b-lg'>
            <div className='grid grid-cols-12'>
              <div className='col-span-6'>11191537500</div>
              <div className='col-span-6'>12 Feb 2023, 12:23PM</div>
            </div>
          </li>
          <li className='px-6 py-2 w-full rounded-b-lg'>
            <div className='grid grid-cols-12'>
              <div className='col-span-6'>11152118400</div>
              <div className='col-span-6'>12 Feb 2023, 12:23PM</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const StatisticsPage = React.memo(_StatisticsPage);
export default StatisticsPage;
