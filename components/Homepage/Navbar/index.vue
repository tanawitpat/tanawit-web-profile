<template>
  <div class="navbar">
    <NavbarDesktop class="navbar__desktop" />
    <NavbarMobile class="navbar__mobile" />
  </div>
</template>

<script>
import NavbarDesktop from '@/components/Homepage/Navbar/NavbarDesktop'
import NavbarMobile from '@/components/Homepage/Navbar/NavbarMobile'

export default {
  name: 'Navbar',
  components: {
    NavbarDesktop,
    NavbarMobile
  }
}
</script>

<style scoped lang="scss">
.navbar {
  &__desktop {
    @include respond(tab-large) {
      display: none;
    }
  }

  &__mobile {
    display: none;

    @include respond(tab-large) {
      display: block;
    }
  }
}
</style>
