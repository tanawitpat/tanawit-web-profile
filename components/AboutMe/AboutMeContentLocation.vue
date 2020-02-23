<template>
  <div class="aboutme-content-location center-vertical">
    <AboutMeContentDictionary
      word="Bangkok"
      part-of-speech="N."
      meaning="A capital city of Thailand and the city where Tanawit grew up and has been
      living."
    />
  </div>
</template>

<script>
import AboutMeContentDictionary from '@/components/AboutMe/AboutMeContentDictionary'

export default {
  name: 'AboutMeContentLocation',
  components: {
    AboutMeContentDictionary
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-location {
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
