<template>
  <q-btn icon="person" outline @click="dialogOpen = true" />
  <q-dialog v-model="dialogOpen" persistent class="auth-dialog">
      <q-card class="auth-dialog-container">
        <q-card-section class="auth-dialog-title">
          <span class="text-h6">{{ isRegistering ? $t('auth.register') : $t('auth.login') }}</span>
        </q-card-section>
        <q-card-section>
          <div class="auth-dialog-inputs">
            <div v-if="isRegistering">
              <q-input v-model="formData.email" :label="$t('auth.email')" type="email"
                :rules="[validators.required, validators.validateEmail]" />
              <q-input v-model="formData.password" :label="$t('auth.password')" type="password"
                :rules="[validators.required, validators.minimalPassword, validators.confirmation]" />
              <q-input v-model="formData.repeatPassword" :label="$t('auth.password_confirmation')" type="password"
                :rules="[validators.required, validators.confirmation]" />
              <span class="text-subtitle auth-dialog-link" style="margin-right: 5px;" @click="toggleRegister">{{ $t('auth.login_action') }}</span>
            </div>
            <div v-else>
              <q-input v-model="formData.email" :label="$t('auth.email')" type="email"
                :rules="[validators.required]" />
              <q-input v-model="formData.password" :label="$t('auth.password')" type="password"
                :rules="[validators.required]" />
              <span class="text-subtitle auth-dialog-link">{{ $t('auth.forgot_password') }}</span>
              <span class="text-subtitle auth-dialog-link" style="margin-right: 5px;" @click="toggleRegister">{{ $t('auth.register_action') }}</span>
            </div>
          </div>
        </q-card-section>
        <q-card-actions class="auth-dialog-actions" align="between">
          <q-btn :label="$t('cancel')" color="negative" @click="cleanDialog" />
          <q-btn v-if="isRegistering" :label="$t('auth.register')" color="primary" :disable="!isValid" />
          <q-btn v-else :label="$t('auth.login')" color="primary" :disable="!isValid" />
        </q-card-actions>
      </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const defaultFormData = {
  email: '',
  password: '',
  repeatPassword: ''
};

const dialogOpen = ref(false);
const formData = reactive<typeof defaultFormData>({...defaultFormData});
const isRegistering = ref(false);
const isValid = ref(true);

function cleanDialog() {
  dialogOpen.value = false;
  Object.assign(formData, defaultFormData);
  isRegistering.value = false;
}

function toggleRegister() {
  isRegistering.value = !isRegistering.value;
  Object.assign(formData, defaultFormData);
}

const validators = {
  required: (val: string) => !!val || t('auth.errors.required'),
  validateEmail: (val: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val) || t('auth.errors.email'),
  minimalPassword: (val: string) => /^.{8,}$/.test(val) || t('auth.errors.minimal_password'),
  confirmation: () => formData.password === formData.repeatPassword || t('auth.errors.password_confirmation')
}
</script>
<style lang="scss" scoped>
.auth-dialog {
  &-container {
    width: 400px;
    padding: 10px;
  }

  &-title {
    margin-bottom: -15px;
  }

  &-link {
    margin-bottom: 5px;
    display: block;
    cursor: pointer;
    color: $primary;
  }
}
</style>
