<template>
  <div class="min-h-screen bg-[#232538] text-white">

    <!-- HEADER -->
    <header class="fixed inset-x-0 top-0 z-50 h-[66px] bg-black">
      <div class="flex h-full w-full items-center justify-between px-4 py-2">

        <!-- Logo + Brand -->
        <a
            href="#"
            class="flex h-full shrink-0 items-center no-underline ml-16"
        >
          <svg
              class="h-10 w-10 text-white"
              viewBox="0 0 24 24"
              aria-hidden="true"
          >
            <path
                fill="currentColor"
                d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.02c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.53-.29-5.19-1.27-5.19-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.9 10.9 0 0 1 5.7 0c2.17-1.48 3.13-1.17 3.13-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.35-5.21 5.64.41.36.78 1.06.78 2.14v3.18c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z"
            />
          </svg>

          <span class="ml-2 whitespace-nowrap text-xl font-normal text-[#a5a8a9]">
    GitHub Blockchain Support
  </span>
        </a>


        <!-- MOBILE CONNECT -->
        <button
            @click="homeWalletModal"
            class="ml-auto mr-3 flex h-10 items-center cursor-pointer text-[10px] text-[#aaa] no-underline lg:hidden"
        >
          Connect
        </button>


        <!-- MOBILE MENU BUTTON -->
        <button
            type="button"
            class="flex h-8 w-8 items-center justify-center rounded border-0 bg-transparent p-1 text-white lg:hidden"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="Toggle navigation"
        >
          <span class="flex flex-col gap-[4px]">
            <span class="block h-[1px] w-[18px] bg-white"></span>
            <span class="block h-[1px] w-[18px] bg-white"></span>
            <span class="block h-[1px] w-[18px] bg-white"></span>
          </span>
        </button>


        <!-- DESKTOP NAVIGATION -->
        <nav class="hidden mr-24 items-center lg:flex">

          <a
              href="javascript:void(0)"
              class="flex items-center rounded-[3px] border border-[#eee] px-2.5 py-[15px] text-base text-white no-underline"
          >
            Talk to an Agent
          </a>

          <button
              @click="homeWalletModal"
              class="ml-[14px] flex items-center cursor-pointer text-base text-[#fff] no-underline px-2.5 py-[15px]"
          >
            Connect
          </button>

        </nav>

      </div>


      <!-- MOBILE DROPDOWN -->
      <div
          v-if="mobileMenuOpen"
          class="border-t border-[#222] bg-black px-4 py-3 lg:hidden"
      >
        <a
            href="javascript:void(0)"
            class="block py-2 text-[10px] text-white no-underline"
        >
          Talk to an Agent
        </a>
      </div>

    </header>

    <main class="pt-10">

      <!-- HERO -->
      <section
          class="relative overflow-hidden bg-[linear-gradient(105deg,#4d45a9_0%,#41419b_32%,#292b43_62%,#232538_100%)]"
      >
        <div class="mx-auto w-full max-w-[700px] relative flex justify-center items-center flex-col h-[450px] px-4 pb-[85px] pt-[42px]">

          <h1 class="text-center text-[32px] font-bold leading-[1.2] text-white">
            Hello, What can we help you with?
          </h1>

          <!-- SEARCH -->
          <div
              class="mx-auto mt-2 flex h-[60px] w-full items-center rounded border border-[#ccc] bg-[#242538]"
          >
            <button
                type="button"
                class="flex h-full w-[45px] shrink-0 items-center justify-center border-0 bg-transparent"
            >
          <span class="text-[30px] leading-none text-[#aaa]">
            ⌕
          </span>
            </button>

            <input
                type="text"
                placeholder="Enter the search item here..."
                class="h-full w-full border-0 bg-transparent pr-3.5 text-base text-white outline-none placeholder:text-[#888]"
            />
          </div>

          <!-- POPULAR LINKS -->
          <div
              class="mt-14 text-center text-base leading-8 text-white w-7/8"
          >
            Popular Links:

            <template
                v-for="(link, index) in popularLinks"
                :key="link"
            >
              <button
                  type="button"
                  @click="homeWalletModal"
                  class="text-white underline cursor-pointer"
              >
                {{ link }}
              </button><span v-if="index < popularLinks.length - 1">, </span>
            </template>
          </div>

        </div>

        <!-- GLOW -->
        <div
            class="pointer-events-none absolute
         -bottom-[180px] -left-[190px]
         h-[520px] w-[520px]
         rounded-full
         bg-[radial-gradient(circle_at_38%_65%,#e3a8ff_0%,#d89cff_25%,rgba(174,119,255,.65)_45%,rgba(91,72,190,.25)_65%,transparent_78%)]
         blur-[18px]"
        ></div>
      </section>


      <!-- QUICK ACTION CARDS -->
      <section
          class="relative z-10 mx-auto -mt-[50px] px-4"
      >
        <div class="flex flex-col md:flex-row md:justify-center md:space-x-10 gap-2 sm:flex-row sm:justify-between relative">

          <!-- BROWSE ARTICLES -->
          <button
              type="button"
              class="flex md:justify-between md:gap-4 md:w-[327px] h-[132px] rounded-[15px] w-12 bg-[#1f1f1f] p-2.5 text-left text-white shadow-lg sm:w-[calc(50%-6px)]"
          >
            <div class="flex items-center justify-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  class="h-[80px] w-[100px]"
              >
                <circle
                    cx="32.05"
                    cy="30.65"
                    r="14.75"
                    fill="none"
                    stroke="#475867"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <path
                    d="M38.27 44.4v8.8a1.56 1.56 0 0 1-1.55 1.56h-9.33a1.56 1.56 0 0 1-1.55-1.56v-8.8"
                    fill="none"
                    stroke="#475867"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="30.54"
                    y1="58.94"
                    x2="33.65"
                    y2="58.94"
                    fill="none"
                    stroke="#475867"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <path
                    d="M42.35 34.16a10.65 10.65 0 0 1-.87 1.91"
                    fill="none"
                    stroke="#475867"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <path
                    d="M32.05 19.78a10.88 10.88 0 0 1 10.88 10.87"
                    fill="none"
                    stroke="#475867"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="32"
                    y1="5.06"
                    x2="32"
                    y2="9.64"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="13.9"
                    y1="12.55"
                    x2="17.14"
                    y2="15.79"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="50.1"
                    y1="48.75"
                    x2="46.86"
                    y2="45.52"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="6.4"
                    y1="30.65"
                    x2="10.98"
                    y2="30.65"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="57.6"
                    y1="30.65"
                    x2="53.02"
                    y2="30.65"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="13.9"
                    y1="48.75"
                    x2="17.14"
                    y2="45.52"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="50.1"
                    y1="12.55"
                    x2="46.86"
                    y2="15.79"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
              </svg>
            </div>

            <div>
              <strong class="text-base font-bold">
                Browse articles
              </strong>

              <p class="mt-1 text-base leading-6 text-[#fff]">
                Explore How-To's and learn best practices from our knowledge...
              </p>
            </div>
          </button>


          <!-- TALK TO AN AGENT -->
          <button
              type="button"
              class="flex md:justify-between md:gap-4 md:w-[327px] h-[132px] rounded-[15px] w-12 bg-[#1f1f1f] p-2.5 text-left text-white shadow-lg sm:w-[calc(50%-6px)]"
          >
            <div class="flex items-center justify-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  class="h-[80px] w-[100px]"
              >
                <circle
                    cx="20.96"
                    cy="22.89"
                    r="7.95"
                    fill="none"
                    stroke="#475867"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <path
                    d="M5.05 51A15.91 15.91 0 0 1 22 35.12c8.45.55 14.84 8 14.84 16.42v4.26A3.18 3.18 0 0 1 33.68 59H8.23a3.18 3.18 0 0 1-3.18-3.2Z"
                    fill="none"
                    stroke="#475867"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <path
                    d="M37.86 23.4A11.63 11.63 0 1 1 40.38 26l-4 1.49Z"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="47.43"
                    y1="11.11"
                    x2="47.43"
                    y2="17.11"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />

                <line
                    x1="47.43"
                    y1="20.75"
                    x2="47.43"
                    y2="21.75"
                    fill="none"
                    stroke="#88cbf5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
              </svg>
            </div>

            <div class="mt-2">
              <strong class="text-base font-bold">
                Talk to an Agent
              </strong>

              <p class="mt-1 text-base leading-6 text-[#fff]">
                Connect with Live Help Desk Support Agent Now...
              </p>
            </div>
          </button>

        </div>
      </section>


      <!-- KNOWLEDGE BASE -->
      <section
          class="w-full bg-[#242538] px-4 pb-12 pt-[50px]"
      >
        <div class="flex flex-col items-center justify-between gap-2">
          <h2 class="text-[28px] font-bold leading-8 text-white">
            Knowledge base
          </h2>

          <a
              href="#"
              class="text-base leading-6 text-white"
          >
            View all article
          </a>
        </div>

        <div
            class="mx-auto mt-4 grid w-full max-w-[1000px] grid-cols-1 gap-x-6 gap-y-4 px-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <a
              v-for="item in articles"
              :key="item.title"
              href="/wallets"
              class="w-full"
          >
            <article
                class="flex min-h-[206px] w-full flex-col items-center justify-center rounded-[5px] border border-[#ccc] bg-[rgba(31,33,50,.22)] px-2.5 text-center"
            >

              <svg
                  class="h-[35px] w-[35px] text-white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
              >
                <path
                    fill="currentColor"
                    d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.02c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.53-.29-5.19-1.27-5.19-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.9 10.9 0 0 1 5.7 0c2.17-1.48 3.13-1.17 3.13-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.35-5.21 5.64.41.36.78 1.06.78 2.14v3.18c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z"
                />
              </svg>

              <h3 class="mt-3 mb-3 text-base font-bold leading-6">
                {{ item.title }}
              </h3>

              <p class="mb-3 max-w-[280px] text-center text-[10px] leading-4">
                {{ item.text }}
              </p>

            </article>
          </a>
        </div>
      </section>


      <!-- FAQ -->
      <section
          class="border-t border-[#dee2e6] px-4 pb-10 pt-8"
      >

        <div
            class="mx-auto max-w-[760px]"
        >

          <div class="mb-8 flex items-center justify-between">
            <h2 class="text-2xl font-bold leading-7">
              Frequently Asked Questions
            </h2>

            <NuxtLink
                to="/wallets"
                class="text-base leading-6"
            >
              View all article
            </NuxtLink>
          </div>


          <div class="grid grid-cols-1 sm:grid-cols-2">

            <div
                v-for="(faq, index) in faqs"
                :key="faq"
                class="min-h-[83px] border-b border-[#dee2e6] px-5 py-[18px] sm:border-r"
                :class="{
      'sm:border-r-0': index % 2 === 1,
      'sm:border-b-0': index >= faqs.length - 2
    }"
            >
              <NuxtLink
                  to="/wallets "
                  class="flex items-start text-base font-bold leading-6 text-white no-underline"
              >
                <!-- Plus icon -->
                <span class="relative mt-[2px] mr-2 h-5 w-5 shrink-0">
      <span
          class="absolute left-1/2 top-1/2 h-[2px] w-3
                 -translate-x-1/2 -translate-y-1/2 bg-[#8e7cff]"
      ></span>

      <span
          class="absolute left-1/2 top-1/2 h-3 w-[2px]
                 -translate-x-1/2 -translate-y-1/2 bg-[#8e7cff]"
      ></span>
    </span>

                <div class="mr-5">
                  <strong>
                    {{ faq }}
                  </strong>

                  <small class="mt-[5px] block text-sm font-normal leading-5">
                    Modified recently
                  </small>
                </div>
              </NuxtLink>
            </div>

          </div>

        </div>

      </section>

    </main>


    <!-- CHAT -->
    <div
        class="fixed bottom-[50px] right-2 z-40 flex w-[174px] flex-col items-end gap-2 max-[600px]:scale-[.85] max-[600px]:origin-bottom-right"
    >

      <div
          class="h-[34px] w-[174px] rounded-[6px_6px_0_0] bg-white px-[10px] py-[11px] text-[9px] text-[#555] shadow-[0_2px_8px_#0005]"
      >
        👋 Hi! How can we help?
      </div>

      <button
          type="button"
          class="rounded-[5px] border border-[#48c78e] bg-white px-[10px] py-[6px] text-[9px] text-[#20a86b]"
      >
        I have a question
      </button>

      <button
          type="button"
          class="rounded-[5px] border border-[#48c78e] bg-white px-[10px] py-[6px] text-[9px] text-[#20a86b]"
      >
        Tell me more
      </button>

      <div
          class="relative mt-[5px] grid h-[37px] w-[37px] place-items-center rounded-full bg-[#17b66b] text-[19px]"
      >
        👨🏻‍💻

        <i
            class="absolute -right-px -top-0.5 grid h-3 w-3 place-items-center rounded-full bg-[#d52323] text-[8px] not-italic text-white"
        >
          1
        </i>
      </div>

    </div>


    <!-- FOOTER -->
    <footer class="h-[56px] bg-[#1f1f1f] flex items-center justify-center text-center text-base leading-6">
      Helpdesk Software by Freshdesk | Cookie policy
    </footer>
    <HomeWalletModal :open="showHomeWalletModal" @close="showHomeWalletModal = false" />
  </div>
</template>


<script setup lang="ts">

const mobileMenuOpen = ref(false)
const showConnectWallet = ref(false)
const showHomeWalletModal = ref(false)
const homeWalletModal = () => { showHomeWalletModal.value = true }
const connectAutomatically = () => {
  showConnectWallet.value = false
  console.log('Connect automatically')
}



const popularLinks = [
  'Wallet Issues',
  'Synchronization',
  'Security',
  'Notification',
  'Claim Issues',
  'Transactions',
  'Development'
]

const articles = [
  ['Transaction', 'Blockchain transactions are secure, transparent, and irreversible. Once recorded, they cannot be altered.'],
  ['Wallet Encryption', 'Wallet encryption provides digital security by securing private keys with advanced encryption.'],
  ['Open-Source Software', 'Blockchain technology is open-source, allowing anyone to contribute, improve, and customize it.'],
  ['MIGRATION', 'Click here for migration and resolve any migration related issues.'],
  ['RECTIFICATION', 'Click here to rectify all your wallet issues.'],
  ['CLAIM', 'Click here to claim tokens or receive any token claiming related issues.'],
  ['SWAP', 'Click here to swap tokens or resolve issues related to token swaps.'],
  ['SLIPPAGE', 'Click here for slippage or transaction fee related issues.'],
  ['CLAIM AIRDROP', 'Click here to claim airdrop or resolve errors encountered during airdrop claim.'],
  ['STAKING', 'Click here to resolve issues encountered while staking/unstaking.'],
  ['WHITELIST', 'Click here to whitelist your asset or resolve whitelist related issues.'],
  ['CROSS TRANSFER', 'Click here to resolve cross bridge or cross transfer issues.'],
  ['NFTs', 'Click here to resolve NFT related issues.'],
  ['LOCKED ACCOUNT', 'Click here to resolve locked account or wallet related issues.'],
  ['LOGIN ERROR', 'Click here to resolve errors encountered during login.'],
  ['WALLET GLITCH', 'Click here to resolve wallet issues.'],
  ['DEFI FARMING', 'Click here for DeFi or farming related issues.'],
  ['VALIDATION', 'Click here to validate your wallet and resolve issues.'],
  ['TRANSACTION DELAY', 'Click here for any transaction related errors.'],
  ['MISSING/IRREGULAR BALANCE', 'Click here to resolve lost or missing funds.'],
  ['RECOVERY', 'Click here for wallet recovery.'],
  ['BUY TOKEN/COIN', 'Click here to learn your account is to be marked as a trusted payment source to start trading.'],
  ['EXCHANGE', 'Click here to resolve exchange or resolve errors encountered during token exchange.'],
  ['BRIDGING', 'Click here to bridge tokens or resolve bridging related issues.'],
  ['Premium Dev Support', 'Click here to access premium step-by-step tutorials tailored for developers.']
].map(([title, text]) => ({
  title,
  text
}))

const faqs = [
  'How do I deploy a smart contract to a blockchain network using GitHub Actions?',
  'Can I use GitHub to store and manage blockchain project dependencies?',
  'How can I integrate GitHub with a decentralized application (dApp) for version control?',
  'What are the best practices for securing private keys in a GitHub-hosted blockchain project?'
]

</script>