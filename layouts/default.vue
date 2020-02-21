<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 16px;

  @include respond(small) {
    font-size: 50%; //1rem = 8px, 8/16 = 50%
  }
}

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
  word-spacing: 1px;
  font-family: $font-primary;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
