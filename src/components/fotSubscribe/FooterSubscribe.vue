<script setup lang="ts">
import inputSubscribe from "./inputSubscribe/InputSubscribe.vue";
import ButtonSubscribe from "./buttonSubscribe/ButtonSubscribe.vue";
import TextSubscribe from "../fotSubscribe/textSubscribe/TextSubscribe.vue";
import FooterSubscribeLink from "../fotSubscribe/fotSubscribeLink/FooterSubscribeLink.vue";
import LinkSocialMedia from "../fotSubscribe/fotSubscribeLink/listLinkSubscribe/linkSubscribe/LinkSocialMedia.vue";
</script>

<template>
  <section class="bg-slate-900 py-16 px-28">
    <div class="flex justify-between">
      <div>
        <TextSubscribe />
      </div>
      <div class="flex gap-4">
        <inputSubscribe />
        <ButtonSubscribe />
      </div>
    </div>
  </section>

  <div class="bg-slate-800 px-28">
    <div class="py-16">
      <FooterSubscribeLink />
    </div>
    <div class="border-t-[1px] border-slate-600 pt-8 pb-12 flex ">
      <LinkSocialMedia />
    </div>
  </div>
</template>
