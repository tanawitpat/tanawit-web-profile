<template>
  <div class="aboutme-content-name">
    <div class="aboutme-content-name__image aboutme-image">
      <img
        src="images/aboutme/tanawit1.png"
        alt="Tanawit's Photo"
        class="aboutme-content-name__image--1 zoom-image-on-hover"
      />
      <img
        src="images/aboutme/tanawit2.png"
        alt="Tanawit's Photo"
        class="aboutme-content-name__image--2 zoom-image-on-hover"
      />
    </div>
    <AboutMeLayoutMeaning
      class="aboutme-content-name__dictionary"
      word="Tanawit"
      meaning="Coding enthusiast | Swim lover | Apple Fan | Architectural wonders follower"
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
