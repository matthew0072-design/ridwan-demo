<!-- app/components/Toast.vue -->
<script setup lang="ts">
const { toast } = useToast()
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
          v-if="toast"
          class="fixed bottom-6 right-6 z-[999] rounded-lg px-4 py-3 text-white shadow-lg"
          :class="toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'"
      >
        {{ toast.message }}
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>