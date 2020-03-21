const worker = new Worker('./longSleepWorker.js', { type: 'module' });

const send = message => worker.postMessage({
  message
})

export default {
  worker,
  send
}