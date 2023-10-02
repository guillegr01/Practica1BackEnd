/**Hacer una función que transforme fechas de formato 12 horas en formato 24 horas siguiendo el ejemplo:
¨8:00 am¨ -> "0800"
"8:00 pm" -> "2000"*/

function TransformaFormatoHora(horaformato12:string) {

    //separo las horas y minutos de am/pm
    const Horaformato12Partido = horaformato12.split(' ')

    //separo horas y minutos que estan guardados en la pos 0 de la variable anterior 
    const HorasyMinutos = Horaformato12Partido[0].split(':')

    const AmPm = Horaformato12Partido[1]

    //parseo horas de string a number ya que tengo que hacer operaciones no la variable
    let horas = parseInt(HorasyMinutos[0])

    let minutos = HorasyMinutos[1]

    if (AmPm==="am") {
        horas+=0
        if (horas===12) {
            horas = 0
        }
    } else if (AmPm==="pm") {
        if (horas===12) {
            horas+=0
        }else {
            horas+=12
        }
    }

    let formato24

    if (horas<10) {
        formato24  = "0"+horas.toString() + minutos + AmPm
        return formato24
    }else {
        formato24  = horas.toString() + minutos + AmPm
        return formato24
    }

}

console.log(TransformaFormatoHora("1:00 pm"))