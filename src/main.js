import { createApp } from 'vue';
import App from './App.vue';
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-one-themes';
import 'splitpanes/dist/splitpanes.css';

import './assets/reset.scss';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import './assets/splitpanes.scss';
import './assets/style.scss';
import 'remixicon/fonts/remixicon.css';

const app = createApp(App);
app.component('VAceEditor', VAceEditor);

app.mount('#app');
