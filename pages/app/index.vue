<template>
  <BlockColumn>
    <Block>
      <NuxtLink to="/app/xo">Tic Tac Toe</NuxtLink>
    </Block>
    <Block>
      <NuxtLink to="/app/todo">Todo</NuxtLink>
    </Block>
    <Block>
      <NuxtLink to="/app/stock">Stock Management</NuxtLink>
    </Block>
  </BlockColumn>

  <BlockColumn>
    <Block>
      <div>
        {{ useUser() }}
        <button
          @click="
            useUser().setUser({
              username: 'iho4741',
              email: 'none',
              avatar: 'https://avatars.githubusercontent.com/u/11296164?v=4',
            })
          "
          class="bg-sky-700 text-white"
        >
          Action
        </button>
      </div>
    </Block>
  </BlockColumn>
</template>
