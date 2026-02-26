<script setup>
defineProps({
  app: {
    type: Object
  }
})
</script>
<template>
  <div class="project-card">
    <div class="image" :style="{ backgroundImage: `url(${app.image}) ` }">
      <!-- <BaseImage :image="app.image" alt="project image" /> -->
    </div>
    <div class="p-1">
      <SubTitle>{{ app.title }}</SubTitle>
      <div>
        <a class="btn btn-secondary" :href="app.liveLink" target="_blank" refrral>Watch Live</a>
      </div>
    </div>
  </div>
</template>
<style>
.project-card {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  border-radius: .5rem;
  cursor: pointer;
}

.project-card p {
  margin-top: .5rem;
}

.project-card .image {
  position: relative;
  overflow: hidden;
  height: 220px;
  width: 100%;
  border-radius: .5rem .5rem 0 0;
  transition: all .4s ease-in-out;

    background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.project-card:hover .image {
  background-position: bottom;
}

/* .project-card .image img {
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
} */

.project-card .btn-secondary {
  border-radius: .5rem;
  margin-top: 1rem;
}
</style>
