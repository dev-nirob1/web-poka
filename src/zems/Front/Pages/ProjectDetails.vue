<script setup>
import { RouterLink } from 'vue-router';
import BreadCrumb from '../Components/Section/BreadCrumb.vue';

</script>



<template>
  <BreadCrumb />
  <div class="project-details">
    <div class="container">

      <div class="medium-2 gap-2">
        <div class="image relative">
          <BaseImage
            image="https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg"
            alt="project image" />
          <div class="price">
            <strong>199</strong><span>$</span>
          </div>
        </div>

        <div class="content">
          <BaseTitle>Admin Dashboard</BaseTitle>
          <BaseParagraph>
            A modern dashboard to manage products, users, and orders with ease.
            It includes real-time analytics, role-based access, and a clean
            responsive design for smooth operations.
          </BaseParagraph>

          <ul class="features">
            <ListItem>Interactive analytics with charts and reports</ListItem>
            <ListItem>Role-based access control for team members</ListItem>
            <ListItem>Product, order, and customer management</ListItem>
            <ListItem>Fast, secure, and mobile-friendly interface</ListItem>
          </ul>

          <div class="flex align-center gap-1">
            <RouterLink to="/projects/admin-dashboard" class="btn btn-secondary">View Live</RouterLink>
            <BaseButton class="btn btn-secondary">Order Now</BaseButton>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.project-details {
  padding: 3.75rem 0;
}

.image {
  width: 100%;
  height: 100%;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .75rem;
}

.price {
  font-size: 1.5rem;
  border-radius: .75rem;
  color: var(--white-color);
  background: var(--alternative-color);
  display: inline-block;
  padding: .25rem .75rem;
  position: absolute;
  right: .5rem;
  top: .5rem;
}

.price span {
  font-size: 1rem;
}
</style>
