<script setup>
import { RouterLink, useRoute } from 'vue-router';
defineProps({
  routeName: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  url: {
    type: String
  }
})
const route = useRoute()
</script>

<template>
  <section class="breadcrumb relative">
    <BaseImage :image="url" alt="breadcrumb background" />
    <div class="container">
      <h1 class="breadcrumb-title">{{ title }}</h1>
      <ul>
        <ListItem>
          <RouterLink to="/">Home</RouterLink>
        </ListItem>
        <ListItem>{{ routeName }}</ListItem>
        <ListItem class="slug" v-if="route.params.slug">{{ route.params.slug }}</ListItem>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.breadcrumb {
  height: 45vh;
  color: var(--white-color);
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: end;
  background-image: linear-gradient(to bottom, rgb(from var(--secondary-color)r g b / 15%), rgb(from var(--secondary-color)r g b / 15%));
}
.breadcrumb img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.breadcrumb-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: .5rem;
}

.breadcrumb ul {
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0;
}
.breadcrumb a:hover {
  color: var(--secondary-color);
  transition: all .3s ease-in-out;
}
.breadcrumb .slug {
  display: none;
}

/* .breadcrumb ul li a {
  position: relative;
  color: var(--highlight-color);
  text-decoration: none;
  padding-bottom: .5rem;
}

.breadcrumb ul li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: var(--highlight-color);
  transition: all .3s ease-in-out;
}

.breadcrumb ul li a:hover::after {
  width: 100%;
} */

.breadcrumb ul li:not(:last-child)::after {
  content: ">";
  font-family: monospace;
  padding-left: 1rem;
}

@media (min-width: 768px) {
  .breadcrumb {
  height: 60vh;
  }
  .breadcrumb ul {
    font-size: 1.25rem;
  }

  .breadcrumb .slug {
    display: inline;
  }
}
</style>
