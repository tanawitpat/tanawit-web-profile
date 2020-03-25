<template>
  <section id="section-home" class="section-home">
    <p>Under development</p>
  </section>
</template>

<style scoped lang="scss">
.section-home {
  background-color: $color-grey-light-1;
  height: 95vh;
  max-height: 800px;
  padding: 0 10rem;
  padding-top: 65px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: $color-white;
    font-size: 8rem;
    text-transform: uppercase;
    font-weight: 800;

    animation-name: moveInBottom;
    animation-duration: 0.8s;
    animation-timing-function: ease-out;
  }
}
</style>
