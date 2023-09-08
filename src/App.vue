<script setup lang="ts">
import HeaderComponent from "./components/header/HeaderComponent.vue";
import CategoryComponent from "./components/category/CategoryComponent.vue";
import FlashSaleComponent from "./components/flashSale/FlashSaleComponent.vue";
// import LatestProducts1 from "./components/latestProducts1/LatestProduct1.vue";
import LatestProduct from "./components/latestProducts/index.vue";
import Promo from "./components/promo/index.vue";
import ForYou from "./components/forYou/index.vue";
import FooterSubscribe from "./components/fotSubscribe/FooterSubscribe.vue";
</script>

<template>
  <div>
    <HeaderComponent />
    <CategoryComponent />
    <FlashSaleComponent />
    <LatestProduct />
    <Promo />
    <LatestProduct />
    <ForYou />
    <FooterSubscribe />
  </div>
</template>
