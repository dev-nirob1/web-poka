<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import AccordionWidget from '../Widget/AccordionWidget.vue';
import { ref } from 'vue';

const about = ref([
  {
    id: 1,
    question: "What software development services do you offer?",
    answer: "We provide end-to-end software development including custom application development, web and mobile apps, cloud solutions, enterprise software, and AI/ML integration. Our full-cycle development covers everything from ideation to deployment and maintenance."
  },
  {
    id: 2,
    question: "What technologies and frameworks do you specialize in?",
    answer: "Our team has expertise in modern technologies including JavaScript/TypeScript (Vue, React, Angular), Python (Django, Flask), .NET, Java, and cloud platforms (AWS, Azure, GCP). We also work with databases like PostgreSQL, MongoDB, and Firebase."
  },
  {
    id: 3,
    question: "How do you ensure software quality and security?",
    answer: "We implement rigorous QA processes including unit testing, integration testing, and security audits. All our code undergoes peer review, and we follow OWASP security principles. We also provide penetration testing for critical applications."
  }])

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
          <SectionTitle title="We Are Happy to Assist You all Time Moment" subTitle="We Are Tecno" />
          <BaseParagraph class="my-1">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed. So some forward-looking CIOs are putting.
          </BaseParagraph>

          <AccordionWidget v-for="item in about" :key="item.id" :currentOpenItem="currentOpenItem" :accordionData="item"
            :toggleAccordion="toggleAccordion"/>
          <BaseButton class="btn-secondary">About More</BaseButton>
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
