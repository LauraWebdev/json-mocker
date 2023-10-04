<template>
  <header>
    <nav>
      <div class="brand">Json<span>Mocker</span></div>
      <MButton
        @click="emit('fileNew')"
        icon="add-line"
        label="New"
        class="small"
      />
      <MButton
        @click="emit('fileSave')"
        icon="save-line"
        label="Save"
        class="small"
      />
      <MButton
        @click="emit('fileOpen')"
        icon="folder-open-line"
        label="Load"
        class="small"
      />
    </nav>

    <nav>
      <MButton
        @click="emit('toggleUseables')"
        :icon="useablesActive ? 'eye-line' : 'eye-off-line'"
        label="Useables"
        class="small"
        :class="{'primary' : useablesActive}"
      />
      <MButton
          @click="emit('toggleSchema')"
          :icon="schemaActive ? 'eye-line' : 'eye-off-line'"
          label="Schema"
          class="small"
          :class="{'primary' : schemaActive}"
      />
      <MButton
          @click="emit('togglePreview')"
          :icon="previewActive ? 'eye-line' : 'eye-off-line'"
          label="Preview"
          class="small"
          :class="{'primary' : previewActive}"
      />
    </nav>
  </header>
</template>

<script setup>
import MButton from "./MButton.vue";

const emit = defineEmits([
    'fileNew',
    'fileOpen',
    'fileSave',
    'toggleUseables',
    'toggleSchema',
    'togglePreview'
]);

defineProps({
  useablesActive: {
    type: Boolean,
    default: false,
  },
  schemaActive: {
    type: Boolean,
    default: false,
  },
  previewActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  background: #1e2126;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0 20px;
  align-items: center;
  gap: 15px;

  & .brand {
    font-size: 1.25rem;
    margin-right: 50px;

    & span {
      font-weight: bold;
      color: #98c27a;
    }
  }

  & nav {
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>