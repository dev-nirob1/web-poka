<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';
import { computed, ref } from 'vue';
import ProjectCard from '@zems/Front/Components/Widget/ProjectCard.vue';

const projects = ref([
  // LANDING PAGES
    {
    id: 11,
    title: "Real Estate Landing Page",
    category: "landing-page",
    liveLink: "https://cityview-landing-page.netlify.app/",
    image: "/projectImage/cityview.png"
  },
    {
    id: 9,
    title: "Bag Selling Landing Page",
    category: "landing-page",
    liveLink: "https://bagpoint.netlify.app/",
    image: "/projectImage/bagpoint.png"
  },
  {
    id: 10,
    title: "Pizza Slice Landing Page",
    category: "landing-page",
    liveLink: "https://slicepoint.netlify.app/",
    image: "/projectImage/slicepoint.png"
  },
  {
    id: 1,
    title: "Crypto Coin",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/cryptocoin/",
    image: "https://portfolio.webpoka.com/projects/landing_page/cryptocoin/cryptocoin.avif"
  },
  {
    id: 2,
    title: "Events",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/events/",
    image: "https://portfolio.webpoka.com/projects/landing_page/events/events.avif"
  },
  {
    id: 3,
    title: "Renovation",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/renovation/",
    image: "https://portfolio.webpoka.com/projects/landing_page/renovation/renovation.avif"
  },
  {
    id: 4,
    title: "Vesco",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/vesco/",
    image: "https://portfolio.webpoka.com/projects/landing_page/vesco/vesco.avif"
  },
  {
    id: 5,
    title: "Ask Me",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/chainese/",
    image: "https://portfolio.webpoka.com/projects/landing_page/chainese/chainese.avif"
  },
  {
    id: 6,
    title: "Xocondos",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/xocondos/",
    image: "https://portfolio.webpoka.com/projects/landing_page/xocondos/xocondos.avif"
  },

  // FRONT-END PROJECTS
  {
    id: 7,
    title: "Real Estate Front-end",
    category: "front-end",
    liveLink: "https://real-estate-dream-home.netlify.app/",
    image: "/projectImage/dream-homes.png"
  },

  // FULL-STACK PROJECTS
  {
    id: 8,
    title: "Real Estate Website",
    category: "full-stack",
    liveLink: "https://scionassetbd.com/",
    image: "/projectImage/scion-asset.png"
  },

]);
const tabs = [
  { label: "Front-End", value: "front-end" },
  { label: "Landing Pages", value: "landing-page" },
  { label: "Full Stack", value: "full-stack" }
];

const activeTab = ref('landing-page');
const filteredProjects = computed(() => {
  return projects.value.filter(
    project => project.category === activeTab.value
  );
});

const handleTabChange = (cat) => {
  activeTab.value = cat
}


</script>

<template>
  <BreadCrumb title="Our Portfolio" routeName="Projects" url="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

  <div class="projects">
    <div class="container">
      <SectionTitle class="text-center mb-3" title="Our Work in Action" sub-title="Projects" />

      <ul class="tab-panel">
        <ListItem v-for="(cat, i) in tabs" :key="i">
          <BaseButton @click="handleTabChange(cat.value)" :class="{ active: activeTab === cat.value }">
            {{ cat.label }}
          </BaseButton>
        </ListItem>
      </ul>

      <div class="medium-2 large-3 gap-2">

        <ProjectCard v-for="app in filteredProjects" :app="app" :key="app.id" />

      </div>
    </div>
  </div>
</template>
<style scoped>
.projects {
  padding: 3.75rem 0;
}

.tab-panel {
  gap: .25rem;
  padding: .5rem;
  border-radius: 1rem;
  align-items:center;
}
@media (min-width: 768px){
  .tab-panel {
    border-radius: 3rem;
    padding: .25rem;
  }
}
</style>
