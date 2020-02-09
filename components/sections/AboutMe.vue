<template>
  <section id="section-aboutme" class="section-aboutme">
    <h1 class="heading-primary u-margin-bottom-medium section-aboutme__heading">
      About Me
    </h1>
    <div class="section-aboutme__content">
      <div class="section-aboutme__terminal">
        <p class="section-aboutme__terminal--title">Full stack developer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          maecenas accumsan lacus vel facilisis volutpat est.
        </p>
      </div>
      <div class="section-aboutme__description">
        <div class="section-aboutme__profile">
          <h3 class="section-aboutme__profile--title">Name</h3>
          <p>Tanawit Pattanaveerangkoon (Oui)</p>
        </div>
        <div class="section-aboutme__profile">
          <h3 class="section-aboutme__profile--title">Year of birth</h3>
          <p>1996</p>
        </div>
        <div class="section-aboutme__profile">
          <h3 class="section-aboutme__profile--title">Location</h3>
          <p>Bangkok, Thailand</p>
        </div>
        <div class="section-aboutme__profile">
          <h3 class="section-aboutme__profile--title">Email</h3>
          <p>tanawit.pat@gmail.com</p>
        </div>
        <div class="section-aboutme__social-network">
          <a href="https://www.linkedin.com/in/tanawitp/">
            <img
              src="~assets/images/logo/linkedin.jpg"
              alt="Linkedin logo"
              class="section-aboutme__social-network--logo"
            />
          </a>
          <a href="https://github.com/tanawitpat">
            <img
              src="~assets/images/logo/github.png"
              alt="Github logo"
              class="section-aboutme__social-network--logo"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-aboutme {
  background-color: $color-grey-light-2;
  background-position: right top;
  background-size: cover;
  padding: 10rem;
  color: $color-grey-dark-1;
  font-size: 1.8rem;

  @include respond(small) {
    font-size: 2rem;
    padding: 3rem;
  }

  &__heading {
    color: $color-primary;
  }

  &__content {
    display: grid;
    grid-template-columns: 55% 45%;
    align-items: center;
    justify-content: center;

    @include respond(large) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
    }
  }

  &__terminal {
    margin: 0 5rem 0 auto;
    color: white;
    background-color: black;
    padding: 2rem;
    max-width: 50rem;
    margin-left: auto;

    &--title {
      font-size: 2.8rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    @include respond(large) {
      margin: 0 auto;
      grid-row: 1 / 3;
      grid-column: 1 / 2;
      text-align: center;
    }

    @include respond(medium) {
      margin: 0rem;
    }
  }

  &__description {
    padding-left: 5rem;

    @include respond(large) {
      margin-top: 5rem;
      padding: 0rem 5rem;
    }

    @include respond(medium) {
      padding: 0;
      text-align: center;
    }
  }

  &__profile {
    margin-bottom: 0.8rem;

    &--title {
      color: $color-secondary;
    }
  }

  &__social-network {
    margin-top: 2rem;

    &--logo {
      width: 60px;
      height: 60px;
      margin-right: 1rem;
    }
  }
}
</style>
