<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import ServiceCard from '../Widget/ServiceCard.vue';

</script>

<template>
  <section class="services">
    <div class="container">
      <div class="medium-3 relative">
        <SectionTitle subTitle="Our Services" title="We Are Providing Digital Services" />
        <div class="medium-span-2 medium-2 gap-2 align-center">
          <div class="cards" v-for="s in 5" :key="s">
            <ServiceCard />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.services {
  /* background: url('https://www.webpoka.com/front/images/background/pattern-4.png') no-repeat; */
  position: relative;
  margin: 9rem 0 3rem 0;
}

.services::after {
  content: '';
  position: absolute;
  background: url('https://webpoka.com/front/images/background/pattern-4.png') left top no-repeat;
  top: 0;
  bottom: -150px;
  left: 0;
  right: 0;
  z-index: -1;
}

.cards:first-child {
  position: absolute;
  left: 0;
  max-width: 350px;
  margin-top: 8rem;
}

.cards:nth-child(3) {
  margin-bottom: -5rem;
}

.cards:nth-child(5) {
  margin-bottom: -5rem;
}
</style>
