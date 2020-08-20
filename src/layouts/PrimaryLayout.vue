<template>
  <div>
    <navbar></navbar>

    <main>
      <slot></slot>
    </main>

    <footer class="footer has-background-info-light">
      <div class="content has-text-centered">
        <p class="has-text-info">Todos os direitos reservados 2020</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "primary-layout",
  components: {
    Navbar,
  },
};
</script>

