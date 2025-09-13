<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import AccordionWidget from '../Widget/AccordionWidget.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const faqs = ref([
  {
    id: 2,
    question: "Do you build software for startups and enterprises?",
    answer: "Yes! We cater to startups, SMEs, and large enterprises. Whether you need a simple MVP to test your idea or a complex enterprise system, we provide scalable solutions that meet your unique requirements."
  },
  {
    id: 3,
    question: "Can I integrate your software with existing systems?",
    answer: "Absolutely. Our team specializes in integrating new solutions with your current systems, whether it’s CRM, ERP, payment gateways, or cloud services, ensuring seamless data flow and consistent user experience."
  },
  {
    id: 4,
    question: "What makes your development process different?",
    answer: "We follow an agile, transparent, and client-focused approach. From requirement analysis to deployment, we maintain open communication, iterative delivery, and continuous feedback, ensuring the final product exceeds expectations."
  },
  {
    id: 5,
    question: "Do you offer ongoing support and updates?",
    answer: "Yes, we provide post-launch support, software updates, and maintenance plans. Our goal is to keep your applications secure, up-to-date, and optimized for performance as your business evolves."
  }
]);

const currentOpenItem = ref();

const toggleAccordion = (id) => {
  if (currentOpenItem.value == id) {
    currentOpenItem.value = null;
  } else {
    currentOpenItem.value = id;
  }
};
</script>

<template>
  <section class="about">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="image">
          <BaseImage image="https://webpoka.com/front/images/resource/about-2.png" alt="image" />
        </div>
        <div class="content">
          <SectionTitle title="Always Here to Assist You" subTitle="About Us" />
          <BaseParagraph class="my-1">
            At Tecno, we specialize in building custom software solutions that drive business growth. Our team ensures
            quality, security, and timely delivery on every project.
          </BaseParagraph>

          <AccordionWidget v-for="item in faqs" :key="item.id" :currentOpenItem="currentOpenItem" :accordionData="item"
            :toggleAccordion="toggleAccordion" />

          <div class="mt-1">
            <RouterLink to="/about-us" class="btn btn-secondary">About More</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 3.75rem 0;
}

.about .image {
  width: 100%;
  height: auto;
}

.about .image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
