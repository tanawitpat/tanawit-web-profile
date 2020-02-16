<template>
  <div class="skill-card">
    <img :src="require(`~/assets/${iconPath}`)" :alt="name + ' icon'" class />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    iconPath: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.skill-card {
  width: 21%;
  margin-bottom: 3rem;

  @include respond(small) {
    width: 34%;
  }

  img {
    width: 75px;
    height: auto;
    border-radius: 15%;
    margin-bottom: 1rem;
    background-color: $color-white;
  }

  p {
    text-align: center;
    line-height: 1.4;
  }
}
</style>
