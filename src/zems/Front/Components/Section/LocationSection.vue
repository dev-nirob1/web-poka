<template>
  <section class="location-section">
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.902184548548!2d90.365421315431!3d23.78943799355392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13b6e8b8b8b%3A0x7b8b8b8b8b8b8b8b!2sHome%2060%2C%20Road%2027%2C%20Mirpur%2012%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1610000000000!5m2!1sen!2sbd"
          style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
  </section>
</template>

<style scoped>
.map-container {
  margin-top: 3.75rem;
  height: 80vh;
  width: 100%;
  position: relative;
}
.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

</style>
