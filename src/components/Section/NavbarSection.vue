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
        <BaseImage class="width-full" image="/webpoka.png" alt="logo" />
        <div>
          <SubTitle>Webpoka</SubTitle>
          <BaseParagraph>Reliable Software Company</BaseParagraph>
        </div>
      </RouterLink>

      <!-- Navigation Links -->
      <div class="flex align-center gap-1">
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <ListItem class="logo-mobile">
                <BaseImage class="width-full" image="/webpoka.png" alt="logo" />
                <div>
                  <SubTitle>Webpoka</SubTitle>
                  <BaseParagraph>Reliable Software Company</BaseParagraph>
                </div>
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
            <a href="https://www.fiverr.com/webpoka" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" height="25">

                <rect width="120" height="40" rx="1" ry="1" fill="#1DBF73" />

                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif"
                  font-size="30" font-weight="bold" fill="#fff">
                  fiverr
                </text>
              </svg>
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
  padding: 1.5rem 0;
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

.logo, .logo-mobile {
  display: flex;
  align-items: center;
}
.logo-mobile img{
height: 50px;
width: 50px;
}
.logo p, .logo-mobile p {
  margin: 0;
  font-size: .8rem;
  line-height: 1;
  padding-top: .2rem;
}

.logo .sub-title {
  font-family: 'Arial', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1.75rem;
  line-height: 1;
}

.logo img {
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
  gap: 1.5rem;
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
  color: var(--accent-color);
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
    background: var(--accent-color);
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
