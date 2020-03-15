<template>
  <div class="aboutme-content-birth center-vertical">
    <div class="aboutme-content-birth__image aboutme-image">
      <img
        src="images/aboutme/restaurant-city.png"
        alt="Restaurant City"
        class="aboutme-content-birth__image--1 zoom-image-on-hover"
      />
      <img
        src="images/aboutme/tanawit-child.png"
        alt="Tanawit's Photo"
        class="aboutme-content-birth__image--2 zoom-image-on-hover"
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

  &__image {
    &--1 {
      grid-column: 2 / 12;
      grid-row: 3 / -1;
      z-index: 1;
    }

    &--2 {
      grid-column: 9 / 20;
      grid-row: 4 / -1;
    }

    @include respond(desktop) {
      &--1 {
        grid-column: 2 / 11;
        grid-row: 4 / -1;
      }

      &--2 {
        grid-column: 10 / 20;
        grid-row: 5 / -1;
      }
    }
  }

  &__meaning {
    position: absolute;
    bottom: 0;
  }
}
</style>
