<script setup>
import { RouterLink } from 'vue-router';
import BaseParagraph from '../Elements/BaseParagraph.vue';
import ListItem from '../Elements/ListItem.vue';
import BaseImage from '../Elements/BaseImage.vue';
import SubTitle from '../Elements/SubTitle.vue';

</script>

<template>
  <!-- ======== Footer section ======== -->
  <footer class="footer">
    <div class="footer-bg"></div>
    <div class="container medium-2 large-4 gap-2 py-3">
      <!-- Footer logo and social media links -->
      <div class="contact-info">
        <RouterLink to="" class="logo">
          <BaseImage image="https://www.webpoka.com/front/images/logo-2.png" alt="logo" />
        </RouterLink>

        <BaseParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et
          dolore aliqua.</BaseParagraph>
        <ul>
          <ListItem><span>Location: </span>Rock St 12, Newyork City, USA</ListItem>
          <ListItem><span>Email: </span>info@example.com</ListItem>
          <ListItem><span>Phone: </span>+000-0000-000</ListItem>
        </ul>
      </div>

      <!-- Quick navigation links -->
      <div>
        <SubTitle>Links</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="">Contact Us</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Submit a Ticket</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Visit Knowledge Base</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Support System</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Refund Policy</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Professional Services</RouterLink>
          </ListItem>
        </ul>
      </div>

      <!-- Buying/Selling Information -->
      <div>
        <SubTitle>Support</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="">Home</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Services</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">About Us</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Testimonials</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">News</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Contact</RouterLink>
          </ListItem>
        </ul>
      </div>

      <!-- Newsletter subscription form -->
      <div class="gallery-img">
        <SubTitle>Gallery</SubTitle>
        <div class="all-2 large-3 gap-1">
          <BaseImage v-for="i in 6" :key="i"
            image="https://www.webpoka.com/front/images/gallery/footer-gallery-thumb-1.jpg" alt="gallery image" />
        </div>

      </div>
    </div>

    <!-- Footer bottom copyright -->
    <div class="footer-bottom">
      <div class="container flex">
        <p>2025 © All rights reserved by Webpoka</p>
        <div class="social-icon">
          <RouterLink to=""><i class="fab fa-facebook-f"></i></RouterLink>
          <RouterLink to=""><i class="fab fa-twitter"></i></RouterLink>
          <RouterLink to=""><i class="fab fa-instagram"></i></RouterLink>
          <RouterLink to=""><i class="fab fa-pinterest-p"></i></RouterLink>
        </div>
      </div>
    </div>
  </footer>

</template>

<style scoped>
.footer {
  position: relative;
  color: var(--light-color);
  padding-top: 3rem;
}

.footer-bg {
  background: url('https://www.webpoka.com/front/images/background/5.jpg') right bottom no-repeat;
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

/* Logo Styles */
.footer .logo {
  height: 60px;
  width: auto;
}

.footer .sub-title {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer .sub-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2rem;
  height: 1px;
  background-color: var(--secondary-color);
}

.footer .contact-info {
  font-size: 1rem;
}

.footer .contact-info ul {
  gap: .5rem;
}

.footer .contact-info span {
  color: var(--highlight-color);
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer ul a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer ul a::before {
  content: ">";
  font-family: monospace;
  transition: all 0.3s ease;
}

.footer .gallery-img img {
  max-width: 120px;
  width: 100%;
}

/* Footer copyright bar*/
.footer .footer-bottom {
  padding: .5rem;
  font-weight: 600;
}

.footer .footer-bottom .flex {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom .social-icon {
  display: flex;
  gap: .5rem;
}

.footer-bottom a {
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white-color);
}

@media (min-width: 768px) {
  .footer .footer-bottom .flex {
    flex-direction: row;
  }
}
</style>
