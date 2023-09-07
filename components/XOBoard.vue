<template>
  <div>
    <p>Current Player: {{ currentPlayer }}</p>
    <p>Next Move: {{ nextMove }}</p>
  </div>
  <div class="bg-white">
    <div class="font-bold text-white" v-if="!currentPlayer">
      <h3 class="text-black">Choose start player: </h3>
      <button class="p-2 border bg-teal-400 hover:bg-teal-700" @click="startPlayer('X')">X</button>
      <button class="p-2 border bg-blue-400 hover:bg-teal-700" @click="startPlayer('O')">O</button>
    </div>
    <div v-if="currentPlayer" class="flex flex-col gap-3">
      <button @click="reset" class="flex gap-1.5 items-center justify-center p-4 bg-amber-300 shadow-xs border rounded text-xl font-bold hover:bg-amber-500 hover:text-white">
        <Icon name="grommet-icons:power-reset"/>
        <span>Reset</span>
      </button>
      <button @click="undo" class="flex gap-1.5 items-center justify-center p-4 bg-pink-300 shadow-xs border rounded text-xl font-bold hover:bg-pink-500 hover:text-white">
        <Icon name="grommet-icons:undo"/>
        <span>Undo</span>
      </button>
      <XORow>
        <XOBlock :value="board[0]" @click="makeTurn(0)"/>
        <XOBlock :value="board[1]" @click="makeTurn(1)"/>
        <XOBlock :value="board[2]" @click="makeTurn(2)"/>
      </XORow>
      <XORow>
        <XOBlock :value="board[3]" @click="makeTurn(3)"/>
        <XOBlock :value="board[4]" @click="makeTurn(4)"/>
        <XOBlock :value="board[5]" @click="makeTurn(5)"/>
      </XORow>
      <XORow>
        <XOBlock :value="board[6]" @click="makeTurn(6)"/>
        <XOBlock :value="board[7]" @click="makeTurn(7)"/>
        <XOBlock :value="board[8]" @click="makeTurn(8)"/>
      </XORow>

      <p>Winner: {{ checkWinner }}</p>
    </div>

  </div>
</template>

<script setup>
// use 'reactive' instead of 'ref' for Array mutation?
const board = reactive(Array(9).fill(null))
const history = reactive([])
const currentPlayer = ref(null)
const nextMove = computed(() => {
  if (currentPlayer.value === 'X') {
    return 'O'
  }
  else if (currentPlayer.value === 'O') {
    return 'X'
  }
  else {
    return null
  }
})

const startPlayer = (p) => {
  currentPlayer.value = p
}

const makeTurn = (p) => {
  if (board[p]) {}
  else {
    board[p] = currentPlayer.value
    currentPlayer.value = nextMove.value
  }

}

const reset = () => {
  board.map((_, i) => board[i] = null)
}

const undo = () => {
  history[history.length - 2].map((value, index) => board[index] = value)
  console.log(history)
}

const checkWinner = computed(() => {
  const winnerCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
})
watch(board, () => {
  history.push(board.slice())
  console.log(history) //debug
}, {
  deep: true
})
</script>