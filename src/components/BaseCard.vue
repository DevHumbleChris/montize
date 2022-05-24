<template>
  <div class="card flex flex-col bg-white">
    <slot name="cardHeader" />
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
