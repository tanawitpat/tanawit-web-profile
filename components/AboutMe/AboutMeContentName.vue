<template>
  <div class="aboutme-content-name">
    <div class="aboutme-content-name__image">
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
    <AboutMeContentDictionary
      class="aboutme-content-name__dictionary"
      word="Tanawit"
      meaning="A software developer who graduated with statistics major. Passionated in
      building a software used by tons of users."
    />
  </div>
</template>

<script>
import AboutMeContentDictionary from '@/components/AboutMe/AboutMeContentDictionary'

export default {
  name: 'AboutMeContentName',
  components: {
    AboutMeContentDictionary
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
    position: absolute;
    top: 0;
    height: 100%;
    padding-bottom: 20rem;

    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(20, 1fr);

    img {
      width: 100%;
    }

    &--1 {
      grid-column: 3 / 11;
      grid-row: 1 / 13;
    }

    &--2 {
      grid-column: 10 / 18;
      grid-row: 3 / 15;
    }
  }

  &__dictionary {
    position: absolute;
    bottom: 0;
  }
}
</style>
