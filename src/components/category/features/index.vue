<script setup lang="ts">
import { Category } from "../../../../type/main";

const category: Category[] = [
  {
    id: 1,
    title: "men's fashion",
    image: "../../../src/assets/svg/Feature.svg",
  },
  {
    id: 2,
    title: "women's fashion",
    image: "../../../src/assets/svg/Feature1.svg",
  },
  { id: 3, title: "bicycle", image: "../../../src/assets/svg/Feature2.svg" },
  { id: 4, title: "Handphone", image: "../../../src/assets/svg/Feature3.svg" },
  {
    id: 5,
    title: "hobbies and collections",
    image: "../../../src/assets/svg/Feature4.svg",
  },
  { id: 6, title: "Household", image: "../../../src/assets/svg/Feature5.svg" },
];
</script>

<template>
  <div class="pb-24">
    <ul class="flex justify-center gap-20 ">
      <li v-for="(item, index) in category" :key="index">
        <img :src="item.image" alt="category" />
        <p class="w-[138px] text-center text-neutral-800 text-base font-semibold capitalize  leading-normal pt-5 ">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>
