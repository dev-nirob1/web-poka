<script setup>
import BreadCrumb from '../Components/Section/BreadCrumb.vue';

</script>

<template>
  <BreadCrumb/>
  <div class="contact">
    <div class="container">
      <div class="medium-2 gap-2">

        <div class="info">
          <BaseTitle>Get in Touch</BaseTitle>
          <BaseParagraph> Contact us for inquiries about our software solutions or partnership opportunities.
          </BaseParagraph>
          <ul class="all-2">
            <ListItem>
              <i class="fa-solid fa-envelope fa-2x"></i>
              <div>
                <SubTitle>Email</SubTitle>
                <BaseParagraph>support@webpoka.com</BaseParagraph>
              </div>
            </ListItem>

            <ListItem>
              <i class="fa-solid fa-phone fa-2x"></i>
              <div>
                <SubTitle>Call Us</SubTitle>
                <BaseParagraph>+880 1711 223344</BaseParagraph>
              </div>
            </ListItem>

            <ListItem>
              <i class="fa-solid fa-clock fa-2x"></i>
              <div>
                <SubTitle>Availability</SubTitle>
                <BaseParagraph>Sat – Thu: 9:00 AM – 6:00 PM (BST)</BaseParagraph>
              </div>
            </ListItem>

            <ListItem>
              <i class="fa-solid fa-location-dot fa-2x"></i>
              <div>
                <SubTitle>Office</SubTitle>
                <BaseParagraph>Dhaka, Bangladesh</BaseParagraph>
              </div>
            </ListItem>
          </ul>
        </div>

        <form>
          <div class="medium-2 align-center gap-1">
            <div>
              <label for="name"></label>
              <InputField id="name" type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <label for="email"></label>
              <InputField id="email" type="email" placeholder="Enter Your Email" />
            </div>
          </div>
          <div>
            <label for="number"></label>
            <InputField id="number" type="number" placeholder="Enter Your number" />
          </div>
          <div>
            <label for="message"></label>
            <BaseTextArea rows="6" id="message" placeholder="Enter Message..."></BaseTextArea>
          </div>
          <BaseButton class="btn-secondary">GET A FREE SERVICE</BaseButton>
        </form>
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

form {
  background: rgb(from var(--highlight-color)r g b / 5%);
}

.info ul {
  list-style: none;
  padding: 0;
  gap: 1rem;
}

.info ul li {
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: var(--box-shadow);
  background-color: var(--white-color);
}

.info ul li i {
  border-radius: .5rem;
  padding: .5rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.info ul li p {
  margin: 0;
  padding-top: .25rem;
}


input,
select,
textarea {
  padding: 1.25rem;
  margin-bottom: 1rem;
  border: none;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  border-radius: .5rem;
}

input:focus,
textarea:focus {
  outline: none;
}

input::placeholder,
textarea::placeholder,
select::placeholder {
  font-size: .9rem;
}
form .btn-secondary {
  border-radius: .5rem;
}
</style>
