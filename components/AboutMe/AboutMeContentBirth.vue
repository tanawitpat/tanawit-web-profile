<template>
  <div class="aboutme-content-birth center-vertical">
    <div class="aboutme-content-birth__image aboutme-image-layout">
      <img
        src="images/aboutme/restaurant-city.png"
        alt="Restaurant City"
        class="aboutme-content-birth__image--1"
      />
      <img
        src="images/aboutme/tanawit-child.png"
        alt="Tanawit's Photo"
        class="aboutme-content-birth__image--2"
      />
    </div>
    <AboutMeLayoutMeaning
      class="aboutme-content-birth__meaning"
      word="1996"
      meaning="A year which Tanawit was born. If you had played Restaurant City while you were in a high school, we are friends!."
    />
  </div>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'

export default {
  name: 'AboutMeContentBirth',
  components: {
    AboutMeLayoutMeaning
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-birth {
  padding: 0 8rem;
  height: 100%;
  text-align: left;
  position: relative;

  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
  }

  &__image {
    padding-bottom: 20rem;

    &--1 {
      grid-column: 1 / 5;
      grid-row: 3 / 5;
      z-index: 1;
    }

    &--2 {
      grid-column: 4 / 9;
      grid-row: 2 / 6;
    }

    @include respond(largest) {
      &--1 {
        grid-column: 1 / 6;
      }

      &--2 {
        grid-column: 5 / 10;
      }
    }
  }

  &__meaning {
    margin-top: 20rem;
  }
}
</style>
