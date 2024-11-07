<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Login',
    caption: 'quasar.dev',
    icon: 'school',
    link: '#/login'
  },
  {
    title: 'Location',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '#/lokacija'
  },
  {
    title: 'O nama',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '#/o_nama '
  },
  {
    title: 'Popis knjiga',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '#/popis_knjiga'
  },
  {
    title: 'Registration',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '#/registracija'
  },
  {
    title: 'Trazi knjigu',
    caption: '@QuasarFramework',
    icon: 'public',
    link: '#/pretrazivanje'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
