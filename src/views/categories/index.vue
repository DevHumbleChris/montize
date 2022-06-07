<script setup>
import { ref } from "vue";
import Modal from "../../components/Modal.vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = !showModal.value;
  console.log(showModal.value);
};

const show = ref(null);

const categoryData = ref({
  name: "",
  monthlyBudget: "",
  color: "",
});

const handleSubmit = () => {
  console.log(categoryData.value);
};

const cancelSubmit = () => {
  openModal();
  categoryData.value = {
    name: "",
    monthlyBudget: "",
    color: "",
  };
};
</script>

<template>
  <section class="flex items-center justify-center py-8 px-2">
    <div>
      <div
        v-if="showModal"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        tabindex="-1"
        aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div
              class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
            >
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                New Category
              </h3>
              <button
                type="button"
                @click="openModal"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <form @submit.prevent="handleSubmit">
              <div class="p-6 space-y-6">
                <div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      v-model="categoryData.name"
                      type="text"
                      name="categoryName"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      for="categoryName"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >Category Name</label
                    >
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      v-model="categoryData.monthlyBudget"
                      type="text"
                      name="monthlyBudget"
                      id="monthlyBudget"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      for="monthlyBudget"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >Monthly Budget</label
                    >
                  </div>
                  <div class="relative z-0 w-1/2 mb-6 group">
                    <div class="mb-6">
                      <p
                        class="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                      >
                        Select Color
                      </p>
                      <div class="flex my-2">
                        <label
                          for="categoryColor"
                          :class="`w-10 h-10 bg-[${categoryData.color}] rounded-xl mr-3`"
                        ></label>
                        <input
                          v-model="categoryData.color"
                          type="color"
                          class="w-12 h-12 rounded-full p-2 mr-4"
                          id="categoryColor"
                          hidden
                        />
                        <input
                          type="text"
                          name="categoryColor"
                          disabled
                          class="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          :value="categoryData.color ? categoryData.color : '#003d5b'"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
              >
                <button
                  data-modal-toggle="defaultModal"
                  type="submit"
                  class="text-white w-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
                <button
                  @click="cancelSubmit"
                  type="button"
                  class="text-gray-500 w-1/2 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:px-6">
      <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div class="sm:flex items-center justify-between">
          <p
            tabindex="0"
            class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            Categories
          </p>
          <div>
            <button
              @click="openModal"
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p class="text-sm font-medium leading-none text-white">New Category</p>
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr
              tabindex="0"
              class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800"
            >
              <th class="font-normal text-left pl-4">Category</th>
              <th class="font-normal text-left pl-12">Monthly Budget</th>
              <th class="font-normal text-left pl-20">Color</th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr
              tabindex="0"
              class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-pink-300 rounded-xl"></div>
                  <div class="pl-4">
                    <p class="font-medium">UX Design &amp; Visual Strategy</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">Cash</p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <div class="w-10 h-10 bg-pink-300 rounded-xl"></div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show === null ? (show = 0) : (show = null)"
                  class="focus:ring-2 rounded-md focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6"
                  v-if="show === 0"
                >
                  <div
                    tabindex="0"
                    class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                  >
                    <FontAwesomeIcon :icon="['far', 'edit']" class="mx-2" />
                    <span>Edit</span>
                  </div>
                  <div
                    tabindex="0"
                    class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-red-700 py-4 px-4 cursor-pointer hover:text-white"
                  >
                    <FontAwesomeIcon :icon="['fas', 'trash']" class="mx-2" />
                    <span>Delete</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style></style>
