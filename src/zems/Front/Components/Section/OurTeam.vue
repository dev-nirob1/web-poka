<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import MemberCard from '@zems/Front/Components/Widget/MemberCard.vue';
import { ref } from 'vue';

const members = ref([
  {
    id: 1,
    name: "Rafiqur Rahman",
    role: "Python Developer",
    image: "/profile.png",
  },
  {
    id: 2,
    name: "Ayesha Siddique",
    role: "Frontend Engineer",
    image: "/profile.png",
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    role: "UI/UX Designer",
   image: "/profile.png",
  },
  {
    id: 4,
    name: "Sofia Karim",
    role: "Product Manager",
   image: "/profile.png",
  },
  {
    id: 5,
    name: "Tariq Mahmud",
    role: "DevOps Engineer",
   image: "/profile.png",
  },
  {
    id: 6,
    name: "Clara Nazneen",
    role: "Backend Developer",
    image: "/profile.png",
  }
])

</script>

<template>
  <section class="team-members">
    <div class="container">
      <SectionTitle class="text-center mb-2" title="Meet Our Skilled Team" sub-title="Core Members" />

      <div class="medium-2 large-3 gap-2">
        <MemberCard v-for="member in members" :key="member.id" :memberData="member"/>
      </div>
    </div>
  </section>
</template>
<style scoped>
.team-members {
  padding: 3.75rem 0;
}

</style>
