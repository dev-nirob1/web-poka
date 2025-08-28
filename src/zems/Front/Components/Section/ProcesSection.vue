<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="working-process">
    <div class="container">
      <SectionTitle class="text-center mb-2" subTitle="Steps For Done" title="Our Working Process"/>
      <div class="medium-2 large-4 gap-2">
        <div v-for="p in 4" :key="p" class="process">
          <div class="icon relative">
            <img src="https://webpoka.com/front/images/resource/process-1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.working-process{
  padding: 3.75rem 0;
}
.icon::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: url('https://www.webpoka.com/front/images/resource/process-bg-1.png') center no-repeat;
  z-index: -1;
}
</style>
