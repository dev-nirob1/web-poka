<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BreadCrumb from '../Components/Section/BreadCrumb.vue';
import { ref } from 'vue';

const projects = ref([
  {
    "id": 1,
    "title": "Restaurant App",
    "description": "A user-friendly app for browsing menus, placing orders, and managing reservations.",
    "image": "https://media.istockphoto.com/id/1331919924/photo/technology-makes-life-so-much-easier-for-young-asian-woman-using-mobile-app-device-on.jpg?s=612x612&w=0&k=20&c=8MFgliNHfNLWxUjpZWcNtSs4dndEYQEU491ll5WF0_s="
  },
  {
    "id": 2,
    "title": "Fitness Tracker",
    "description": "Track workouts, monitor progress, and reach fitness goals with personalized plans.",
    "image": "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 3,
    "title": "E-Commerce Platform",
    "description": "A complete solution for online shopping with product listings, reviews, and secure payments.",
    "image": "https://images.unsplash.com/photo-1688561807381-05137151978f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 4,
    "title": "Travel Booking App",
    "description": "Easily book flights, hotels, and plan your trips with a seamless travel experience.",
    "image": "https://img.freepik.com/free-photo/top-view-travel-elements-collection_23-2148691133.jpg?semt=ais_hybrid&w=740"
  },
  {
    "id": 5,
    "title": "Online Learning App",
    "description": "Access hundreds of courses, track learning progress, and earn certificates from experts.",
    "image": "https://images.unsplash.com/photo-1597933471507-1ca5765185d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 6,
    "title": "Finance Manager",
    "description": "Manage your expenses, create budgets, and get insights to make smarter financial decisions.",
    "image": "https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-361.jpg?uid=R140702484&ga=GA1.1.1873161437.1736591058&semt=ais_hybrid&w=740"
  }
])
</script>

<template>
  <BreadCrumb />
  <div class="container">
    <SectionTitle class="text-center my-3" title="Our Work in Action" sub-title="Projects" />

    <div class="all-projects medium-2 large-3 gap-2">

      <div v-for="app in projects" :key="app.id" class="project-card">
        <div class="image">
          <BaseImage :image="app.image" alt="project image" />
        </div>
        <div class="p-1">
          <SubTitle>{{ app.title }}</SubTitle>
          <BaseParagraph class="pb-1">{{ app.description.substring(0, 60) }}...
          </BaseParagraph>
          <div class="my-1">
            <RouterLink class="btn-secondary" :to="`/projects/${app.title}`">VIEW DETAILS</RouterLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  border-radius: .5rem;
}

.project-card p {
  margin-top: .5rem;
}

.project-card .image {
  position: relative;
  overflow: hidden;
  height: 220px;
  width: auto;
  border-radius: .5rem .5rem 0 0;
}

.project-card .image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .5rem .5rem 0 0;
  transition: all .5s ease-in-out;
}

.project-card .image:hover img {
  transform: scale(1.1);
}

.project-card .btn-secondary {
  border-radius: .5rem;
}
</style>
