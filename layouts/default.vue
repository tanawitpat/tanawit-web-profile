<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 16px;

  @include respond(small) {
    font-size: 50%; //1rem = 8px, 8/16 = 50%
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
