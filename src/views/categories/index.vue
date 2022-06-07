<script setup>
import { ref, onMounted } from "vue";
import Modal from "../../components/Modal.vue";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

const showModal = ref(false);
const errorMessage = ref("");

const categoryData = ref({
  name: "",
  monthlyBudget: "",
  color: "#003d5b",
});

const openModal = () => {
  showModal.value = !showModal.value;
  categoryData.value = {
    name: "",
    monthlyBudget: "",
    color: "#003d5b",
  };
};

const show = ref(null);

const handleSubmit = () => {
  axios
    .post("/category/create", {
      name: categoryData.value.name,
      color: categoryData.value.color,
      monthlyBudget: parseInt(categoryData.value.monthlyBudget),
    })
    .then((resp) => {
      if (resp.data.category) {
        openModal();
        toast.success(`Category ${resp.data.category.name} Added Successfully`, {
          timeout: 2500,
        });
      }
      if (resp.data.message) {
        toast.info(`${resp.data.message}`, {
          timeout: 2500,
        });
      }
    })
    .catch((err) => {
      errorMessage.value = err.message;
      console.log(err);
      toast.error(`${err.message}`, {
        timeout: 2500,
      });
    });
};

const cancelSubmit = () => {
  openModal();
  categoryData.value = {
    name: "",
    monthlyBudget: 0,
    color: "#003d5b",
  };
  toast.info("Operation Canceled Successfully", {
    timeout: 2500,
  });
};

const categories = ref([]);

onMounted(() => {
  axios
    .get("/categories")
    .then((resp) => {
      categories.value = resp.data.categories;
      console.log(resp.data.categories);
    })
    .catch((err) => {
      errorMessage.value = err.message;
    });
});
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
                          class="w-10 h-10 rounded-xl mr-3"
                          :style="`background-color:${categoryData.color};`"
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
                          :value="categoryData.color"
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
              <th class="font-normal text-left pl-20"></th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr
              v-for="category in categories"
              :key="category._id"
              tabindex="0"
              class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div
                    class="w-10 h-10 rounded-xl"
                    :style="`background-color: ${category.color}`"
                  ></div>
                  <div class="pl-4">
                    <p class="font-medium">{{ category.name }}</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">Cash</p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">{{ category.monthlyBudget }}</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <div class="w-10 h-10 bg-pink-300 rounded-xl"></div>
              </td>
              <td class="px-2 xl:px-0">
                <button
                  tabindex="0"
                  class="focus:outline-none focus:text-indigo-600 text-xs w-full cursor-pointer"
                >
                  <FontAwesomeIcon :icon="['far', 'edit']" class="mx-2" />
                </button>
                <button
                  tabindex="0"
                  class="focus:text-indigo-600 text-xs w-full cursor-pointer"
                >
                  <FontAwesomeIcon :icon="['fas', 'trash']" class="mx-2" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style></style>
