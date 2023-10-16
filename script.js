function calcularTiempo() {

    const reloj = document.querySelector(".reloj")
    let tiempo = new Date
    let horas = tiempo.getHours()
    let minutos = tiempo.getMinutes()
    let segundos = tiempo.getSeconds()

    horas = horas < 10 ? "0"+horas : horas
    minutos = minutos < 10 ? "0"+minutos : minutos
    segundos = segundos < 10 ? "0"+segundos : segundos

    let pantallaReloj = `${horas}:${minutos}:${segundos}`
    reloj.innerHTML = pantallaReloj
    
}

setInterval(calcularTiempo,1000)