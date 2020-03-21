<template>
  <div >
    <div>Sleep time (ms)</div>
    <input v-model="sleepTime" />
    <div>Array to reverse</div>
    <input v-model="arrayToReverse" />
    <div>
    <button @click="startWorker">Start worker</button>
    </div>
    <div>Worker message</div>
    <div>{{workerMessage}}</div>
  </div>
</template>

<script>
import longSleepWorker from '@/long-sleep-worker';

export default {
  data() {
    return {
      workerMessage: "No message yet",
      sleepTime: 1000,
      arrayToReverse: "1,2,3,4"
    }
  },
  mounted() {
    longSleepWorker.worker.onmessage = event => {
      this.workerMessage = event.data
    }
  },
  methods: {
    startWorker() {
      longSleepWorker.send({
        sleep: this.sleepTime,
        array: this.arrayToReverse.split(',')
      })
    }
  }
}
</script>