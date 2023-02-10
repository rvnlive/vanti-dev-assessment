import {defineStore} from 'pinia';
import {ref, computed} from 'vue';

export const useRecords = defineStore('records', () => {
  // todo: get this information from the server
  const capacity = ref(120)
  const floors = computed(() => {
    return [
        "Penthouse",
        "Floor 2",
        "Floor 1",
        "Ground",
        "Basement"
    ]
  })
  const history = computed(() => {
    const out = [];
    const then = new Date("2023-02-04T12:34:56");
    for (let i = 0; i < 200; i++) {
      for (let floor of floors.value) {
        out.push({
          time: new Date(then.getTime() + (30*60*1000*i)),
          peopleCount: Math.round(Math.random() * capacity.value),
          floor
        })
      }
    }
    return out;
  })

  return {
    capacity,
    floors,
    history
  }
})
