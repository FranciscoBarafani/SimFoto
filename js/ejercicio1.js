//Imagen Inicial Ejercicio 1
var imgejercicio = new Image();
var canvasejercicio = document.getElementById("canvasejercicio");
var ctxejercicio = canvasejercicio.getContext("2d");
var fileNameejercicio = ""; 
//Valores Imagen Ejercicio
var brilloejercicio = 0;
var contrasteejercicio = 0;
var saturacionejercicio = 0;
var exposicionejercicio = 0;
var ruidoejercicio = 0;
var difuminacionejercicio = 0; 
//Dashboard / Imagen Usuario 
var img = new Image();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fileName = "";
//Valores Imagen Usuario 
var brillo = 0;
var contraste = 0;
var saturacion = 0;
var exposicion = 0;
var ruido = 0;
var difuminacion = 0; 
//Ejercicio Elegido , para creacion y correcion
var elegido = [];
//Imagen Original para restauracion
var imgoriginal; 

$(document).ready(function () {
    $("#brightness-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.brightness(10).render();
            brillo += 10;
        });
    });

    $("#brightness-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.brightness(-10).render();
            brillo -= 10;
        });
    });

    $("#contrast-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.contrast(10).render();
            contraste += 10;
        });
    });

    $("#contrast-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.contrast(-10).render();
            contraste -= 10;
        });
    });

    $("#saturation-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.saturation(10).render();
            saturacion += 10;
        });
    });

    $("#saturation-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.saturation(-10).render();
            saturacion -= 10;
        });
    });

    $("#vibrance-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.vibrance(10).render();
        });
    });

    $("#vibrance-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.vibrance(-10).render();
        });
    });

    $("#exposure-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.exposure(10).render();
            exposicion += 10;
        });
    });

    $("#exposure-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.exposure(-10).render();
            exposicion -= 10;
        });
    });

    $("#noise-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.noise(10).render();
            ruido += 10;
        });
    });

    $("#sharpen-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.sharpen(10).render();
        });
    });

    $("#blur-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.stackBlur(5).render();
            difuminacion += 10;
        });
    });
 
    $("#download-btn").on("click", function (e) {
        var fileExtension = fileName.slice(-4);
        if (fileExtension == ".jpg" || fileExtension == ".png") {
            var actualName = fileName.substring(0, fileName.length - 4);
        }
        download(canvas, actualName + "-edited.jpg");
    });
    
    $("#upload-file").on("change", function () {
        var file = document.querySelector("#upload-file").files[0];
        var reader = new FileReader();

        if (file) {
            fileName = file.name;
            reader.readAsDataURL(file);
        }

        reader.addEventListener(
            "load",
            function () {
                img = new Image();
                imgejercicio = new Image();
                imgoriginal = new Image()
                imgoriginal.src = reader.result;
                imgejercicio.src = reader.result;
                img.src = reader.result;
                img.onload = function () {
                    canvas.width = img.width;                 
                    canvas.height = img.height;                  
                    ctx.drawImage(img, 0, 0, img.width, img.height);                
                    $("#canvas").removeAttr("data-caman-id");                  
                
                };              
                imgejercicio.onload = function (){
                  canvasejercicio.width = imgejercicio.width;
                  canvasejercicio.heigth = imgejercicio.height; 
                  debugger;
                  ctxejercicio.drawImage(img, 0, 0, img.width, img.height);
                  $("#canvasejercicio").removeAttr("data-caman-id");
                }
            },
            false
        );
    });
});
//Set de Ejercicios Definidos 
var ejercicio1 = [10,30,10,-10,0,0];
var ejercicio2 = [-20,20,20,30,0,0];
var ejercicio3 = [-10,10,-50,0,0,0];
//Set Exercise Function // Aplicar 
function prepararejercicio(numero){
    resetearimagenejercicio();
    brillo = 0;
    contraste = 0;
    saturacion = 0;
    exposicion = 0;
    ruido = 0;
    difuminacion = 0; 
    if (numero == 1)
    {
    elegido = ejercicio1;
    }
    else if (numero == 2)
    {
    elegido = ejercicio2;
    }
    else if (numero == 3)
    {
    elegido = ejercicio3; 
    }
    else {
        elegido = prepararejerciciorandom();
    }
    Caman("#canvasejercicio", imgejercicio ,  function () {
    this.brightness(elegido[0]);
        this.contrast(elegido[1]);
        this.saturation(elegido[2]);    
        this.exposure(elegido[3]);
        this.noise(elegido[4]);
        this.stackBlur(elegido[5]);   
        this.render();
    });
}
//Set Exercise Function // Aplicar Random
function prepararejerciciorandom() {
    brillo = 0;
    contraste = 0;
    saturacion = 0;
    exposicion = 0;
    ruido = 0;
    difuminacion = 0; 
    var elegido = [];
    var valores = [-40,-30,-20,-10,0,10,20,30,40];
    var valoresespeciales = [0,0,0,0,0,10,0,0,0,0,0];
    brilloejercicio = valores[Math.floor(Math.random()*(valores.length))];
    contrasteejercicio = valores[Math.floor(Math.random()*(valores.length))];
    saturacionejercicio = valores[Math.floor(Math.random()*(valores.length))];
    exposicionejercicio = valores[Math.floor(Math.random()*(valores.length))];
    ruidoejercicio = valoresespeciales[Math.floor(Math.random()*(valores.length))];
    difuminacionejercicio = valoresespeciales[Math.floor(Math.random()*(valores.length))];
    Caman("#canvasejercicio", imgejercicio ,  function () {
        this.brightness(brilloejercicio);
        this.contrast(contrasteejercicio);
        this.saturation(saturacionejercicio);    
        this.exposure(exposicionejercicio);
        this.noise(ruidoejercicio);
        this.stackBlur(difuminacionejercicio);   
        this.render();
    });
    elegido = [brilloejercicio,contrasteejercicio,saturacionejercicio,exposicionejercicio,ruidoejercicio,difuminacionejercicio]
    return elegido;
};
//Corroborador de Ejercicio
function corroborarejercicio(){
    if (elegido[0] == brillo && elegido[1] == contraste && elegido[2] == saturacion && elegido[3] == exposicion && elegido[4] == ruido && elegido[5] == difuminacion ) 
    alert("Ejercicio Correcto!!")
};
//Correctores 
function correctorbrillo(){
    if (elegido[0] == brillo){
        document.getElementById("botonbrillo").style.backgroundColor = "green";
    }

};
function correctorcontraste(){
    if (elegido[1] == contraste){
        document.getElementById("botoncontraste").style.backgroundColor = "green";
    }
};
function correctorsaturacion(){
    if (elegido[2] == saturacion){
        document.getElementById("botonsaturacion").style.backgroundColor = "green";
    }
};
function correctorexposicion(){
    if (elegido[3] == exposicion){
        document.getElementById("botonexposicion").style.backgroundColor = "green";
        if (elegido[4] == 0 && elegido[5] == 0){
    document.getElementById("botonruido").style.backgroundColor = "green";
    document.getElementById("botondifuminacion").style.backgroundColor = "green";
        }
    }
    
};
function correctorruido(){
    if (elegido[4] == ruido){
        document.getElementById("botonruido").style.backgroundColor = "green";
    }
};
function correctodifuminacion(){
    if (elegido[5] == difuminacion){
        document.getElementById("botondifuminacion").style.backgroundColor = "green";
    }
};
//Download Function 
function download(canvas, filename) {
    var e;
    var lnk = document.createElement("a");

    lnk.download = filename;

    lnk.href = canvas.toDataURL("image/jpeg", 0.8);

    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent(
            "click",
            true,
            true,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        );
        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
};
//This function resets the image to its original state 
function reset() {
    Caman("#canvas", img, function () {
        this.revert();
    })
    brillo = 0;
    contraste = 0;
    saturacion = 0;
    exposicion = 0;
    ruido = 0;
    difuminacion = 0; 
    resetearbotones();
}; 
function resetearbotones(){
    document.getElementById("botonbrillo").style.backgroundColor = "rgb(39, 105, 247)";
    document.getElementById("botoncontraste").style.backgroundColor = "rgb(39, 105, 247)";
    document.getElementById("botonsaturacion").style.backgroundColor = "rgb(39, 105, 247)";
    document.getElementById("botonexposicion").style.backgroundColor = "rgb(39, 105, 247)";
    document.getElementById("botonruido").style.backgroundColor = "rgb(39, 105, 247)";
    document.getElementById("botondifuminacion").style.backgroundColor = "rgb(39, 105, 247)";
};
function resetearimagenejercicio(){
    imgejercicio = imgoriginal;
};