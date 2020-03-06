<template>
  <div class="aboutme-content-hobby center-vertical">
    <AboutMeLayoutMeaning
      word="Swimming"
      meaning="An activity that Tanawit does in his free time."
    />
  </div>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'

export default {
  name: 'AboutMeContentHobby',
  components: {
    AboutMeLayoutMeaning
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
  }
}
</style>
