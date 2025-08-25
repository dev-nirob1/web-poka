<template>
  <!-- ======== Footer section ======== -->
  <footer class="footer">
    <div class="container medium-2 large-4 gap-2 py-2">
      <!-- Footer logo and social media links -->
      <div>
        <a href="#" class="logo">
          <img src="https://www.webpoka.com/front/images/logo-2.png" alt="logo">
        </a>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore aliqua.</p>
        <div>
          <p><span style="color: pink">Location: </span>Rock St 12, Newyork City, USA</p>
          <p><span style="color: pink">Email: </span>info@example.com</p>
          <p><span style="color: pink">Phone: </span>+000-0000-000</p>
        </div>

      </div>

      <!-- Quick navigation links -->
      <div>
        <h5 class="title">Quick Links</h5>
        <ul class="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/properties">All Properties</a></li>
          <li><a href="/agents">Agents</a></li>
          <li><a href="/cities">Explore Cities</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      <!-- Buying/Selling Information -->
      <div>
        <h5 class="title">Helpful Info</h5>
        <ul class="footer-links">
          <li><a href="/how-it-works">How It Works</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <!-- Newsletter subscription form -->
      <div>
        <h5 class="title">Stay Updated</h5>
        <p>Subscribe to get the latest property listings and market tips.</p>
        <form class="subscribe-form">
          <input type="email" placeholder="Your email address" required />
          <button class="btn" type="submit">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- Footer bottom copyright -->
    <div class="footer-bottom">
      <div class="container flex">
        <p>2025 © All rights reserved by Webpoka</p>
        <div class="flex gap-1">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-pinterest-p"></i></a>
        </div>
      </div>
    </div>
  </footer>

</template>

<style scoped>
.footer {
  padding-top: 3rem;
  background: url('https://www.webpoka.com/front/images/background/5.jpg') center top / cover no-repeat;
}

.footer h5 {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

/* Logo Styles */
.footer .logo {
  height: 60px;
  width: auto;
}

/* Social links with hover effects */
.footer .social-links a {
  display: inline-block;
  text-decoration: none;
  font-size: 1.25rem;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-radius: .5rem 0 .5rem 0;
}

.footer .footer-links a:hover {
  color: var(--secondary-color);
}

.footer .social-links a:hover i {
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.footer h5::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 4rem;
  height: 3px;
  background-color: var(--secondary-color);
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
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer ul a::before {
  content: ">";
  font-family: monospace;
  color: var(--secondary-color);
  transition: all 0.3s ease;
}

/* Newsletter form */
.footer .subscribe-form {
  display: flex;
}

.footer .subscribe-form input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: none;
  outline: none;
  border-radius: 1rem 0 0 0;
  font-size: 0.95rem;
  background-color: var(--white-color);
}

.footer .subscribe-form .btn {
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  border-radius: 0 0 1rem 0;
}

/* Footer copyright bar*/
.footer .footer-bottom {
  padding: .5rem;
}

.footer .footer-bottom a {
  text-decoration: none;
}

.footer .footer-bottom a:hover {
  text-decoration: underline;
}

.footer .footer-bottom .flex {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 768px) {
  .footer .footer-bottom .flex {
    flex-direction: row;
  }
}
</style>
