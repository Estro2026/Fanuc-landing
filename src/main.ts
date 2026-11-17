import { createApp } from 'vue'
import App from './App.vue'
import './styles/tokens.css'
import './styles/typography.css'
import './styles/layout.css'

import { initRevealCut } from './composables/revealCut'

createApp(App).mount('#app')
initRevealCut()
