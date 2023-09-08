<script setup lang="ts">
import ButtonLatetsProduct from "./buttonLatestProduct/index.vue";
import Discount from "../../components/latestProducts/discount/index.vue";
import CardDiscount from "../card/index.vue";

import { Product } from "../../../type/main";

const products: Product[] = [
  { id: 1, title: "product 1", type: "UX review presentations" },
  { id: 2, title: "product 2", type: "UX review presentations" },
  { id: 3, title: "product 3", type: "UX review presentations" },
  { id: 4, title: "product 4", type: "UX review presentations" },
];
</script>

<template>

  <section class="py-24">
    <div class="container">
      <div class="flex justify-between px-28 pt-24 pb-8">
        <p class="text-gray-900 text-2xl font-semibold leading-loose">
          Latest Product
        </p>
        <ButtonLatetsProduct />
      </div>
    </div>
    <div class="flex px-24 items-center">
      <Discount />

      <div class="">
        <div class="flex gap-x-6  justify-center -ms-28">
          <div v-for="singleProduct in products" :key="singleProduct.id">
            <CardDiscount :products="singleProduct" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- </section> -->
</template>
