<template>
  <div class="aboutme-content-developer center-vertical">
    <div class="aboutme-content-developer__image aboutme-image">
      <img
        alt="JavaScript icon"
        src="images/skills/javascript.jpg"
        class="aboutme-content-developer__image--1"
      />
      <img
        alt="Python icon"
        src="images/skills/python.png"
        class="aboutme-content-developer__image--2"
      />
      <img
        alt="Go icon"
        src="images/skills/go.png"
        class="aboutme-content-developer__image--3"
      />
      <img
        alt="React icon"
        src="images/skills/react.png"
        class="aboutme-content-developer__image--4"
      />
      <img
        alt="GraphQL icon"
        src="images/skills/graphql.png"
        class="aboutme-content-developer__image--5"
      />
    </div>
    <AboutMeLayoutMeaning
      class="aboutme-content-developer__meaning"
      word="Software Developer"
      meaning="Tanawit is a software developer who passionated in building a software used by tons of users."
    />
  </div>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'
export default {
  name: 'AboutMeContentDeveloper',
  components: {
    AboutMeLayoutMeaning
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-developer {
  padding: 0 8rem;
  height: 100%;
  text-align: left;
  position: relative;

  &__image {
    img {
      border-radius: 10%;
      background-color: $color-white;

      &:hover {
        transform: scale(1.2);
        transition: transform 0.2s;
      }
    }

    &--1 {
      grid-column: 5 / 8;
      grid-row: 4 / -1;
    }
    &--2 {
      grid-column: 9 / 12;
      grid-row: 4 / -1;
    }
    &--3 {
      grid-column: 13 / 16;
      grid-row: 4 / -1;
    }
    &--4 {
      grid-column: 7 / 10;
      grid-row: 9 / -1;
    }
    &--5 {
      grid-column: 11 / 14;
      grid-row: 9 / -1;
    }
  }

  &__meaning {
    position: absolute;
    bottom: 0;
  }
}
</style>
