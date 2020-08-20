<template>
  <b-navbar :shadow="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="/images/logo.png" alt="Lightweight UI components for Vue.js based on Bulma" />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link to="/logout" class="button is-light">Logout</router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
};
</script>