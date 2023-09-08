<script setup lang="ts">
import ButtonViewFlashSale from "./butttonFlashSale/ButtonView.vue";
import TimeFlashSale from "./timeFlasheSale/index.vue";
import CardTimeFlashSale from "../card/index.vue";
import { Product } from "../../../type/main";

const products: Product[] = [
  { id: 1, title: "product 1", type: "UX review presentations" },
  { id: 2, title: "product 2", type: "UX review presentations" },
  { id: 3, title: "product 3", type: "UX review presentations" },
  { id: 4, title: "product 4", type: "UX review presentations" },
  { id: 5, title: "product 5", type: "UX review presentations" },

];
</script>

<template>
  <section id="flashSale " class="bg-slate-100 pb-24">
    <div class="">
      <div class="container mx-auto px-28 py-8">
        <div class="row">
          <div class="flex justify-between gap-3">
            <TimeFlashSale />
            <ButtonViewFlashSale />
          </div>
        </div>
      </div>

      <div class="flex justify-between px-28 ">
        <div class="" v-for="singleProduct in products" :key="singleProduct.id">
          <CardTimeFlashSale :products="singleProduct" />
        </div>
      </div>
    </div>
  </section>
</template>
