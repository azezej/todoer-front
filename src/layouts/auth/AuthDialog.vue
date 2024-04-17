<template>
  <q-btn icon="person" outline @click="dialogOpen = true" />
  <q-dialog v-model="dialogOpen" persistent>
    <q-card class="auth-dialog-container">
      <q-card-section>
        <div class="auth-dialog-inputs" @keydown.prevent.enter="() => {console.log('hello')}">
          <q-input v-model="formData.email" label="Email" type="email" />
          <q-input v-model="formData.password" label="Password" type="password" />
        </div>
        <a class="text-subtitle auth-dialog-link" href="#">Forgot password</a><br/>
      </q-card-section>
      <q-card-actions class="auth-dialog-actions" align="between">
        <q-btn label="Cancel" color="negative" @click="dialogOpen = false" />
        <div>
          <q-btn label="Register" color="primary" style="margin-right: 5px;" />
          <q-btn label="Login" color="primary" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

const dialogOpen = ref(true);
const formData = reactive({
  email: '',
  password: '',
});
</script>
<style lang="scss" scoped>
.auth-dialog {
  &-container {
    width: 400px;
    padding: 10px;
  }

  &-inputs {
    margin-bottom: 10px;
  }

  &-link {
    margin-top: 15px;
    cursor: pointer;
    color: $primary;
  }

  &-actions {
    margin-top: 20px;
  }
}
</style>
