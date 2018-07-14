/**
 * Ingredientes.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreIngrediente:{
      type:'string'
    },
    cantidad:{
      type:'number'
    },
    descripcionPreparacion:{
      type:'string'
    },
    opcional:{
      type:'boolean'
    },
    tipoIngrediente:{
      type:'string'
    },
    necesitaRefrigeracion:{
      type:'boolean'
    },
    imagenUrl:{
      type:'string'
    },
    comidaId:{
      model:'comida'
    }
  },

};

