<template>
  <div class="triangle-footer" />
</template>

<script>
export default {
  name: 'TriangleFooter'
}
</script>

<style scoped lang="scss">
.triangle-footer {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10rem 100vw;
  border-color: transparent transparent $color-black transparent;

  position: absolute;
  bottom: 0;
  right: 0;

  @include respond(tab-small) {
    border-width: 0 0 7.5rem 100vw;
  }
}
</style>
