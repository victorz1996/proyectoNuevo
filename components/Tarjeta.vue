<template>
  <div>
    <b-card
      :title="item.productName"
      :img-src="item.productImage"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        <h4>Price: {{ item.productPrice }}</h4>
        <p>{{ item.productDescription }}</p>
      </b-card-text>
      <div class="row">
        <div class="col-6">
          <b-button @click="anadirProducto(item)" variant="success"
            >Añadir</b-button
          >
        </div>
        <div class="col-6">
          <b-button @click="quitarProducto(item)" variant="danger">Quitar</b-button>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object },
  },
  data: () => ({}),
  methods: {
    anadirProducto(producto) {
        this.$emit('producto', producto)
    },
    quitarProducto(producto) {
        this.$emit('quitarProducto', producto)
    },
  },
  mounted() {},
}
</script>
