<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import ServiceCard from '../Widget/ServiceCard.vue';

</script>

<template>
  <section class="services">
    <div class="container">
      <SectionTitle subTitle="Our Services" title="We Are Providing Digital Services" />
      <div class="medium-3 gap-2 align-center">
          <ServiceCard v-for="s in 5" :key="s" />
      </div>

    </div>
  </section>
</template>
<style>
.services {
  background: url('https://www.webpoka.com/front/images/background/pattern-4.png') no-repeat;
  padding: 3.75rem 0;
}

</style>
