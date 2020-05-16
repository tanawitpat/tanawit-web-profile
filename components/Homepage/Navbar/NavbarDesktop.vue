<template>
  <div class="navigation">
    <div class="navigation__container">
      <div class="navigation__left">
        <div v-scroll-to="'#section-home'">
          <nuxt-link to="">TANAWIT</nuxt-link>
        </div>
      </div>
      <div class="navigation__right">
        <div v-scroll-to="'#section-aboutme'">About me</div>
        <div v-scroll-to="'#section-experience'">Experience</div>
        <div v-scroll-to="'#section-activity'">Activities</div>
        <Button path="/nerd" label="Nerd Mode" type="link" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Homepage/Button'

export default {
  name: 'NavbarDesktop',
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
.navigation {
  position: fixed;
  height: 6.5rem;
  width: 100%;
  background-color: rgba($color-white, 0.95);
  z-index: 100;
  box-shadow: 0 1px 4px $color-grey-light-1;

  &__container {
    max-width: 120rem;
    width: auto;
    height: 100%;
    margin: auto;
    padding: 0 3rem;

    display: flex;
    justify-content: space-between;
  }

  &__left {
    margin: auto 0;

    a {
      text-decoration: none;
      font-size: 2.4rem;
      font-weight: 700;
      color: $color-primary;
      cursor: pointer;
    }
  }

  &__right {
    font-size: 1.8rem;
    color: $color-grey-dark-1;
    font-weight: 700;
    margin: auto 0;

    display: flex;
    align-items: center;

    > div {
      cursor: pointer;

      &:hover {
        color: $color-primary;
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
}
</style>
