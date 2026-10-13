class Inventario {
    constructor() {
        this.array = [];
    }

    agregar(producto) {
        let izquierda = 0;
        let derecha = this.array.length;

        while (izquierda < derecha) {
            let medio = Math.floor((izquierda + derecha) / 2);

            if (this.array[medio].codigo < producto.codigo) {
                izquierda = medio + 1;
            } else {
                derecha = medio;
            }
        }

        if (izquierda < this.array.length &&
            this.array[izquierda].codigo === producto.codigo) {
            return false;
        }

        this.array.push(producto);

        for (let i = this.array.length - 1; i > izquierda; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[izquierda] = producto;

        return true;
    }

    buscar(codigo) {
        let izquierda = 0;
        let derecha = this.array.length - 1;

        while (izquierda <= derecha) {
            let medio = Math.floor((izquierda + derecha) / 2);

            if (this.array[medio].codigo === codigo) {
                return this.array[medio];
            }

            if (codigo < this.array[medio].codigo) {
                derecha = medio - 1;
            } else {
                izquierda = medio + 1;
            }
        }

        return null;
    }

    eliminar(codigo) {
        let izquierda = 0;
        let derecha = this.array.length - 1;
        let posicion = -1;

        while (izquierda <=derecha) {
            let medio = Math.floor((izquierda + derecha) / 2);

            if (this.array[medio].codigo === codigo) {
                posicion = medio;
                break;
            }

            if (codigo < this.array[medio].codigo) {
                derecha = medio - 1;
            } else {
                izquierda = medio + 1;
            }
        }

        if (posicion=== -1) {
            return null;
        }

        let eliminado = this.array[posicion];

        for (let i =posicion; i < this.array.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }

        this.array.pop();

        return eliminado;
    }

    listar() {
        let texto = "";

        if (this.array.length === 0) {
            return "<p>El inventario está vacío.</p>";
        }

        for (let i=0; i < this.array.length; i++) {
            texto += this.array[i].infoHtml();
        }

        return texto;
    }

    extraerPrimero() {
        if (this.array.length === 0) {
            return null;
        }

        let primero = this.array[0];

        for (let i=0; i < this.array.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }

        this.array.pop();

        return primero;
    }

    extraerUltimo() {
        if (this.array.length === 0) {
            return null;
        }

        return this.array.pop();
    }

    listarInverso() {
        let texto = "";

        if (this.array.length === 0) {
            return "<p>El inventario está vacío.</p>";
        }

        for (let i=this.array.length - 1; i >= 0; i--) {
            texto += this.array[i].infoHtml();
        }

        return texto;
    }
}