<template>
  <section>
    <div class="video relative">
      <button class="btn"><i class="fa-solid fa-play fa-2x"></i></button>
    </div>
  </section>
</template>
<style scoped>
.video {
  max-width: 990px;
  width: 100%;
  height: 85vh;
  margin: 0 auto;
  background: url('https://www.webpoka.com/front/images/background/pattern-6.png') center / cover no-repeat, linear-gradient(to right, #EA33A6, #6538D6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
}

.video .btn {
  border: none;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
