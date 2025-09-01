<template>
  <div class="pricing-card">
    <h5>Starter Plan</h5>
    <img src="https://webpoka.com/front/images/resource/price-icon-1.png" alt="icon">
    <div class="price flex align-center justify-center">
      <sup>$</sup>
      <h1>99.9</h1>
      <sup>/mon</sup>
    </div>

    <ul>
      <li>Increase traffic 130%</li>
      <li>Backlink analysis</li>
      <li>24/7 support</li>
      <li>10 Free Optimization</li>
      <li>Organic traffic 215%</li>
    </ul>
    <button class="btn">Buy Now</button>
  </div>
</template>
<style>
.pricing-card {
  position: relative;
  text-align: center;
  padding: 3rem 1rem;
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: color 0.4s ease-in-out; /* smooth text color change */
}

/* Overlay background */
.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
  z-index: 0; /* keep behind content */
}

/* Hover overlay */
.pricing-card:hover::before {
  left: 0;
  opacity: 1;
}

/* Make sure all inner content is above overlay */
.pricing-card > * {
  position: relative;
  z-index: 1;
}

/* Change text and button color on hover */
.pricing-card:hover,
.pricing-card:hover h5,
.pricing-card:hover ul li,
.pricing-card:hover .price,
.pricing-card:hover sup {
  color: var(--white-color);
}

/* Button hover adjustment */
.pricing-card .btn {
  padding: 1rem 2.5rem;
  background: orange;
  color: var(--white-color);
  border: none;
  border-radius: 1.5rem;
  position: relative;
  z-index: 1; /* ensure above overlay */
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
}

.pricing-card:hover .btn {
  background: #fff; /* optional: invert button bg on hover */
  color: var(--primary-color); /* optional: match overlay color */
}

</style>
