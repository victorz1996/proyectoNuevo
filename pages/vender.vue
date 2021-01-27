<template>
  <div class="container">
    <h3>Confimar compra</h3>
    <div class="row">
      <div class="col-sm-8">
        <h3>Productos a comprar</h3>
        <b-list-group v-for="item in carro" :key="item.id">
          <b-list-group-item active class="mt-2 flex-column align-items-start">
            <div class="row">
              <div class="col-sm-2">
                  <img :src="item.productImage" height="100" alt="">
              </div>
              <div class="col-sm-10">
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">{{ item.productName }}</h4>
                  <small>Precio: $ {{ item.productPrice }}</small>
                </div>

                <p class="mb-1">Categoria: {{ item.procutoCategory }}</p>

                <small>Cantidad: {{ item.cantidadComprar }}</small>
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="col-sm-4">
        <h3 class="text-center">Total a pagar</h3>
        <br />
        <h4 class="text-center">$ {{ totalPagar }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carro: {},
      totalPagar: 0,
    }
  },
  mounted() {
    const recibeCarro = this.$store.getters.getCarro
    this.carro = recibeCarro
    console.log(this.carro)
    this.Pagar()
  },
  methods: {
    Pagar() {
      this.carro.forEach((item) => {
        const precioItem = item.productPrice * item.cantidadComprar
        this.totalPagar = this.totalPagar + precioItem
      })
    },
  },
}
</script>
