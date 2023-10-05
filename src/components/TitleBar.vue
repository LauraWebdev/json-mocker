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
          @click="openGitHub"
          icon="github-fill"
          label="GitHub"
          class="small"
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
});

const openGitHub = () => {
  window.open('https://github.com/LauraWebdev/json-mocker', '_blank')
};
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  background: #1e2126;
  width: env(titlebar-area-width, 100%);
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0 20px 0 calc(env(titlebar-area-x, 0px) + 20px);
  align-items: center;
  gap: 15px;
  -webkit-app-region: drag;
  app-region: drag;

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

    & button {
      -webkit-app-region: no-drag;
      app-region: no-drag;
    }
  }
}
</style>