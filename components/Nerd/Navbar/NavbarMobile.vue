<template>
  <div :class="{ active: isNavigationOpen }" class="navigation">
    <nuxt-link to="/" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </nuxt-link>
  </div>
</template>

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

    transition: all 0.4s;

    @include respond(tab-small) {
      top: 3rem;
      right: 3rem;
    }
  }

  &__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $color-grey-dark-3;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }
}
</style>
