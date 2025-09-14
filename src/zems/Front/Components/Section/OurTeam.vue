<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import MemberCard from '@zems/Front/Components/Widget/MemberCard.vue';
import { ref } from 'vue';

const members = ref([
  {
    id: 1,
    name: "Rafiqur Rahman",
    role: "Python Developer",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Ayesha Siddique",
    role: "Frontend Engineer",
    image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1568585105565-e372998a195d?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Sofia Karim",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1660587398631-cff6fc7c33ce?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Tariq Mahmud",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Clara Nazneen",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1701980889802-55ff39e2e973?w=500&auto=format&fit=crop&q=60",
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
