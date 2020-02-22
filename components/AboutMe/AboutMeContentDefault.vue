<template>
  <div class="aboutme-content-default">
    <img
      :src="require(`~/assets/images/aboutme/tanawit1.png`)"
      alt="Tanawit's Photo"
      class="aboutme-content-default--1"
    />
    <img
      :src="require(`~/assets/images/aboutme/tanawit2.png`)"
      alt="Tanawit's Photo"
      class="aboutme-content-default--2"
    />
  </div>
</template>

<script>
export default {
  name: 'AboutMeContentDefault'
}
</script>

<style scoped lang="scss">
.aboutme-content-default {
  position: relative;
  > img {
    position: absolute;
    width: 280px;
  }
  &--1 {
    position: absolute;
    top: 3rem;
    left: 5rem;
  }
  &--2 {
    position: absolute;
    top: 6rem;
    right: 3rem;
  }
}
</style>
