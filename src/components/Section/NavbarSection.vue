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
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <BaseImage class="width-full" image="/webpoka-logo-white.png" alt="logo" />
      </RouterLink>

      <!-- Navigation Links -->
      <div class="flex align-center gap-1">
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <ListItem class="logo-mobile">
            <BaseImage image="/webpoka-logo-white.png" alt="logo" />
          </ListItem>
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
            <RouterLink to="/contact-us">Contact</RouterLink>
          </ListItem>

          <ListItem>
            <a class="fiver-link" href="https://www.fiverr.com/webpoka" target="_blank" rel="noopener noreferrer">
              <BaseImage image="/fiverr.png" alt="fiverr" />Fiverr
            </a>
          </ListItem>
        </ul>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <BaseButton class="hamburger" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'"></i>
      </BaseButton>
    </nav>
  </header>
</template>

<style scoped>
.navbar.scrolling {
  background: var(--primary-color);
  padding: .75rem 0;
}

.navbar {
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease;
  color: var(--white-color);
}

.navbar .fiver-link {
  display: flex;
  align-items: flex-end;
}

.navbar .fiver-link img {
  height: 30px;
  width: 30px;
}

.navbar a {
  text-decoration: none;
}

.logo img, .logo-mobile img {
  height: 60px;
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
  top: 0;
  left: -100%;
  width: 80%;
  height: 100vh;
  margin: 0;
  background: var(--primary-color);
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  gap: 1rem;
  transition: 0.3s;
  font-size: 1rem;
  font-weight: 600;

}

.navbar ul.active {
  top: 0;
  left: 0;
  color: var(--white-color);
  display: flex;
  align-items: flex-start;
}


.navbar ul li a {
  position: relative;
  display: inline-block;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  padding: 0.5rem 0;
}

.navbar ul li .router-link-exact-active {
  color: var(--white-color);
}

/* Mobile menu toggle */
.hamburger {
  height: 2rem;
  width: 2rem;
  font-size: 1.5rem;
  /* background: var(--accent-color); */
  color: var(--white-color);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 992px) {
  .navbar {
    padding-top: 3rem;
  }

  .logo img {
    height: 70px;
  }

  .logo-mobile {
    display: none;
  }


  .navbar ul {
    position: inherit;
    width: 100%;
    height: auto;
    flex-direction: row;
    gap: 1.5rem;
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
    background: var(--white-color);
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
