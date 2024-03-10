<template>
  <apexchart class="2xl:scale-[0.4] !min-w-[200px]" v-if="isMount" :width="width" :options="chartOptions"
    :series="series"></apexchart>
</template>

<script setup>

const isMount = ref(false);

const props = defineProps({
  chartOptions: {
    // height: {
    //   type: [Number, String],
    //   default: 55,
    // },
    width: {
      type: [Number, String],
      default: 200,
    },
    type: Object,
    default: () => ({
      chart: {
        month: "March",
        type: "area",
        toolbar: false,
        zoom: {
          autoScaleYaxis: true,
        },
        // background: "#FFFFFF1A",
      },
      colors: ["#FFFFFF1A"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      legend: {
        show: false,
      },
      grid: {
        row: {
          colors: ["transparent"], // takes an array which will be repeated on columns
          opacity: 1,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.2,
          stops: [20, 100]
        }
      },
      tooltip: {
        enabled: false,
      }
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        data: [400, 500, 350, 400, 450, 500, 450, 450, 400, 450, 470],
      },
    ],
  },
});

function shuffleArray(array) {
    const firstElement = array.shift(); // Remove the first element
    array.push(firstElement); // Add the first element to the end
    return array;
}
// props.series[0].data = shuffleArray(props.series[0].data);


onMounted(() => {
  isMount.value = true;
  nextTick(() => {
    window.dispatchEvent(new Event("resize"));
  });
  setInterval(() => {
    // isMount.value = false;
    props.series[0].data = shuffleArray(props.series[0].data);
    console.log(props.series[0].data)
    // isMount.value = true;
    window.dispatchEvent(new Event("resize"));
  }, 1000)
});
</script>

<style lang="scss" scoped></style>
