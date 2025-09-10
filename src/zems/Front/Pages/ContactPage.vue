<template>
  <div class="contact">
    <div class="container">
      <div class="medium-2">

        <div class="info">
          <BaseTitle>Get in Touch</BaseTitle>
          <BaseParagraph> Contact us for inquiries about our software solutions or partnership opportunities.
          </BaseParagraph>
          <ul class="all-2">
            <ListItem>
              <i class="fa-solid fa-location fa-2x"></i>
              <div>
                <SubTitle>Location</SubTitle>
                <BaseParagraph>Zems Ltd, Dublin D02 XY56, Ireland</BaseParagraph>
              </div>
            </ListItem>
            <ListItem>
              <i class="fa-solid fa-envelope fa-2x"></i>
              <div>
                <SubTitle>Email</SubTitle>
                <BaseParagraph>support@zems.com</BaseParagraph>
              </div>
            </ListItem>
            <ListItem>
              <i class="fa-solid fa-phone fa-2x"></i>
              <div>
                <SubTitle>Call Us</SubTitle>
                <BaseParagraph>+353050436340</BaseParagraph>
              </div>
            </ListItem>
            <ListItem>
              <i class="fa-solid fa-phone fa-2x"></i>
              <div>
                <SubTitle>Availability</SubTitle>
                <BaseParagraph>Mon-Fri: 9AM-6PM GMT</BaseParagraph>
              </div>
            </ListItem>
          </ul>
        </div>


        <div class="form">
          div
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 3.75rem 0;
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
  padding: .5rem;
  border-radius: .5rem;
  box-shadow: var(--box-shadow);
  background-color: var(--white-color);
}

.info ul li i {
  border-radius: .5rem;
  padding: 1rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.info ul li p {
  margin: 0;
  padding-top: .5rem;
}
</style>
