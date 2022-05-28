<script setup>
import { ref } from "vue";
const series = ref([
  {
    name: "TrialApexCharts",
    data: [30, 40, 60],
  },
]);

const options = ref({
  chart: {
    id: "trial-apex",
    width: "100%",
    height: 100,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      show: false,
    },
  },
  xaxis: {
    categories: ["April", "May", "June"],
  },
  yaxis: {
    show: false,
  },
});
</script>

<template>
  <div class="container items-center px-4 py-8 m-auto mt-5">
    <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
      <div class="w-full p-2 lg:w-1/4 md:w-1/2">
        <div
          class="flex flex-col px-6 py-4 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <div class="flex flex-row justify-between items-center">
            <div class="px-4 py-2 bg-gray-300 rounded-xl bg-opacity-30">
              <img src="../assets/profits.png" class="w-12" />
            </div>
            <div
              class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              12%
            </div>
          </div>
          <apexchart type="area" :series="series" :options="options" class="max-w-xs" />
          <h1
            class="text-2xl sm:text-2xl xl:text-2xl font-bold text-gray-700 mt-4 group-hover:text-gray-50"
          >
            <AutoCounter
              ref="counter"
              :startAmount="0"
              :endAmount="2000"
              :duration="5"
              prefix="KSH "
              separator=","
              decimalSeparator="."
              :decimals="0"
              :autoinit="true"
            />
          </h1>
          <div class="flex flex-row justify-between group-hover:text-gray-200">
            <p>Monthly Income</p>
          </div>
        </div>
      </div>
      <div class="w-full p-2 lg:w-1/4 md:w-1/2">
        <div
          class="flex flex-col px-6 py-4 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <div class="flex flex-row justify-between items-center">
            <div class="px-4 py-2 bg-gray-300 rounded-xl bg-opacity-30">
              <img src="../assets/piggy-bank.png" class="w-12" />
            </div>
            <div
              class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              12%
            </div>
          </div>
          <apexchart type="area" :series="series" :options="options" class="max-w-xs" />
          <h1
            class="text-2xl sm:text-2xl xl:text-2xl font-bold text-gray-700 mt-4 group-hover:text-gray-50"
          >
            <AutoCounter
              ref="counter"
              :startAmount="0"
              :endAmount="2000"
              :duration="5"
              prefix="KSH "
              separator=","
              decimalSeparator="."
              :decimals="0"
              :autoinit="true"
            />
          </h1>
          <div class="flex flex-row justify-between group-hover:text-gray-200">
            <p>Total Savings</p>
          </div>
        </div>
      </div>
      <div class="w-full p-2 lg:w-1/4 md:w-1/2">
        <div
          class="flex flex-col px-6 py-4 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <div class="flex flex-row justify-between items-center">
            <div class="px-4 py-2 bg-gray-300 rounded-xl bg-opacity-30">
              <img src="../assets/budget.png" class="w-12" />
            </div>
            <div
              class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              12%
            </div>
          </div>
          <apexchart type="area" :series="series" :options="options" class="max-w-xs" />
          <h1
            class="text-2xl sm:text-2xl xl:text-2xl font-bold text-gray-700 mt-4 group-hover:text-gray-50"
          >
            <AutoCounter
              ref="counter"
              :startAmount="0"
              :endAmount="2000"
              :duration="5"
              prefix="KSH "
              separator=","
              decimalSeparator="."
              :decimals="0"
              :autoinit="true"
            />
          </h1>
          <div class="flex flex-row justify-between group-hover:text-gray-200">
            <p>Total Expenses</p>
          </div>
        </div>
      </div>
      <div class="w-full p-2 lg:w-1/4 md:w-1/2">
        <div
          class="flex flex-col px-6 py-4 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <div class="flex flex-row justify-between items-center">
            <div class="px-4 py-2 bg-gray-300 rounded-xl bg-opacity-30">
              <img src="../assets/cash.png" class="w-12" />
            </div>
            <div
              class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              12%
            </div>
          </div>
          <apexchart type="area" :series="series" :options="options" class="max-w-xs" />
          <h1
            class="text-2xl sm:text-2xl xl:text-2xl font-bold text-gray-700 mt-4 group-hover:text-gray-50"
          >
            <AutoCounter
              ref="counter"
              :startAmount="0"
              :endAmount="2000"
              :duration="5"
              prefix="KSH "
              separator=","
              decimalSeparator="."
              :decimals="0"
              :autoinit="true"
            />
          </h1>
          <div class="flex flex-row justify-between group-hover:text-gray-200">
            <p>Total Spent This Year</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-5">
        <div
          class="col-span-12 xl:col-span-8 md:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard>
            <h4 class="card-title mb-4">Savings Breakdown (Current Year).</h4>
            <!-- <apexchart
                        type="bar"
                        height="255"
                        :options="dashboardOne.chartOptions"
                        :series="dashboardOne.series"
                    ></apexchart> -->
          </BaseCard>
        </div>
        <div
          class="col-span-12 xl:col-span-4 md:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard>
            <h4 class="card-title mb-4">Savings Breakdown (Current Month).</h4>
            <!-- <apexchart
                        type="pie"
                        height="290"
                        :options="dashboardTwo.chartOptions"
                        :series="dashboardTwo.series"
                    ></apexchart> -->
          </BaseCard>
        </div>
        <div
          class="col-span-12 xl:col-span-6 lg:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard>
            <div class="card-title mb-4">Expenses Breakdown (Bar)</div>

            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
          </BaseCard>
        </div>
        <div
          class="col-span-12 xl:col-span-6 lg:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard>
            <div class="card-title mb-4">Category Breakdown (Bar)</div>

            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
          </BaseCard>
        </div>
        <div
          class="col-span-12 xl:col-span-6 lg:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard>
            <div class="card-title mb-4">Expenses Breakdown (Table)</div>

            <div class="block w-full overflow-x-auto whitespace-nowrap borderless hover">
              <div class="dataTable-wrapper dataTable-loading no-footer fixed-columns">
                <div
                  class="dataTable-container block w-full overflow-x-auto whitespace-nowrap borderless hover"
                >
                  <table class="table-3 dataTable-table max-w-full w-full">
                    <thead>
                      <tr class="">
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Order Id
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Buyer Name
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Product
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Status
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Shipping Cost
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Date
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="hover:bg-gray-100 cursor-pointer"
                        v-for="(n, index) in 8"
                        :key="index"
                      >
                        <td class="text-xs py-5 px-4">
                          {{ index + 1 }}
                        </td>

                        <td class="text-xs">Jhon {{ index + 1 }}</td>
                        <td class="py-5">
                          <div class="flex">
                            <img
                              class="w-9 h-9 rounded-full mr-2"
                              src="/images/products/speaker-1.jpg"
                              alt=""
                            />
                            <img
                              class="w-9 h-9 rounded-full mr-2"
                              src="/images/products/headphone-1.jpg"
                              alt=""
                            />
                          </div>
                        </td>
                        <td class="py-5">
                          <span
                            class="px-3 py-1 rounded-full text-primary border border-primary mr-3 text-xs"
                            >Delivered</span
                          >
                        </td>
                        <td class="py-5">{{ 3.34 * index + 1 }}%</td>
                        <td class="py-5">12-02-20</td>
                        <td class="py-5">
                          <BaseBtn
                            rounded
                            class="border border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            View
                          </BaseBtn>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="dataTable-bottom">
                  <div class="dataTable-info">Showing 1 to 8 of 8 entries</div>
                  <nav class="dataTable-pagination">
                    <ul class="dataTable-pagination-list"></ul>
                  </nav>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
        <div
          class="col-span-12 xl:col-span-6 lg:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard>
            <div class="card-title mb-4">Category Breakdown (Table)</div>

            <div class="block w-full overflow-x-auto whitespace-nowrap borderless hover">
              <div class="dataTable-wrapper dataTable-loading no-footer fixed-columns">
                <div
                  class="dataTable-container block w-full overflow-x-auto whitespace-nowrap borderless hover"
                >
                  <table class="table-3 dataTable-table max-w-full w-full">
                    <thead>
                      <tr class="">
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Order Id
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Buyer Name
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Product
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Status
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Shipping Cost
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Date
                        </th>
                        <th
                          class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="hover:bg-gray-100 cursor-pointer"
                        v-for="(n, index) in 8"
                        :key="index"
                      >
                        <td class="text-xs py-5 px-4">
                          {{ index + 1 }}
                        </td>

                        <td class="text-xs">Jhon {{ index + 1 }}</td>
                        <td class="py-5">
                          <div class="flex">
                            <img
                              class="w-9 h-9 rounded-full mr-2"
                              src="/images/products/speaker-1.jpg"
                              alt=""
                            />
                            <img
                              class="w-9 h-9 rounded-full mr-2"
                              src="/images/products/headphone-1.jpg"
                              alt=""
                            />
                          </div>
                        </td>
                        <td class="py-5">
                          <span
                            class="px-3 py-1 rounded-full text-primary border border-primary mr-3 text-xs"
                            >Delivered</span
                          >
                        </td>
                        <td class="py-5">{{ 3.34 * index + 1 }}%</td>
                        <td class="py-5">12-02-20</td>
                        <td class="py-5">
                          <BaseBtn
                            rounded
                            class="border border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            View
                          </BaseBtn>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="dataTable-bottom">
                  <div class="dataTable-info">Showing 1 to 8 of 8 entries</div>
                  <nav class="dataTable-pagination">
                    <ul class="dataTable-pagination-list"></ul>
                  </nav>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
        <div
          class="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard noPadding class="overflow-hidden">
            <div class="p-5">
              <div class="text-gray-500">Last Month Sales</div>
              <p class="text-primary text-2xl m-0">$40250</p>
            </div>
            <div id="basicArea-chart">
              <!-- <apexchart
                            type="area"
                            height="270"
                            :options="splineAreaWidgetTwo.chartOptions"
                            :series="splineAreaWidgetTwo.series"
                        /> -->
            </div>
          </BaseCard>
        </div>

        <div
          class="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard noPadding class="overflow-hidden">
            <div class="p-5">
              <div class="text-gray-500">Last Week Sales</div>
              <p class="text-warning text-2xl m-0">$10250</p>
            </div>
            <div id="basicArea-chart">
              <!-- <apexchart
                            type="area"
                            height="270"
                            :options="splineAreaWidgetThree.chartOptions"
                            :series="splineAreaWidgetThree.series"
                        /> -->
            </div>
          </BaseCard>
        </div>

        <div
          class="col-span-12 xl:col-span-6 lg:col-span-6 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <BaseCard>
            <div class="card-title mb-4">Top Selling Products</div>

            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    Wireless Headphone E23
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">$450</p>
                  <p class="text-gray-400 line-through text-sm mr-2">$500</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="border border-primary text-primary rounded-full hover:bg-primary hover:text-white"
                >View Details</BaseBtn
              >
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
