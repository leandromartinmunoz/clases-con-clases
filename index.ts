//minuto 9
class Departamento{
    nombre:string
    constructor(nombre){
        this.nombre = nombre
    }
    getName(){

    }

}


class Piso{
    nombre:string
    
    constructor(nombre){
        this.nombre = nombre
        

    }

}


class Edificio{
    pisos:Piso[]
    constructor(pisos:Piso[]){
        this.pisos  =pisos;
    }
    addDepartamentoToPiso(nombreDepiso:string, Departamento:Departamento[]){
        this.pisos.find
    }
    getDepartamentoByPiso(nombreDepiso:string):Departamento[]{

        return true;
    }
    }
   }




class Banda{
    members: string[]
    albums:any[]
    constructor(members:string[], albums: Album[]) {
        this.members = members;
        this.albums = albums;

    }
}

function main(){
    const unAlbum = new Album("album de marce", []);
    
    const unaBanda = new Banda(["marce"], []);
    console.log(unaBanda.members);
    console.log(unaBanda.albums);
}

main();