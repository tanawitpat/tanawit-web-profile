<template>
  <div
    @mouseover="setSelectedAboutMeContent(id)"
    :class="{ active: isActive }"
    class="aboutme-card"
  >
    <h3 class="aboutme-card__title">{{ title }}</h3>
    <p class="aboutme-card__content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutMeCard',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
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
  &__title {
    text-transform: uppercase;
    font-size: 2rem;
  }
  &__content {
    font-size: 2rem;
  }

  &.active {
    transform: scale(1.1);
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
