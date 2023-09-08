<script setup lang="ts">
import ButtonViewCategory from "../../components/category/buttonCategory/ButtonViewCategory.vue";
import CategoryFeatures from "../category/features/index.vue";
</script>

<template>
  <section id="category">
    <div class="container mx-auto py-14 px-28">
      <div class="flex justify-between">
        <p class="text-gray-900 text-2xl font-semibold leading-loose">
          Category
        </p>
        <ButtonViewCategory />
      </div>
    </div>
    <CategoryFeatures />
  </section>
</template>
