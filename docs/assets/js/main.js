/* const list=document.getElementById("list"),InputTask=document.getElementById("InputTask"),buttonTask=document.getElementById("buttonTask");let meses=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"),f=new Date;document.write(f.getDate()+" de "+meses[f.getMonth()]+" de "+f.getFullYear());const getTask=function(){const e=InputTask.value,t=document.createElement("li"),n=document.createElement("a"),a=document.createTextNode(e);if(""===e)return InputTask.setAttribute("placeholder","Agrega una task valida"),InputTask.className="error",!1;n.appendChild(a),n.setAttribute("href","#"),t.appendChild(n),list.appendChild(t),InputTask.value="";for(let e=0;e<=list.children.length-1;e++)list.children[e].addEventListener("click",function(){this.parentNode.removeChild(this)})},checkInput=function(){InputTask.className="",InputTask.setAttribute("placeholder","Agrega tu tarea")},deleteTask=function(){this.parentNode.removeChild(this)};buttonTask.addEventListener("click",getTask),InputTask.addEventListener("click",checkInput);for(let e=0;e<=list.children.length-1;e++)list.children[e].addEventListener("click",deleteTask); */
const list = document.getElementById("list"),
    InputTask = document.getElementById("InputTask"),
    buttonTask = document.getElementById("buttonTask");

  let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
  let f = new Date();
  document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

  // Funciones
  const getTask = function () {
    const task = InputTask.value,
      newTask = document.createElement("li"),
      enlace = document.createElement("a"),
      contenido = document.createTextNode(task);

    if (task === "") {
      InputTask.setAttribute("placeholder", "Agrega una task valida");
      InputTask.className = "error";
      return false;
    }

    // Agregamos el contenido al enlace
    enlace.appendChild(contenido);
    // Le establecemos un atributo href
    enlace.setAttribute("href", "#");
    // Agrergamos el enlace (a) a la nueva task (li)
    newTask.appendChild(enlace);
    // Agregamos la nueva task a la list
    list.appendChild(newTask);

    InputTask.value = "";

    for (let i = 0; i <= list.children.length - 1; i++) {
      list.children[i].addEventListener("click", function () {
        this.parentNode.removeChild(this);
      });
    }

  };
  const checkInput = function () {
    InputTask.className = "";
    InputTask.setAttribute("placeholder", "Agrega tu tarea");
  };

  const deleteTask = function () {
    this.parentNode.removeChild(this);
  };

  // Eventos

  // Agregar Task
  buttonTask.addEventListener("click", getTask);

  // Comprobar Input
  InputTask.addEventListener("click", checkInput);

  // Borrando Elementos de la list
  for (let i = 0; i <= list.children.length - 1; i++) {
    list.children[i].addEventListener("click", deleteTask);
  }

