const {Schema,model} = require('mongoose')





const restSchema = new Schema({
    nombre: {type: String, require:false},
    direccion: {type: String, require:false},
    telefono: {type: String, require:false}, 
    email: {type: String, require:false},
    imagen: {type: String, require:false},
    descripcion: {type: String, require:false},
    latitud: {type: Number, require:false},
    longitud: {type: Number,require:false},
    etiquetas:[{type:String,require:false}],
    N_calificaciones:{type:Number,require:false},
    promedio:{type:Number,require:false},
    comentarios: [
		{
			idUsuario: { type: String, required: true },
			contenido: { type: String, required: true },
			idRestaurante: { type: String, required: true },
		},
	],

    calificaciones: [
		{
			idUsuario: { type: String, required: true},
            calificacion:{type:Number,require:false},
			idRestaurante: { type: String, required: true },
		},
	],

});
module.exports = model("Restaurante", restSchema);