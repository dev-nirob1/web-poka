<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="why-choose">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="content">
          <SectionTitle title="Get Benifits and Advantages Market Goal" subTitle="Why Choose Us" />
          <h5 class="highlight">
            A Satisfied Customer is best for business
          </h5>
          <h4>The activity of buying or selling goods and services in all the countries of the world.</h4>
          <ul>
            <li>What is global market economy?</li>
            <li>Why is the global market so important?</li>
            <li>Which is the largest stock market in the world?</li>
          </ul>
          <button class="btn">Free Consultation</button>
        </div>

        <div class="cards">
          <div v-for="f in 3" :key="f" class="why-card">
            <div class="card-content">
              <div class="icon">
                <i class="fa-solid fa-dollar"></i>
              </div>
              <div>
                <h5>Offerdable Price</h5>
                <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod incididunt aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-card:nth-child(2) {
  margin-left: 5rem;
}

.why-card {
  background: var(--white-color);
  position: relative;
  padding: 2.5rem 2.5rem 0;
  border-radius: 1rem;
  max-width: 430px;
  width: 100%;
}

.why-card:not(:last-child) {
  margin-bottom: 2rem;
}

.why-card .card-content {
  position: relative;
  padding-left: 88px;
  padding-bottom: 35px;
}

.why-card p {
  margin-bottom: 0;
  font-size: 14px;
}

.why-card .icon {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4em;
  padding-top: 1.5rem;
  border-radius: 50px 50px 0 0;
  background: #ED1C24;
  text-align: center;
  color: var(--white-color);
}


.why-choose {
  padding: 3.75rem 0;
}

.why-choose .highlight {
  color: #FF00F6;
  margin: 1rem 0;
}

.why-choose ul {
  margin: 1rem 0;
}

.why-choose ul li {
  margin: .5rem 0;
}

.why-choose .btn {
  border: none;
  color: var(--white-color);
  background: #2200BD;
  padding: 1.25rem 2.5rem;
  border-radius: 2rem;
}
</style>
