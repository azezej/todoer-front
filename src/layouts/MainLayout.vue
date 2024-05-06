<template>
  <q-layout view="hHh Lpr fFF">
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
            <router-link to="/" class="header-logo">
              {{ $t('brand.name') }}
              <span class="text-caption">{{ $t('brand.motto') }}</span>
            </router-link>
        </q-toolbar-title>

        <AuthDialog />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-grey-1"
      no-swipe-close
    >
      <WorkspaceItem style="width: 100%" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <div class="footer-copyright">{{ $t('brand.copyright') }}</div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkspaceItem from 'components/drawer/WorkspaceItem.vue';
import AuthDialog from 'components/auth/AuthDialog.vue';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>

<style>
.footer-copyright {
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}

.header-logo {
  text-decoration: none;
  display: block;
  color: unset;
}
</style>
