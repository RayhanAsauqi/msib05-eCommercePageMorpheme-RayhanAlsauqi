<script setup lang="ts">
import ButtonLogIn from "../../components/header/buttonHeader/ButtonLogIn.vue";
import ButtonSignIn from "../header/buttonHeader/ButtonSignIn.vue";
import ButtonStartShopping from "../header/buttonHeader/ButtonStartShopping.vue";
import NavComponent from "../header/navbar/index.vue";
</script>

<template>
  <header class="bg-gradient-to-b from-sky-200 to-white">
    <div class="container mx-auto pt-10 px-28">
      <div class="flex gap-10 justify-between">
        <div class="flex justify-between">
          <div class="flex space-x-[10px] ml-8">
            <img src="../../assets/svg/logoGits.svg" alt="logo gits" />
            <img src="../../assets/svg/logoType.svg" alt="logo type" />
          </div>
          <div class="flex items-center">
            <NavComponent />
          </div>
        </div>
        <div class="space-x-3 ">
          <ButtonLogIn />
          <ButtonSignIn />
        </div>
      </div>
    </div>

    <section class="">
      <div
        class="continer pt-[220px] bg-[url('src/assets/img/heroImage.png')] bg-no-repeat bg-right-top pb-24" style="background-position-y: 75%;"
      >
        <div class="px-28">
          <h1 class="text-6xl leading-[72px] font-semibold ">
            Welcome to GITS <br />
            Commerce
          </h1>
          <p
            class="text-slate-600 text-xl font-normal leading-[30px] pt-6  pb-12"
          >
            Morpheme is a next-gen financial technology<br />
            company in the process of reinventing banking.
          </p>
          <ButtonStartShopping />
        </div>
      </div>
    </section>
  </header>
</template>
