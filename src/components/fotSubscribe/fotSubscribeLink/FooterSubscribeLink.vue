<script setup lang="ts">
import ListLinkSubscribe from "./listLinkSubscribe/ListLinkSubscribe.vue";
</script>

<template>
  <!-- <div class="justify-start items-start inline-flex">
    <img src="../../../assets/svg/Logo.svg" alt="" />
    <img src="../../../assets/svg/logoType.svg" alt="logo gits" />
  </div> -->
  <!-- <div class="w-[53.62px] h-6 relative">
            <p class="w-80 text-gray-200 text-base font-normal leading-normal">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div> -->
  <div class="container">
    <div class="flex ">
      <div class="w-96">
        <img src="../../../assets/svg/Logo.svg" alt="" />
        <img src="../../../assets/svg/logoType.svg" alt="logo gits" />
        <p class="w-80 text-gray-200 text-base font-normal leading-normal">
          Design amazing digital experiences that create more happy in the
          world.
        </p>
      </div>
      <ListLinkSubscribe />
    </div>
  </div>
</template>
