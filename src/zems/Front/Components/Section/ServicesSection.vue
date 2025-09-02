<script setup>
import { ref } from 'vue';
import ServiceCard from '../Widget/ServiceCard.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
const services = ref([
  {
    title: "Web Development",
    description: "We build fast, secure, and scalable websites and applications tailored to your business needs.",
    icon: "fa-solid fa-code"
  },
  {
    title: "Strategy & Planning",
    description: "Our experts create result-driven strategies to help you grow and achieve long-term success.",
    icon: "fa-solid fa-lightbulb"
  },
  {
    title: "Marketing Research",
    description: "We analyze market trends and consumer behavior to give your brand a competitive edge.",
    icon: "fa-solid fa-chart-line"
  },
  {
    title: "Growth Tracking",
    description: "Track your business performance with data-driven insights and continuous optimization.",
    icon: "fa-solid fa-chart-pie"
  },
  {
    title: "Enterprise Consulting",
    description: "We provide professional consulting to streamline operations and enhance productivity.",
    icon: "fa-solid fa-briefcase"
  }
])

</script>

<template>
  <section class="services relative">
    <div class="container">
      <div class="large-3 gap-2 relative">
        <SectionTitle subTitle="Our Services" title="We Are Providing Digital Services" />

        <div class="large-span-2 medium-2 gap-2 align-center">
          <div class="cards" v-for="(service, i) in services" :key="i">
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
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

@media (min-width: 992px) {
  .services {
    margin: 9rem 0 3rem 0;
  }

  .cards:first-child {
    position: absolute;
    left: 0;
    max-width: 300px;
    margin-top: 8rem;
  }

  .cards:nth-child(3) {
    margin-bottom: -5rem;
  }

  .cards:nth-child(5) {
    margin-bottom: -7rem;
  }
}

@media(min-width: 1200px) {
  .cards:first-child {
    max-width: 360px;
  }
}
</style>
