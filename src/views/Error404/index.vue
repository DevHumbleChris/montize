<template>
    <div class="min-h-screen flex items-center bg-404">
    <div class="container mx-auto p-4 flex flex-wrap items-center">
      <div class="w-full md:w-5/12 text-center p-4">
        <img src="../../assets/error-img.png" alt="Error Logo" />
      </div>
      <div class="w-full md:w-7/12 text-center md:text-left p-4">
        <div class="text-xl md:text-3xl font-medium mb-4">
          Oops. This page has gone missing.
        </div>
        <div class="text-lg mb-8">
          You may have mistyped the address or the page may have moved.
        </div>
        <router-link to="/" class="btn-404 text-white p-4 rounded-xl"
          >
          <FontAwesomeIcon :icon="['fas', 'home']" class="mr-1" />
          Return Home
          </router-link
        >
      </div>
    </div>
  </div>
</template>
