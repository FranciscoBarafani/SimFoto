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
                  ctxejercicio.drawImage(img, 0, 0, imgejercicio.width, imgejercicio.height);
                  $("#canvasejercicio").removeAttr("data-caman-id");
                  prepararejercicio();
                }
            },
            false
        );
    });
});

//Set Exercise Function // Aplicar Random
function prepararejercicio() {
    var valores = [-40,-30,-20,-10,0,10,20,30,40];
    var valoresespeciales = [0,0,0,0,0,10,0,0,0,0,0];
    brilloejercicio = valores[Math.floor(Math.random()*(valores.length))];
    contrasteejercicio = valores[Math.floor(Math.random()*(valores.length))];
    saturacionejercicio = valores[Math.floor(Math.random()*(valores.length))];
    exposicionejercicio = valores[Math.floor(Math.random()*(valores.length))];
    ruidoejercicio = valoresespeciales[Math.floor(Math.random()*(valores.length))];
    difuminacionejercicio = valoresespeciales[Math.floor(Math.random()*(valores.length))];
    alert([contrasteejercicio, saturacionejercicio])
    Caman("#canvasejercicio", imgejercicio ,  function () {
        this.brightness(brilloejercicio);
        this.contrast(contrasteejercicio);
        this.saturation(saturacionejercicio);    
        this.exposure(exposicionejercicio);
        this.noise(ruidoejercicio);
        this.stackBlur(difuminacionejercicio);   
        this.render();

    });
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
}; 