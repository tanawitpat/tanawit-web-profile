<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-size: 62.5%;

  @include respond(tab-small) {
    font-size: 50%;
  }
}

body {
  font-size: 16px;
  line-height: 1.7;
  font-family: $font-primary;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

button {
  font-family: $font-primary;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
