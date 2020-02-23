<template>
  <div class="aboutme-content-hobby center-vertical">
    <AboutMeContentDictionary
      word="Swimming & Cycling"
      part-of-speech="N."
      meaning="Activities that Tanawit does in his free time."
    />
  </div>
</template>

<script>
import AboutMeContentDictionary from '@/components/AboutMe/AboutMeContentDictionary'

export default {
  name: 'AboutMeContentHobby',
  components: {
    AboutMeContentDictionary
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-hobby {
  padding: 0 8rem;
  height: 100%;
  text-align: left;
  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
    span {
      margin-left: 1rem;
      font-size: 2rem;
    }
  }
}
</style>
