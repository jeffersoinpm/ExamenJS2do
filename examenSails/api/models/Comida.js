/**
 * Comida.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombrePlato:{
      type:'string'
    },
    descripcionPlato:{
      type:'string'
    },
    nacionalidad:{
      type:'string'
    },
    numeroPersonas:{
      type:'number'
    },
    picante:{
      type:'boolean'
    },
    imagenUrl:{
      type:'string'
    },
    ingredientes:{
      collection: 'ingredientes',
      via:'comidaId'
    }
  },

};

