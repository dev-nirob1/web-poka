<script setup>
import { ref } from 'vue';
import ServiceCard from '../Widget/ServiceCard.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
const services = ref([
  {
    title: "Web Development",
    description: "We build fast, secure, and scalable websites and web applications tailored to your needs.",
    icon: "fa-solid fa-code"
  },
  {
    title: "Strategy & Planning",
    description: "Our experts craft result-driven strategies to help you innovate and achieve long-term success.",
    icon: "fa-solid fa-lightbulb"
  },
  {
    title: "Market Research",
    description: "We analyze industry trends and user behavior to give your brand a competitive edge.",
    icon: "fa-solid fa-chart-line"
  },
  {
    title: "Growth Analytics",
    description: "Monitor performance with data-driven insights and continuous optimization for measurable results.",
    icon: "fa-solid fa-chart-pie"
  },
  {
    title: "Enterprise Consulting",
    description: "We provide professional consulting to streamline operations and maximize business productivity.",
    icon: "fa-solid fa-briefcase"
  }
])

</script>

<template>
  <section class="services relative">
    <div class="container relative">
      <div class="large-3 gap-2 relative">
        <SectionTitle subTitle="Our Services" title="We Are Providing Digital Services" />

        <div class="large-span-2 medium-2 gap-2 align-center">
          <div class="cards" v-for="(service, i) in services" :key="i">
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
      <!-- animated icons  -->
      <BaseImage class="icon-1" image="https://webpoka.com/front/images/icons/icon-1.png" alt="icon" />
      <BaseImage class="icon-2" image="https://webpoka.com/front/images/icons/icon-2.png" alt="icon" />
      <BaseImage class="icon-3" image="https://webpoka.com/front/images/icons/icon-4.png" alt="icon" />
    </div>
  </section>
</template>
<style scoped>
.services::after {
  content: '';
  position: absolute;
  background: url('https://webpoka.com/front/images/background/pattern-4.png') left top no-repeat;
  top: 0;
  bottom: -250px;
  left: 0;
  right: 0;
  z-index: -2;
}

/* animated icons  */
.icon-1,
.icon-2,
.icon-3 {
  position: absolute;
  z-index: -1;
}

.icon-1 {
  left: 0;
  top: 12rem;
  animation: spin 5s linear infinite;
}

.icon-2 {
  left: -2rem;
  bottom: 0;
  animation: float-up-down 5s linear infinite;
}

.icon-3 {
  display: none;
  right: -4rem;
  top: 5rem;
  animation: float-left-right 5s linear infinite;
}


@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes float-up-down {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes float-left-right {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-30px);
  }

  100% {
    transform: translateX(0);
  }
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
    margin-bottom: -8rem;
  }

  /* animated icons  */
  .icon-2, .icon-3 {
    display: block;
  }

}

@media (min-width: 1200px) {
  .cards:first-child {
    max-width: 360px;
  }

  .cards:nth-child(5) {
    margin-bottom: -5rem;
  }
}

@media(min-width: 1400px) {
  .cards:first-child {
    max-width: 420px;
  }
}
</style>
