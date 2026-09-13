<template>
  <div>
    <NuxtPage />
    <Toaster richColors position="bottom-right" />
  </div>
</template>
<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
useHead({
  script: [
    {
      innerHTML: `
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/62d49ef17b967b117999fdec/1g878ppvf';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
      `,
    },
  ],
})
</script>
