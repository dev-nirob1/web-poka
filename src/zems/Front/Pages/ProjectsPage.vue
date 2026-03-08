<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';
import { computed, ref } from 'vue';
import ProjectCard from '@zems/Front/Components/Widget/ProjectCard.vue';

const projects = ref([
  // LANDING PAGES
  {
    id: 1,
    title: "Real Estate Landing Page",
    category: "landing-page",
    liveLink: "https://cityview-landing-page.netlify.app/",
    image: "/projectImage/cityview.png"
  },
  {
    id: 2,
    title: "Bag Selling Landing Page",
    category: "landing-page",
    liveLink: "https://bagpoint.netlify.app/",
    image: "/projectImage/bagpoint.png"
  },
  {
    id: 3,
    title: "Pizza Slice Landing Page",
    category: "landing-page",
    liveLink: "https://slicepoint.netlify.app/",
    image: "/projectImage/slicepoint.png"
  },
  {
    id: 4,
    title: "Crypto Coin",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/cryptocoin/",
    image: "https://portfolio.webpoka.com/projects/landing_page/cryptocoin/cryptocoin.avif"
  },
  {
    id: 5,
    title: "Events",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/events/",
    image: "https://portfolio.webpoka.com/projects/landing_page/events/events.avif"
  },
  {
    id: 6,
    title: "Renovation",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/renovation/",
    image: "https://portfolio.webpoka.com/projects/landing_page/renovation/renovation.avif"
  },
  {
    id: 7,
    title: "Vesco",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/vesco/",
    image: "https://portfolio.webpoka.com/projects/landing_page/vesco/vesco.avif"
  },
  {
    id: 8,
    title: "Ask Me",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/chainese/",
    image: "https://portfolio.webpoka.com/projects/landing_page/chainese/chainese.avif"
  },
  {
    id: 9,
    title: "Xocondos",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/xocondos/",
    image: "https://portfolio.webpoka.com/projects/landing_page/xocondos/xocondos.avif"
  },

  // FULL STACK
  {
    id: 10,
    title: "Real Estate Website",
    category: "full-stack",
    liveLink: "https://scionassetbd.com/",
    image: "/projectImage/scion-asset.png"
  },

  // FRONT-END PROJECTS (ORDERED)
  {
    id: 11,
    title: "Event Management Website",
    category: "front-end",
    liveLink: "https://the-venue-event-management.netlify.app/",
    image: "/projectImage/event-management.webp"
  },
  {
    id: 12,
    title: "Healthcare Website",
    category: "front-end",
    liveLink: "https://luxemed-healthcare.netlify.app/",
    image: "/projectImage/luxemed-healthcare.webp"
  },
  {
    id: 13,
    title: "E-commerce Website",
    category: "front-end",
    liveLink: "https://nebula-store-e-commerce.netlify.app/",
    image: "/projectImage/nebul-ecommerce.webp"
  },
  {
    id: 14,
    title: "Gym Website",
    category: "front-end",
    liveLink: "https://fitlab-fitness-website.netlify.app/",
    image: "/projectImage/gym-website.webp"
  },
  {
    id: 15,
    title: "School Website",
    category: "front-end",
    liveLink: "https://kids-green-school.netlify.app/",
    image: "/projectImage/kids-green.webp"
  },
  {
    id: 16,
    title: "Real Estate Website",
    category: "front-end",
    liveLink: "https://velvet-gold-real-estage.netlify.app/",
    image: "/projectImage/velvet-gold.webp"
  },
  {
    id: 17,
    title: "Real Estate Front-end",
    category: "front-end",
    liveLink: "https://real-estate-dream-home.netlify.app/",
    image: "/projectImage/dream-homes.webp"
  },
  {
    id: 18,
    title: "Mirchi Restaurant Website",
    category: "front-end",
    liveLink: "https://mirchi-restaurant.netlify.app/",
    image: "/projectImage/mirchi-restaurant.webp"
  },
  {
    id: 19,
    title: "Bakery Website",
    category: "front-end",
    liveLink: "https://lumina-bakery-website.netlify.app/",
    image: "/projectImage/lumina-bakery.webp"
  },

  // OTHER LANDING PAGES
  {
    id: 20,
    title: "Accounting",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/accounting/",
    image: "https://portfolio.webpoka.com/projects/landing_page/accounting/accounting.avif"
  },
  {
    id: 21,
    title: "Clothing",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/clothing/",
    image: "https://portfolio.webpoka.com/projects/landing_page/clothing/clothing.avif"
  },
  {
    id: 22,
    title: "CPA",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/cpa/",
    image: "https://portfolio.webpoka.com/projects/landing_page/cpa/cpa.avif"
  },
  {
    id: 23,
    title: "E-Book",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/ebook/",
    image: "https://portfolio.webpoka.com/projects/landing_page/ebook/ebook.avif"
  },
  {
    id: 24,
    title: "Restaurant",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/restaurantf/",
    image: "https://portfolio.webpoka.com/projects/landing_page/restaurantf/restaurantf.avif"
  },
  {
    id: 25,
    title: "E-Book 4",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/ebook4/",
    image: "https://portfolio.webpoka.com/projects/landing_page/ebook4/ebook4.avif"
  },
  {
    id: 26,
    title: "Real Estate Zack",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/realestate_zack/",
    image: "https://portfolio.webpoka.com/projects/landing_page/realestate_zack/realestate_zack.avif"
  },
  {
    id: 27,
    title: "Real Estate CMS",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/realestate_cms/",
    image: "https://portfolio.webpoka.com/projects/landing_page/realestate_cms/realestate_cms.avif"
  },
  {
    id: 28,
    title: "Real Home",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/real_home/",
    image: "https://portfolio.webpoka.com/projects/landing_page/real_home/real_home.avif"
  },
  {
    id: 29,
    title: "Problems.Fyi",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/problems.fyi/",
    image: "https://portfolio.webpoka.com/projects/landing_page/problems.fyi/problems.fyi.avif"
  },
  {
    id: 30,
    title: "Limo Service",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/limo_service/",
    image: "https://portfolio.webpoka.com/projects/landing_page/limo_service/limo_service.avif"
  },
  {
    id: 31,
    title: "Forex Bonus",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/forex_bonus/",
    image: "https://portfolio.webpoka.com/projects/landing_page/forex_bonus/forex_bonus.avif"
  },
  {
    id: 32,
    title: "E-Book 2",
    category: "landing-page",
    liveLink: "https://portfolio.webpoka.com/projects/landing_page/ebook2/",
    image: "https://portfolio.webpoka.com/projects/landing_page/ebook2/ebook2.avif"
  }
]);
const tabs = [
  { label: "Front-End", value: "front-end" },
  { label: "Landing Pages", value: "landing-page" },
  { label: "Full Stack", value: "full-stack" }
];

const activeTab = ref('front-end');
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
  <BreadCrumb title="Our Portfolio" routeName="Projects"
    url="/project-page.png" />

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
  align-items: center;
}

@media (min-width: 768px) {
  .tab-panel {
    border-radius: 3rem;
    padding: .25rem;
  }
}
</style>
