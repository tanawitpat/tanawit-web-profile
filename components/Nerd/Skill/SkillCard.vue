<template>
  <p @mouseover="setSelectedSkill(name)" :style="styles" class="skill-card">
    {{ name }}
  </p>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    levelColor: {
      type: String,
      required: false,
      default: 'white'
    }
  },
  computed: {
    styles() {
      return {
        'border-bottom': `1.5px solid ${this.levelColor}`
      }
    }
  },
  methods: {
    setSelectedSkill(newSelectedSkill) {
      this.$store.commit('nerd/setSelectedSkill', newSelectedSkill)
    }
  }
}
</script>

<style scoped lang="scss">
.skill-card {
  color: $color-white;
  background-color: $color-grey-dark-2;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 800;
  margin-bottom: 1rem;
  cursor: default;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    background-image: $color-gradient-primary;
    border-bottom: 1.5px solid $color-white !important;

    @include respond(tab-large) {
      background-image: inherit;
    }
  }
}
</style>
