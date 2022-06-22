//let cargarDatos = ()=>{
   // alert('Cargando evento...')
//}


const cargarDatos = () => {
    fetch("https://dataserverdaw.herokuapp.com/escritores/xml")
    .then(data => data.text())
    .then(data => new DOMParser().parseFromString(data, "text/xml"))
    .then(xml => {
        let arreglo, elemento
        elemento = document.getElementsByName("select")[0]
        arreglo = xml.querySelectorAll("escritores > escritor")
        console.log(elemento)
        for(let escritor of arreglo) {
          let opcion = document.createElement("option")
          let valor = escritor.querySelector("nombre") == null ? "" : escritor.querySelector("nombre").textContent
          option.textContent = valor
          let id = escritor.querySelector("id") == null ? "" : escritor.querySelector("id").textContent
          opcion.setAttribute("value", id)
          elemento.appendChild(opcion)
        }
    })    
}


const selector= document.querySelector("select");
selector.addEventListener("change", () =>{
    fetch("https://dataserverdaw.herokuapp.com/escritores/frases")
    .then((data)=> data.json())
    .then((data)=>{
        let contener= document.querySelector("#frases")
        contener.innerHTML=""
        for(let frase of data.frases){
            if(Number(frase.id_autor)==Number(selector.value)){
                let fAutor=frase.texto
                let opcionL=selector.options[selector.selectedIndex]
                let temp= `
                <div class="col-lg-3">
            <div class="test-inner ">
                <div class="test-author-thumb d-flex">
                    <div class="test-author-info">
                        <h4>${opcionL.textContent}</h4>                                            
                    </div>
                </div>
                <span>${fAutor}</span>
                <i class="fa fa-quote-right"></i>
            </div>
        </div>
                `;
                contener.innerHTML +=temp;
    
            }
        }
    });

});



window.addEventListener('DOMContentLoaded',(event) => {
    cargarDatos()
})