<template>
  <button>
    <span v-if="icon" :class="`ri ri-${icon}`"></span>
    <span v-if="label" class="label">{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: [String, Boolean],
    default: false,
  },
  label: {
    type: [String, Boolean],
    default: false,
  },
})
</script>

<style lang="scss" scoped>
button {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  color: rgba(255,255,255,0.8);
  appearance: none;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  height: 40px;
  border-radius: 4px;
  display: flex;
  gap: 5px;
  align-items: center;

  & .ri {
    width: 32px;
    font-size: 18px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255,255,255,0.5);
  }
  & .label {
    padding: 0 10px 0 0;
    flex-grow: 1;
  }
  
  &:hover {
    cursor: pointer;
    background: rgba(255,255,255,0.1);
  }
  &:active {
    background: rgba(255,255,255,0.15);
  }

  &.primary {
    color: rgba(152, 194, 122, 1);
    background: rgba(152, 194, 122, 0.1);
    border: 1px solid rgba(152, 194, 122, 0.2);

    & .ri {
      color: rgba(152, 194, 122, 0.7);
    }

    &:hover {
      background: rgba(152, 194, 122, 0.2);
    }
    &:active {
      background: rgba(152, 194, 122, 0.3);
    }
  }

  &.small {
    height: 30px;

    & .ri {
      width: 24px;
      font-size: 16px;
      height: 24px;
    }
    & .label {
      padding: 0 7px 0 0;
    }
  }
}
</style>