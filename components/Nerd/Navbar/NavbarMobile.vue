<template>
  <div @click="setIsNavigationOpen(false)" class="navigation">
    <nuxt-link to="/" class="navigation__button">
      <span class="navigation__icon" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
    setIsNavigationOpen(newIsNavigationOpen) {
      this.$store.commit('homepage/setIsNavigationOpen', newIsNavigationOpen)
    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  &__button {
    background-color: $color-grey-dark-2;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 4rem;
    right: 4rem;
    border-radius: 50%;
    z-index: 105;
    box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
    text-align: center;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    @include respond(tab-small) {
      top: 3rem;
      right: 3rem;
    }
  }

  &__icon {
    width: 33px;
    height: 33px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:before,
    &:after {
      position: absolute;
      content: '';
      height: 33px;
      width: 3px;
      background-color: $color-grey-dark-3;
    }

    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
