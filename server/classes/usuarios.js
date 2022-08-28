
/*{
    id:'1358135dsad3sa',
    nombre: 'Fernando',
    sala:'Videojuego'
}*/

class Usuarios {
    constructor() {
        this.personas = [];//id nombre
    }
    agreagraPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;

    }

    getPersona(id) {
        let persona = this.personas.filter(perso => perso.id === id)[0];
        return persona;
    }
    getPersonas() {
        return this.personas;

    }
    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala)

        return personasEnSala
    }
    borrarPesona(id) {

        let personaBorrada = this.getPersona(id);


        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;
    }
}
module.exports = {
    Usuarios
}
