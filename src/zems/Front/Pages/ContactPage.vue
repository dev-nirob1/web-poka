<script setup>
import BreadCrumb from '../Components/Section/BreadCrumb.vue';
import ContactForm from '../Components/Widget/ContactForm.vue';
import ContactInfo from '../Components/Widget/ContactInfo.vue';

</script>

<template>
  <BreadCrumb/>
  <div class="contact">
    <div class="container">
      <div class="medium-2 gap-2">
        <ContactInfo/>
        <ContactForm/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 3.75rem 0;
}

.info,
form {
  padding: 1rem;
}
</style>
