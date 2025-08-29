<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
    const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links')

 window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolling');
    } else {
      navbar.classList.remove('scrolling');
    }
  });

  // console.log(navbar.childNodes);
  navLinks.childNodes.forEach(element => {
    element.addEventListener('click', () => {
      isMenuOpen.value = false
    })
  });
})
</script>

<template>
  <header class="navbar">
    <nav class="flex justify-between align-center container">
      <!-- Mobile Menu Toggle Button -->
      <BaseButton class="hamburger" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" class="fa-2xl"></i>
      </BaseButton>
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <img class="width-full" src="https://www.webpoka.com/front/images/logo.png" alt="logo" />
      </RouterLink>

      <!-- Navigation Links -->
      <div class="flex align-center gap-1">
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <ListItem>
            <RouterLink to="/">Home</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/about-us">About</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/projects">Projects</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/blogs">Blogs</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/gallery">Gallery</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/contact-us">Contact</RouterLink>
          </ListItem>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
 .navbar.scrolling {
  background: black;
  padding: 0.75rem 0;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease;
  color: var(--white-color);
}
.navbar a {
  text-decoration: none;
}

.logo img {
  height: 70px;
  width: auto;
  display: block;
}

.nav-links {
  display: flex;
  align-items: center;
}
.navbar ul {
  list-style: none;
  position: fixed;
  top: 5rem;
  left: -100%;
  width: 80%;
  margin: 0;
  background: var(--dark);
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 1.5rem;
  transition: 0.3s;
  font-size: 1rem;
  font-weight: 600;

}
.navbar ul.active {
  top: 5rem;
  left: 0;
  color: var(--white-color);
}
.navbar ul li a {
  position: relative;
  display: inline-block;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  padding: 0.5rem 0;
}
.navbar ul li .router-link-exact-active {
  color: var(--primary-light-color);
}
/* Mobile menu toggle */
.hamburger {
  color: var(--white-color);
  border: none;
  cursor: pointer;
}

@media (min-width: 992px) {
  .navbar {
  padding-top: 2.5rem;
}
  .navbar ul {
    position: inherit;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    padding: 0.75rem 0;
  }
  /* Desktop menu hover effects */
  .navbar ul li a::after,
  .navbar ul li .router-link-exact-active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-light-color);
    transition: width 0.3s ease;
  }
  .navbar ul li .router-link-exact-active::after {
    width: 100%;
  }
  .navbar ul li a:hover::after {
    width: 100%;
  }

  /* expand navlinks on desktop  */
  .hamburger {
    display: none;
  }
}
</style>
