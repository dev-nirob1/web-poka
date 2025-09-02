<template>
  <div class="services-card">
    <div class="icon">
      <img src="https://zems.uk/services/web-dev.png" alt="icon">
    </div>
    <h5>Web Develpment</h5>
    <p>
      Web Develpment
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
      non.</p>
  </div>
</template>

<style>
.services-card {
  padding: 2rem;
  border-radius: 1rem;
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.services-card::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  background: var(--accent-color);
  z-index: -1;
  opacity: 0;
  transition: all .5s ease-in-out;
}

.services-card::after {
  content: '';
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgb(from var(--highlight-color)r g b / 80%);
  position: absolute;
  bottom: -110%;
  right: -110%;
  z-index: -1;
  /* opacity: ; */
  transition: all .7s ease-in-out;
}

.services-card:hover::after {
  bottom: -45%;
  right: -35%;
}

.services-card:hover::before {
  opacity: 1;
  top: 0;
}

.services-card:hover {
  color: var(--white-color);
  z-index: 2;
}
</style>
