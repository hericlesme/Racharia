<template>
    <div>
      <h2>Escolha quem vai dividir</h2>
      <el-row>
        <el-transfer
          v-model="selectedUsers"
          :data="users"
          :titles="['Opções', 'Selecionado']">
        </el-transfer>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'UsersStep',
  data () {
    return {
      users: [
        {
          key: 1,
          label: 'Fanny Vieira'
        }, {
          key: 2,
          label: 'Juan Barros'
        }, {
          key: 3,
          label: 'Thayanne Luiza'
        }
      ],
      selectedUsers: []
    }
  },
  watch: {
    selectedUsers (selectedUsers) {
      this.$emit('updateUsers', this.selectedUsers.map((index) => this.users[index - 1]))
    }
  }
}
</script>
<style lang="scss" scoped>
.el-transfer {
  text-align: left;
  display: inline-block;
}
.el-row {
  margin: 10px;
}
</style>
