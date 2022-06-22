//let cargarDatos = ()=>{
   // alert('Cargando evento...')
//}


const cargarDatos = () => {
    fetch("https://dataserverdaw.herokuapp.com/escritores/xml")
    .then(data => data.text())
    .then(data => new DOMParser().parseFromString(data, "text/xml"))
    .then(xml => {
        let arreglo, element
        element = document.getElementsByName("select")[0]
        arreglo = xml.querySelectorAll("escritores > escritor")
        console.log(element)
        for(let escritor of arreglo) {
          let option = document.createElement("option")
          let valor = escritor.querySelector("nombre") == null ? "" : escritor.querySelector("nombre").textContent
          option.textContent = valor
          let id = escritor.querySelector("id") == null ? "" : escritor.querySelector("id").textContent
          option.setAttribute("value", id)
          element.appendChild(option)
        }
    })    
}



window.addEventListener('DOMContentLoaded',(event) => {
    cargarDatos()
})