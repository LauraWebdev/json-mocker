<template>
  <Menubar :model="menuItems">
    <template #item="{ label, item, props, root, hasSubmenu }">
      <div tabindex="0" @click="item.action" v-bind="props.action">
        <span v-bind="props.icon" />
        <span v-bind="props.label">{{ label }}</span>
        <span :class="[hasSubmenu && (root ? 'ri-arrow-drop-down-line' : 'ri-arrow-drop-right-line')]" v-bind="props.submenuicon" />
      </div>
    </template>

    <template #end>
      <Button icon="ri-github-fill" label="GitHub" text />
    </template>
  </Menubar>
</template>

<script setup>
const emit = defineEmits(['toggleFunctions', 'toggleSchema', 'togglePreview']);
const props = defineProps({
  showFunctions: Boolean,
  showSchema: Boolean,
  showPreview: Boolean,
});

const menuItems = [
  {
    label: 'File',
    icon: '',
    items: [
      {
        label: 'New',
        icon: 'ri-add-fill'
      },
      {
        separator: true,
      },
      {
        label: 'Copy Schema',
        icon: 'ri-clipboard-fill',
      },
      {
        label: 'Export Schema',
        icon: 'ri-save-3-fill',
      },
      {
        label: 'Import Schema',
        icon: 'ri-folder-open-fill',
      },
      {
        separator: true,
      },
      {
        label: 'Copy Preview',
        icon: 'ri-clipboard-fill',
      },
      {
        label: 'Export Preview',
        icon: 'ri-save-3-fill',
      },
    ]
  },
  {
    label: 'View',
    icon: '',
    items: [
      {
        label: 'Functions',
        icon: () => { return props.showFunctions ? 'ri-eye-line' : 'ri-eye-close-line'; },
        action: () => { emit('toggleFunctions'); }
      },
      {
        label: 'Schema',
        icon: () => { return props.showSchema ? 'ri-eye-line' : 'ri-eye-close-line'; },
        action: () => { emit('toggleSchema'); }
      },
      {
        label: 'Preview',
        icon: () => { return props.showPreview ? 'ri-eye-line' : 'ri-eye-close-line'; },
        action: () => { emit('togglePreview'); }
      },
    ]
  }
];
</script>