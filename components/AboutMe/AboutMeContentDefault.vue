<template>
  <div class="aboutme-content-default">
    <div class="aboutme-content-default__spinner" />
    <p>Hover the right panel to know me more :)</p>
  </div>
</template>

<script>
export default {
  name: 'AboutMeContentDefault'
}
</script>

<style scoped lang="scss">
.aboutme-content-default {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  &__spinner {
    width: 250px;
    height: 250px;
    margin: 1rem auto;
    background-color: $color-white;

    border-radius: 100%;
    -webkit-animation: sk-scaleout 2s infinite ease-in-out;
    animation: sk-scaleout 2s infinite ease-in-out;
  }

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }

  p {
    width: 100%;
  }
}
</style>
