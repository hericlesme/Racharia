<template>
    <div id="transfer-panel">
        <el-transfer
            v-model="selectedUser"
            :data="data"
            :titles="['Opções', 'Selecionado']">
        </el-transfer>
    </div>
</template>
<script>
export default {
  name: 'UsersStep',
  props: {
    updateUser: Function
  },
  data () {
    const users = [
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
    ]
    return {
      data: users,
      selectedUser: []
    }
  },
  watch: {
    selectedUser (option) {
      const user = this.data.filter(user => { return user.key === option[0] })
      this.updateUser(user)
    }
  }
}
</script>
<style>
#transfer-panel{
    text-align: left;
    display: inline-block;
    margin: 50px 0 20px;
}
</style>
