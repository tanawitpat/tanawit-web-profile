<template>
  <div :class="{ disabled: disabled }" class="button">
    <button v-if="type === 'button'">
      {{ label }}
    </button>
    <nuxt-link v-else-if="type === 'link' && isInternalPath" :to="path">
      {{ label }}
    </nuxt-link>
    <a v-else-if="type === 'link' && !isInternalPath" :href="path">
      {{ label }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    path: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    isInternalPath: {
      type: Boolean,
      required: false,
      default: true
    },
    type: {
      type: String,
      required: false,
      default: 'button',
      validator(value) {
        return ['button', 'link'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  margin: auto;
  width: fit-content;

  > * {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 700;
    color: $color-white;
    background-color: $color-primary;
    height: 4.5rem;
    border: none;
    border-radius: 2rem;
    padding: 0 2rem;
    cursor: pointer;

    display: flex;
    align-items: center;

    &:hover {
      color: $color-white;
      background-color: $color-blue-dark-2;
    }
  }
}

.button.disabled {
  > * {
    background-color: $color-grey-dark-4;
    pointer-events: none;
    cursor: not-allowed;

    &:hover {
      color: $color-white;
      background-color: $color-primary;
    }
  }
}
</style>
