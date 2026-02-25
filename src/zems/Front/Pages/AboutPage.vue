<script setup>
import AboutSection from '@zems/Front/Components/Section/AboutSection.vue';
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';
import FounderSection from '@zems/Front/Components/Section/FounderSection.vue';
import OurTeam from '@zems/Front/Components/Section/OurTeam.vue';
</script>

<template>
  <BreadCrumb title="About Us" routeName="About" url="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  <AboutSection />
  <FounderSection />
  <OurTeam />
</template>

<style scoped></style>
