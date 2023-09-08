<script setup lang="ts">
import { Product } from "../../../../type/main";

const products: Product[] = [
  { id: 1, title: "product 1", type: "UX review presentations" },
  { id: 2, title: "product 2", type: "UX review presentations" },
  { id: 3, title: "product 3", type: "UX review presentations" },
  { id: 4, title: "product 4", type: "UX review presentations" },
  { id: 5, title: "product 5", type: "UX review presentations" },
  { id: 6, title: "product 6", type: "UX review presentations" },
  { id: 7, title: "product 7", type: "UX review presentations" },
  { id: 8, title: "product 8", type: "UX review presentations" },
  { id: 9, title: "product 9", type: "UX review presentations" },
  { id: 10, title: "product 10", type: "UX review presentations" },
  { id: 11, title: "product 11", type: "UX review presentations" },
  { id: 12, title: "product 12", type: "UX review presentations" },
  { id: 13, title: "product 13", type: "UX review presentations" },
  { id: 14, title: "product 14", type: "UX review presentations" },
  { id: 15, title: "product 15", type: "UX review presentations" },
];
</script>

<template>
  <section
    id="card"
    class="gap-12 flex flex-wrap justify-center  "
  >
    <div
      class="bg-white rounded-md border-gray-44 flex-col w-56 h-[430px]"
      v-for="product in products"
      :key="product.id"
    >
      <img
        src="../../../assets/svg/Rectangle 27.svg"
        alt=""
        class="w-56 h-56 bg-slate-300 rounded-t-md"
      />
      <div
        class="self-stretch h-[206px] p-6 flex-col justify-start items-start gap-6 flex"
      >
        <div
          class="px-3 py-1 bg-gray-100 rounded-2xl justify-start items-center inline-flex"
        >
          <h1
            class="text-center text-slate-700 text-sm font-medium leading-tight"
          >
            {{ product.title }}
          </h1>
        </div>
        <div
          class="self-stretch h-[114px] flex-col justify-start items-start gap-2 flex"
        >
          <div class="self-stretch justify-start items-start gap-4 inline-flex">
            <h2
              class="grow shrink basis-0 text-gray-900 text-base font-normal leading-normal pr-44"
            >
              {{ product.type }}
            </h2>
          </div>
          <div
            class="self-stretch h-[58px] flex-col justify-start items-start gap-0.5 flex"
          >
            <div
              class="self-stretch justify-start items-center gap-2 inline-flex"
            >
              <h1
                class="grow shrink basis-0 text-gray-900 text-xl font-semibold leading-[30px]"
              >
                Rp36.000
              </h1>
              <h2
                class="text-right text-gray-400 text-xs font-normal leading-[18px]"
              >
                450ML
              </h2>
            </div>

            <div
              class="self-stretch justify-start items-center gap-1 inline-flex"
            >
              <div
                class="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex"
              >
                <h1
                  class="text-gray-400 text-xs font-normal line-through leading-[18px]"
                >
                  Rp40.000
                </h1>
                <div
                  class="px-2 py-0.5 bg-red-50 rounded-2xl justify-start items-center flex"
                >
                  <h2
                    class="text-center text-red-700 text-xs font-medium leading-[18px]"
                  >
                    -10%
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
