


<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div
        v-if="open"
        id="connectWallet"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
        @click.self="emit('close')"
    >
      <!-- Modal -->
      <div
          class="relative w-full max-w-[500px] p-4 rounded-lg bg-white shadow-2xl"
      >
        <div class="px-5 pt-4 pb-6">
          <!-- Close button -->
          <button
              type="button"
              class="absolute right-5 cursor-pointer top-3 text-3xl leading-none text-gray-500 transition hover:text-black"
              aria-label="Close"
              @click="emit('close')"
          >
            ×
          </button>

          <!-- Title -->
          <h5 class="pr-8 text-lg font-semibold text-gray-900">
            Connect to a wallet
          </h5>

          <!-- Buttons -->
          <div class="space-y-3 pt-10 pb-4">

            <!-- Connect Automatically -->
            <button
                type="button"
                class="w-full rounded-md border cursor-pointer border-gray-300 py-3 transition hover:border-[#5145ff] hover:bg-gray-50"
                @click="connectAutomatically"
            >
              <div class="mx-auto flex w-[90%] items-center justify-between">
                <span class="text-sm font-medium text-gray-800">
                  Connect Automatically
                </span>

                <img
                    src="/asset/img/auto.svg"
                    width="30"
                    height="30"
                    alt=""
                >
              </div>
            </button>

            <!-- Connect Manually -->
            <button
                type="button"
                class="w-full rounded-md cursor-pointer border border-gray-300 py-3 transition hover:border-[#5145ff] hover:bg-gray-50"
                @click="connectManually"
            >
              <div class="mx-auto flex w-[90%] items-center justify-between">
                <span class="text-sm font-medium text-gray-800">
                  Connect Manually
                </span>

                <img
                    src="/asset/img/manual.svg"
                    width="30"
                    height="30"
                    alt=""
                >
              </div>
            </button>

          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
  automatic: []
}>()

const router = useRouter()


const connectAutomatically = () => {
  emit('close')
  router.push('/wallets')
}

const connectManually = () => {
  emit('close')
  router.push('/wallets')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
