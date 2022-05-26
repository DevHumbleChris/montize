<script setup></script>

<template>
  <div class="container items-center px-4 py-8 m-auto mt-5">
    <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
      <div class="w-full p-2 lg:w-1/4 md:w-1/2">
        <div
          class="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <div class="flex flex-row justify-between items-center">
            <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
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
          <h1
            class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
          >
            <AutoCounter ref="counter" :startAmount="0" :endAmount="2000" :duration="3" prefix="KSH " separator="," decimalSeparator="." :decimals="0" :autoinit="true" />
          </h1>
          <div class="flex flex-row justify-between group-hover:text-gray-200">
            <p>Monthly Income</p>
          </div>
        </div>
      </div>
      <div class="w-full p-2 lg:w-1/4 md:w-1/2">
        <div
          class="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <div class="flex flex-row justify-between items-center">
            <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
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
          <h1
            class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
          >
            <AutoCounter ref="counter" :startAmount="0" :endAmount="2000" :duration="3" prefix="KSH " separator="," decimalSeparator="." :decimals="0" :autoinit="true" />
          </h1>
          <div class="flex flex-row justify-between group-hover:text-gray-200">
            <p>Total Savings</p>
          </div>
        </div>
      </div>
      <div class="w-full p-2 lg:w-1/4 md:w-1/2">
        <div
          class="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <div class="flex flex-row justify-between items-center">
            <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
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
          <h1
            class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
          >
            <AutoCounter ref="counter" :startAmount="0" :endAmount="2000" :duration="3" prefix="KSH " separator="," decimalSeparator="." :decimals="0" :autoinit="true" />
          </h1>
          <div class="flex flex-row justify-between group-hover:text-gray-200">
            <p>Total Expenses</p>
          </div>
        </div>
      </div>
      <div class="w-full p-2 lg:w-1/4 md:w-1/2">
        <div
          class="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        >
          <div class="flex flex-row justify-between items-center">
            <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
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
          <h1
            class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
          >
            <AutoCounter ref="counter" :startAmount="0" :endAmount="2000" :duration="3" prefix="KSH " separator="," decimalSeparator="." :decimals="0" :autoinit="true" />
          </h1>
          <div class="flex flex-row justify-between group-hover:text-gray-200">
            <p>Total Spent This Year</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
