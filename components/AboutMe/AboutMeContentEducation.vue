<template>
  <div class="aboutme-content-education">
    <div class="aboutme-content-education__image aboutme-image-layout">
      <img
        src="images/aboutme/tanawit3.png"
        alt="Tanawit's Photo"
        class="aboutme-content-education__image--1 zoom-image-on-hover"
      />
      <img
        src="images/aboutme/tanawit1.png"
        alt="Tanawit's Photo"
        class="aboutme-content-education__image--2 zoom-image-on-hover"
      />
    </div>
    <AboutMeLayoutMeaning
      class="aboutme-content-education__dictionary"
      word="Statistics"
      meaning="Tanawit graduated from Chulalongkorn University with Statistics major."
    />
  </div>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'

export default {
  name: 'AboutMeContentEducation',
  components: {
    AboutMeLayoutMeaning
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-education {
  padding: 0 8rem;
  height: 100%;
  text-align: left;
  position: relative;

  &__image {
    &--1 {
      grid-column: 3 / 11;
      grid-row: 1 / -1;
    }

    &--2 {
      grid-column: 10 / 18;
      grid-row: 2 / -1;
    }

    @include respond(largest) {
      &--1 {
        grid-column: 3 / 11;
        grid-row: 3 / -1;
      }

      &--2 {
        grid-column: 10 / 18;
        grid-row: 4 / -1;
      }
    }
  }

  &__dictionary {
    position: absolute;
    bottom: 0;
  }
}
</style>
