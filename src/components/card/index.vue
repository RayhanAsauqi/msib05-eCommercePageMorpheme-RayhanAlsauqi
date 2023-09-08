<script setup lang="ts">
import { Product } from "../../../type/main";

const { products }: { products: Product } = defineProps<{
  products: Product;
}>();
</script>

<template>
  <section id="card" class="gap-12  flex flex-wrap justify-center ">
    <div
      class="bg-white rounded-md border-gray-44 flex-col w-56 h-[430px] border border-slate-300"  
    >
      <img
        src="../../assets/svg/Rectangle 27.svg"
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
            {{ products.title }}
          </h1>
        </div>
        <div
          class="self-stretch h-[114px] flex-col justify-start items-start gap-2 flex"
        >
          <div class="self-stretch justify-start items-start gap-4 inline-flex">
            <h2
              class="grow shrink basis-0 text-gray-900 text-base font-normal leading-normal pr-44"
            >
              {{ products.type }}
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

  <div></div>
</template>
