<template>
  <q-btn icon="person" outline @click="dialogOpen = true" />
  <q-dialog v-model="dialogOpen" persistent>
    <q-card class="auth-dialog-container">
      <q-card-section>
        <div class="auth-dialog-inputs">
          <template v-if="isRegistering">
            <q-input v-model="formData.email" :label="$t('auth.email')" type="email" />
            <q-input v-model="formData.password" :label="$t('auth.password')" type="password" />
            <span class="text-subtitle auth-dialog-link">{{ $t('auth.forgot_password') }}</span><br/>
          </template>
          <template v-else>
            <q-input v-model="formData.email" :label="$t('auth.email')" type="email" />
            <q-input v-model="formData.password" :label="$t('auth.password')" type="password" />
            <q-input v-model="formData.repeatPassword" :label="$t('auth.password_confirmation')" type="password" />
          </template>
        </div>
      </q-card-section>
      <q-card-actions class="auth-dialog-actions" align="between">
        <q-btn :label="$t('cancel')" color="negative" @click="dialogOpen = false" />
        <div v-if="isRegistering">
          <q-btn :label="$t('auth.register')" color="secondary" style="margin-right: 5px;" @click="toggleRegister" />
          <q-btn :label="$t('auth.login')" color="primary" />
        </div>
        <div v-else>
          <q-btn :label="$t('auth.login')" color="secondary" style="margin-right: 5px;" @click="toggleRegister" />
          <q-btn :label="$t('auth.register')" color="primary" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

const defaultFormData = {
  email: '',
  password: '',
  repeatPassword: ''
};

const dialogOpen = ref(true);
const formData = reactive<typeof defaultFormData>({...defaultFormData});
const isRegistering = ref(false);

function toggleRegister() {
  isRegistering.value = !isRegistering.value;
  Object.assign(formData, defaultFormData);
}

</script>
<style lang="scss" scoped>
.auth-dialog {
  &-container {
    width: 400px;
    padding: 10px;
  }

  &-link {
    margin-top: 10px;
    display: block;
    cursor: pointer;
    color: $primary;
  }
}
</style>
