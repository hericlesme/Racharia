<template>
    <el-steps :active="active" finish-status="success">
        <el-step title="Preço"></el-step>
        <el-step title="Participantes"></el-step>
        <el-step title="Concluir"></el-step>
    </el-steps>
</template>

<script>
export default {
  props: {
    active: 0
  }
}
</script>
