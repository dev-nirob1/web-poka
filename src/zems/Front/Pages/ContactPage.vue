<script setup>
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';
import ContactForm from '@zems/Front/Components/Widget/ContactForm.vue';
import ContactInfo from '@zems/Front/Components/Widget/ContactInfo.vue';
import LocationSection from '../Components/Section/LocationSection.vue';

</script>

<template>
  <BreadCrumb title="Contact Us" routeName="Contact" url="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <div class="contact">
    <div class="container">
      <div class="medium-2 gap-2">
        <ContactInfo/>
        <ContactForm/>
      </div>
    </div>
    <LocationSection/>
  </div>
</template>

<style scoped>
.contact {
  padding: 3.75rem 0;
}

.contact::after {
  content: '';
  position: absolute;
  background: url('https://webpoka.com/front/images/background/pattern-5.png') right top no-repeat;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: -2;
}
</style>
