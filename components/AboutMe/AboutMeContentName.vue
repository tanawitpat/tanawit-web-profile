<template>
  <div class="aboutme-content-name">
    <div class="aboutme-content-name__image aboutme-image-layout">
      <img
        src="images/aboutme/tanawit1.png"
        alt="Tanawit's Photo"
        class="aboutme-content-name__image--1"
      />
      <img
        src="images/aboutme/tanawit2.png"
        alt="Tanawit's Photo"
        class="aboutme-content-name__image--2"
      />
    </div>
    <AboutMeLayoutMeaning
      class="aboutme-content-name__dictionary"
      word="Tanawit"
      meaning="A software developer who graduated with statistics major. Passionated in
      building a software used by tons of users."
    />
  </div>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'

export default {
  name: 'AboutMeContentName',
  components: {
    AboutMeLayoutMeaning
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-name {
  padding: 0 8rem;
  height: 100%;
  position: relative;
  text-align: left;

  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
  }

  &__image {
    padding-bottom: 20rem;

    &--1 {
      grid-column: 2 / 6;
      grid-row: 1 / 5;
    }

    &--2 {
      grid-column: 5 / 9;
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

  &__dictionary {
    position: absolute;
    bottom: 0;
  }
}
</style>
