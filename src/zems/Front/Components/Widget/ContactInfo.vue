<template>
  <div class="info">
    <BaseTitle>Let’s Connect</BaseTitle>
    <BaseParagraph>
      Have a question or project in mind? Reach out to us today — our team is here to assist you with custom software
      solutions, collaborations, or any general inquiries.
    </BaseParagraph>
    <ul class="medium-2">
      <ListItem>
        <i class="fa-solid fa-envelope"></i>
        <div>
          <SubTitle>Email</SubTitle>
          <BaseParagraph>support@webpoka.com</BaseParagraph>
        </div>
      </ListItem>

      <ListItem>
        <i class="fa-solid fa-phone"></i>
        <div>
          <SubTitle>Call Us</SubTitle>
          <BaseParagraph> 09611-648163</BaseParagraph>
        </div>
      </ListItem>

      <ListItem>
        <i class="fa-solid fa-clock"></i>
        <div>
          <SubTitle>Availability</SubTitle>
          <BaseParagraph>Saturday - Thursday: 9:00 AM - 6:00 PM (BST)</BaseParagraph>
        </div>
      </ListItem>

      <ListItem>
        <i class="fa-solid fa-location-dot"></i>
        <div>
          <SubTitle>Office</SubTitle>
          <BaseParagraph>House 60, Road 27, Mirpur 12, Dhaka, Bangladesh</BaseParagraph>
        </div>
      </ListItem>
    </ul>
  </div>
</template>
<style>
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
  font-size: 1.5rem;
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
</style>
