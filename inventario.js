class Inventario{
    constructor(){
        // 0,1
        this.primero = null;
        this.ultimo=null;
    }
    agregar(nuevoProducto){
        if(this.primero==null){
            this.primero=nuevoProducto;
            this.ultimo=nuevoProducto;
        }
        if(this.ultimo.codigo < nuevoProducto.codigo){
            this.ultimo.siguiente = nuevoProducto;
            nuevoProducto.anterior = this.ultimo;
            this.ultimo = nuevoProducto;
        }
        if(nuevoProducto.codigo== 1){
            nuevoProducto.siguiente= this.primero;
            this.primero.anterior = nuevoProducto;
            this.primero = nuevoProducto;
        }
        let aux = this.primero;
        if(nuevoProducto.codigo>1 && nuevoProducto.codigo< this.ultimo.codigo){
            console.log('entra al if');
            while(aux.siguiente!= null){
                console.log('entró al while')
                if(nuevoProducto.codigo>=aux.codigo && nuevoProducto.codigo<aux.siguiente.codigo){
                    console.log('entró al segundo if');
                    nuevoProducto.siguiente = aux.siguiente;
                    aux.siguiente.anterior = nuevoProducto;
                    nuevoProducto.anterior = aux;
                    aux.siguiente = nuevoProducto;
                    return;
                }
                else{
                    aux = aux.siguiente;
                }
            }
        }
    }
    info(){
        return codigo, nombre, cantidad, costo;
    }
    eliminar(codigo){ //LISTA ENLAZADA LISTO    
        if(this.primero.codigo == codigo){
            this.primero = this.primero.siguiente;
            return;
        }
        else{
            let aux = this.primero;
            while(aux != null){
                if(aux.siguiente.codigo == codigo){
                    aux.siguiente = aux.siguiente.siguiente;
                    aux.siguiente.siguiente.anterior = aux.siguiente;
                    
                    return;
                }
                else{
                    aux = aux.siguiente;
                }
            }
        }
    }
   
    listado(){ //LISTA ENLAZADA LISTO
        let res="";
      let aux=this.primero;
      let auxUltimo= this.ultimo;
      while (aux!=null){
	      res += aux.datos() + " " + "<br>";
  	    aux=aux.siguiente;
      }
      return res;
    }
    
    
    listadoInverso(){ // LISTA ENLAZADA LISTO
        let res = "";
      let aux = this.primero;
      let aux2;
      while(aux!=null){
        aux2 = res + "";
        res = "";
        res += aux.datos() + "<br> "+ aux2;

        aux = aux.siguiente
      }
      return res;
    }
    /*busquedaBinaria(codigo){
        let start = 0;
        let end = Number(this.productos.length)-1;
        let middle = Math.round((start+end/2));
        while(start<end){
            if(this.productos[middle].codigo ==codigo){
                return middle;
            }
            if(this.productos[middle].codigo<codigo){
                if(this.productos[end].codigo==codigo){
                    return end;
                }
                start = middle;
                middle = Math.ceil((start+end)/2);
                
            }
            if(this.productos[middle].codigo>codigo){
                if(this.productos[start].codigo==codigo){
                    return start;
                }
                end = middle;
                middle = Math.ceil((start+end)/2);
            }
            if(middle == start || middle == end){
                return null;
            }
        }
    } */
    buscar(codigo){ //LISTA ENLAZADA LISTO
        if(this.primero.codigo == codigo){
            return this.primero.datos();
        }
        else{
            let aux = this.primero;
            while(aux!= null){
                if(aux.codigo == codigo){
                    return aux.datos();
                }
                else{
                    aux= aux.siguiente;
                }
            }
        }
    }
}