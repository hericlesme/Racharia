<template>
  <div>
    <h2>
      Indicações
    </h2>
    <el-row>
        <list-indications />
    </el-row>
    <el-row>
        <el-popover
            placement="top"
            width="160"
            v-model="visible2">
            <p>Você tem certeza sobre isso?</p>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible2 = false">Cancelar</el-button>
                <el-button type="primary" size="mini" @click="visible2 = false">Confirmar</el-button>
            </div>
            <el-button slot="reference">Finalizar</el-button>
        </el-popover>
    </el-row>
  </div>
</template>

<script>
import ListIndications from '@/components/step/confirmation/ListIndications'
export default {
  name: 'ConfirmationStep',
  data () {
    return {
      visible2: false
    }
  },
  components: {
    ListIndications
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin: 10px;
}
</style>
