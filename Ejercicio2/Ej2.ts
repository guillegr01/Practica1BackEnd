/**Hacer una función que tenga por parámetro de entrada un string y devuelva un numero.
 * Esta función se encargara de conocer la seguridad de una contraseña. Criterios:
    1-Se debe convertir el string en array, cada carácter será un elemento del array
    2-Si tiene una letra y un numero sumará 1  
    3-Si tiene tres números seguidos restará 1 
    4-Si la contraseña supera los 20 caracteres sumará 2
    5-Si la contraseña es menor a 10 caracteres restará 1
    TODO 6-Si tiene caracteres especiales sumará 1 */

    function SeguridadContraseña(contrasena:string): number {

        //separo el string en caracteres y los meto en el array
        let ArrayCaracteres = contrasena.split('');
    
        //creo una variable para guardar el valor que acabe teniendo la contraseña
        let valorContrasena: number = 0;
    
        //verifico si tiene una letra y un numero
        let boolNum: boolean = false;
        let boolLetras: boolean = false;
    
        ArrayCaracteres.forEach((elem,i) => {
            if (/[0-9]/.test(elem)) {
                boolNum=true;
            } else if(/[a-z]/.test(elem) || /[A-Z]/.test(elem)) {
                boolLetras = true;
            }
        })
    
        if (boolNum && boolLetras) {
            valorContrasena+=1;
        }


        //Compruebo si la contraseña tiene 3 numeros seguidos
        let contNumSeguidos: number = 0;

        ArrayCaracteres.forEach((elem:string,i:number) => {

            if (!isNaN(parseInt(elem))) {
                contNumSeguidos++
            } else {
                contNumSeguidos=0
            }
        
            if (contNumSeguidos===3) {
                valorContrasena-=1
                return
            }
        
        })
        
        //verifico si la contraseña tiene mas de 20 caracteres o menos de 20
        if (ArrayCaracteres.length>20) {
            valorContrasena +=2;
        } else if (ArrayCaracteres.length<10) {
            valorContrasena-=1;
        }

        /**Compruebo si tiene caracteres especiales con la funcion find, la 
         * cual me devolvera el caracter especial que haya encontrado.
        */
        
        let caracteresEspeciales = /[@#$%^&*()_+[\]{}|~`!-]/

        const caracterEncontrado = ArrayCaracteres.find((elem:string):boolean => {
            
            return caracteresEspeciales.test(elem)

        })

        /**Al ser la variable caracterEncontrado string|undefined, la puedo
         * evaluar en un if como si fuese un boolean
        */
        if (caracterEncontrado) {
            valorContrasena+=1;
        }

        return valorContrasena;
    
    }

    console.log("La puntuacion de la contraseña es: "+SeguridadContraseña("$$GuillePutoAmo140719$$"))