<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';
import { ref } from 'vue';
import ProjectCard from '@zems/Front/Components/Widget/ProjectCard.vue';

const projects = ref([
  {
    id: 1,
    title: "Crypto Coin",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/cryptocoin/",
    image: "https://portfolio.webpoka.com/projects/landing_page/cryptocoin/cryptocoin.avif"
  },
  {
    id: 2,
    title: "Events",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/events/",
    image: "https://portfolio.webpoka.com/projects/landing_page/events/events.avif"
  },
  {
    id: 3,
    title: "Renovation",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/renovation/",
    image: "https://portfolio.webpoka.com/projects/landing_page/renovation/renovation.avif"
  },
  {
    id: 4,
    title: "Vesco",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/vesco/",
    image: "https://portfolio.webpoka.com/projects/landing_page/vesco/vesco.avif"
  },
  {
    id: 5,
    title: "Ask Me",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/chainese/",
    image: "https://portfolio.webpoka.com/projects/landing_page/chainese/chainese.avif"
  },
  {
    id: 6,
    title: "Xocondos",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/xocondos/",
    image: "https://portfolio.webpoka.com/projects/landing_page/xocondos/xocondos.avif"
  }
]);



</script>

<template>
  <BreadCrumb />
  <div class="projects">
    <div class="container">
      <SectionTitle class="text-center mb-3" title="Our Work in Action" sub-title="Projects" />

      <div class="all-projects medium-2 large-3 gap-2">

        <ProjectCard v-for="app in projects" :app="app" :key="app.id" />

      </div>
    </div>
  </div>
</template>
<style scoped>
.projects {
  padding: 3.75rem 0;
}
</style>
