<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BreadCrumb from '../Components/Section/BreadCrumb.vue';
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: "E-Commerce Web App",
    description: "A full-stack e-commerce platform using React, Node.js, and MongoDB with product management, cart, and checkout features.",
    image: "https://cdn.pixabay.com/photo/2018/09/30/14/52/commerce-3713687_1280.jpg"
  },
  {
    id: 2,
    title: "Blog CMS",
    description: "A content management system for blogs using Next.js and Firebase, allowing dynamic post creation and user authentication.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "A productivity web app built with React and Redux Toolkit for managing tasks, deadlines, and priorities effectively.",
    image: "https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148554946.jpg"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A web application using Vue.js and OpenWeather API to display current weather and 7-day forecasts with charts and icons.",
    image: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Chat Application",
    description: "A real-time chat application built with React, Socket.io, and Node.js for one-on-one and group messaging.",
    image: "https://cdn.pixabay.com/photo/2016/11/02/17/19/keyboard-1792310_1280.png"
  },
  {
    id: 6,
    title: "Admin Dashboard",
    description: "A responsive admin dashboard built with React and Chart.js to visualize analytics, manage users, and monitor app metrics.",
    image: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg"
  }
]);



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
          <BaseParagraph>{{ app.description.substring(0, 60) }}...
          </BaseParagraph>
          <div>
            <RouterLink class="btn btn-secondary" :to="`/projects/${app.title}`">VIEW DETAILS</RouterLink>
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
  height: 250px;
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
