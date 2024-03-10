<template>
  <main>
    <nav class="flex items-center fixed top-0 h-[108px] z-50 backdrop-blur-sm w-full">
      <img src="/logo.svg" alt="">
    </nav>
    <!-- <div class="h-[108px]"></div> -->
    <section class="wrapper grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-[108px] pt-8">
      <div data-aos="zoom-in" class="c_pointer rainbow 2xl:col-span-1 md:col-span-2 relative flex items- gap-3 b_c21 r_8 p-6 h-[200px]">
        <p class="h-8 min-w-[32px] b_c26 full_flex r_full">
          <img src="@/assets/svg/home/uptime.svg" alt="">
        </p>
        <div class="w-full">
          <p class="font-medium w leading-8">Uptime</p>
          <p class="mt-3 mb-6 _cba">Uptime over the past 24 hours</p>
          <div class="sm:flex justify-between w-full">
            <div class="flex items-center h-[55px]">
              <p class="_cw">{{ store.uptime.toFixed(2) }} %</p>
            </div>
            <CasesChart class="h-[55px] !min-w-[200px] 2xl:-bottom-12 2xl:-right-16 -bottom-3 sm:right-4 sm:left-auto left-[48px] absolute" />
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" class="c_pointer md:col-span-2 relative r_8 py-6 md:pl-[60px] pl-[20px] sm:h-[200px] sm:flex sm:justify-between justify-center">
        <div class="space-y-9">
          <p class="font-medium w leading-6">Waxpeer online & status</p>
          <div class="flex items-center md:gap-12 gap-6 h-[68px]">
            <div>
              <h1 class="md:text-3xl text-2xl l_48 _cw">{{ store.extension.toFixed(0) }}</h1>
              <p class="_c95">extension</p>
            </div>
            <p class="b_c33 min-w-[1.35px] h-full rounded-[10px] mt-3"></p>
            <div>
              <h1 class="md:text-3xl text-2xl l_48 _cw">{{ store.desktop.toFixed(0) }}</h1>
              <p class="_c95">desktop</p>
            </div>
            <p class="b_c33 min-w-[2px] h-full rounded-[10px] mt-3"></p>
            <div>
              <h1 class="md:text-3xl text-2xl l_48 _cw">{{ store.mobile.toFixed(0) }}</h1>
              <p class="_c95">mobile</p>
            </div>
          </div>
        </div>
        <div class="full_flex sm:w-[240px] h-[240px] sm:-mt-[50px] mt-5 sm:mr-3 relative">
          <div class="atom top-0">
            <div class="electron"></div>
            <div class="electron-alpha"></div>
            <div class="electron-omega"></div>
          </div>
          <p class="_c20 l_48 text-3xl">Stable</p>
        </div>
      </div>
      <div data-aos="zoom-in" class="c_pointer rainbow flex items- gap-3 b_c21 r_8 p-6 h-[200px]">
        <p class="h-8 min-w-[32px] b_c26 full_flex r_full">
          <img src="@/assets/svg/home/uptime.svg" alt="">
        </p>
        <div class="w-full">
          <p class="font-medium w leading-8">Current date</p>
          <p class="mt-3 mb-7 _cba line-clamp-1">Current date and time</p>
          <div class="flex items-end justify-between w-full max-h-[48px]">
            <p class="_cw l_48 text-3xl">{{ store.currentDate }}</p>
            <p class="_cba leading-8 mb-1 text-xl">{{ store.currentTime }}</p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" class="c_pointer rainbow flex items- gap-3 b_c21 r_8 p-6 h-[200px]">
        <p class="h-8 min-w-[32px] b_c26 full_flex r_full">
          <img src="@/assets/svg/home/withdrawal.svg" alt="">
        </p>
        <div class="w-full">
          <p class="font-medium w leading-8">Withdrawal status</p>
          <p class="mt-3 mb-8 _cba">Connected cryptocurrencies</p>
          <div class="flex justify-end gap-4">
            <img src="@/assets/svg/home/withdrawal1.svg" alt="">
            <img src="@/assets/svg/home/withdrawal2.svg" alt="">
            <img src="@/assets/svg/home/withdrawal3.svg" alt="">
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" v-for="i in data" class="c_pointer rainbow flex items- gap-3 b_c21 r_8 p-6 h-[200px]">
        <p class="h-8 min-w-[32px] full_flex r_full" :class="`${i.c_icon}`">
          <img :src="i.icon" alt="">
        </p>
        <div class="w-full">
          <p class="font-medium w leading-8">{{ i.title }}</p>
          <p class="mt-3 mb-7 _cba line-clamp-1">{{ i.description }}</p>
          <p class="text-3xl l_48 text-end" :class="`${i.c_info}`"><span v-if="+i.info || +i.info == 0">{{
                i.info.toFixed(0) }} {{ i.t_info }}</span><span v-else>{{ i.info }}</span></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useTransition } from '@vueuse/core'
import buy_items from "@/assets/svg/home/buy_items.svg";
import pay_bots from "@/assets/svg/home/pay_bots.svg";
import pay from "@/assets/svg/home/pay.svg";
import availability from "@/assets/svg/home/availability.svg";
import server from "@/assets/svg/home/server.svg";
import steam from "@/assets/svg/home/steam.svg";
import api_response from "@/assets/svg/home/api_response.svg";
import last_trade from "@/assets/svg/home/last_trade.svg";
import login from "@/assets/svg/home/login.svg";


const store = reactive({
  uptime: 0,
  extension: 0,
  desktop: 0,
  mobile: 0,
  currentDate: "",
  currentTime: "",
})



function currentDate() {
  const currentTime = new Date();
  store.currentTime = currentTime.toLocaleDateString('en', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })?.split(', ')[1];
  store.currentDate = currentTime.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })?.split('/')?.join('.');
}

currentDate();

const uptime = ref(0)
const extension = ref(0)
const mobile = ref(0)
const buy_item = ref(0)
const pay_bot = ref(0)
const pays = ref(0)
const api_responses = ref(0)
const desktop = ref(0)

const data = ref([
  { c_icon: "b_c26", icon: buy_items, title: "Buy items", description: "Time from the last purchase", info: buy_item.value, t_info: 'sec', c_info: "_cw" },
  { c_icon: "b_c26", icon: pay_bots, title: "Waxpeer pay bots", description: "The number of avaliable bots on Wxpeer pay", info: store.pay_bots, t_info: 'bots', c_info: "_cw" },
  { c_icon: "b_c26", icon: pay, title: "Waxpeer pay", description: "The last successful trade", info: pays.value, t_info: 'sec', c_info: "_cw" },
  { c_icon: "b_c207", icon: availability, title: "Availability of a site", description: "The availability of the home page of the site", info: "available", c_info: "_c20" },
  { c_icon: "b_cec7", icon: server, title: "Server status", description: "The status of the website servers", info: "unstable", c_info: "_cec" },
  { c_icon: "b_c207", icon: steam, title: "Steam Web API", description: "Last check June 3, 2022 02:50:16", info: "stable", c_info: "_c20" },
  { c_icon: "b_c26", icon: api_response, title: "API response", description: "Last request 10 seconds ago", info: api_responses.value, t_info: 'ms', c_info: "_cw" },
  { c_icon: "b_cef7", icon: last_trade, title: "Last trade", description: "The last trade was created 5s ago", info: "canceled", c_info: "_cef" },
  { c_icon: "b_c207", icon: login, title: "Login", description: "Shows either your login is working or not", info: "active", c_info: "_c20" },
])

store.mobile = useTransition(mobile, {
  duration: 2000,
})
store.extension = useTransition(extension, {
  duration: 2000,
})
store.desktop = useTransition(desktop, {
  duration: 2000,
})
store.uptime = useTransition(uptime, {
  duration: 2000,
})

data.value[0].info = useTransition(buy_item, {
  duration: 2000,
})
data.value[1].info = useTransition(pay_bot, {
  duration: 2000,
})
data.value[2].info = useTransition(pays, {
  duration: 2000,
})
data.value[6].info = useTransition(api_responses, {
  duration: 2000,
})


uptime.value = 97.83
extension.value = 12698
desktop.value = 5898
mobile.value = 25697
buy_item.value = 25
pay_bot.value = 259
pays.value = 10
api_responses.value = 2.856;

onBeforeMount(() => {
  setInterval(() => {
    currentDate();
  }, 1000)
})
</script>

<style lang="scss" scoped>
.border_r {
  border-right: 1px solid #333333;
  height: 68px;
}

//* {
// user-select: none;
// }</style>
