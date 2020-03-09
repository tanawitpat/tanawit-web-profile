<template>
  <div
    @click="setSelectedAboutMeContent(id)"
    :class="{ active: isActive }"
    class="aboutme-card"
  >
    <p class="aboutme-card__title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutMeNavigatorCard',
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    selectedAboutMeContent() {
      return this.$store.state.aboutme.selectedAboutMeContent
    },
    isActive() {
      return this.selectedAboutMeContent === this.id
    }
  },
  methods: {
    setSelectedAboutMeContent(newSelectedAboutMeContent) {
      this.$store.commit(
        'aboutme/setSelectedAboutMeContent',
        newSelectedAboutMeContent
      )
    }
  }
}
</script>

<style scoped lang="scss">
.aboutme-card {
  cursor: pointer;

  &__title {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  &.active {
    transform: scale(1.2);
    color: transparent;
    transition: all 0.2s;
    * {
      background-image: linear-gradient(
        to right bottom,
        $color-white,
        $color-secondary
      );
      -webkit-background-clip: text;
      background-clip: text;
    }
  }

  @include respond(tab-medium) {
    &.active {
      transform: none;
      color: $color-white;
    }
  }
}
</style>
