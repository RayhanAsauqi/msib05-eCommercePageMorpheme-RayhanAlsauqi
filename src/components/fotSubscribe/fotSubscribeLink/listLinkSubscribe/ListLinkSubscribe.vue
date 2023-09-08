<script setup lang="ts">
import LinkSubscribeProducts from "./linkSubscribe/LinkSubscribeProducts.vue";
import LinkSubscribeResources from "./linkSubscribe/LinkSubscribeResources.vue";
import LinkSubscribeCompany from "./linkSubscribe/LinkSubscribeCompany.vue";
import LinkSubscribeSocial from "./linkSubscribe/LinkSubscribeSocial.vue";
import LinkSubscribeLegal from "./linkSubscribe/LinkSubscribeLegal.vue";
</script>

<template>
  <div class="flex flex-1 w-full gap-8 text-white justify-end">
    <LinkSubscribeProducts />
    <LinkSubscribeResources />
    <LinkSubscribeCompany />
    <LinkSubscribeSocial />
    <LinkSubscribeLegal />
    
  </div>
</template>
