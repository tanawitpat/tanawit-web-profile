<template>
  <div class="aboutme-content-birth center-vertical">
    <AboutMeContentDictionary
      word="1996"
      part-of-speech="N."
      meaning="A year which Tanawit was born. Simcity 4 was his favorite PC game when he
      was a child."
    />
  </div>
</template>

<script>
import AboutMeContentDictionary from '@/components/AboutMe/AboutMeContentDictionary'

export default {
  name: 'AboutMeContentBirth',
  components: {
    AboutMeContentDictionary
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-birth {
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
