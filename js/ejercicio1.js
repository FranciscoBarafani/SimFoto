//Imagen Inicial Ejercicio 1
var imgejercicio = new Image();
var canvasejercicio = document.getElementById("canvasejercicio");
var ctxejercicio = canvasejercicio.getContext("2d");
var fileNameejercicio = ""; 

//Dashboard / Imagen Usuario 
var img = new Image();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fileName = "";

$(document).ready(function () {
    $("#brightness-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.brightness(10).render();
        });
    });

    $("#brightness-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.brightness(-10).render();
        });
    });

    $("#contrast-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.contrast(10).render();
        });
    });

    $("#contrast-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.contrast(-10).render();
        });
    });

    $("#saturation-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.saturation(10).render();
        });
    });

    $("#saturation-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.saturation(-10).render();
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
        });
    });

    $("#exposure-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.exposure(-10).render();
        });
    });

    $("#noise-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.noise(10).render();
        });
    });

    $("#sharpen-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.sharpen(10).render();
        });
    });

    $("#sepia-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.sepia(20).render();
        });
    });

    $("#hue-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.hue(10).render();
        });
    });

    $("#blur-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.stackBlur(5).render();
        });
    });

    $("#gamma-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.gamma(0.1).render();
        });
    });

    $("#clip-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.clip(10).render();
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
                }
            },
            false
        );
    });
});

//Set Exercise Function // Aplicar Random
function prepararejercicio() {
  Caman("#canvasejercicio", imgejercicio, function () {
    this.brightness(Math.floor((Math.random() * 50) + 10)).render();
    this.contrast(Math.floor((Math.random() * 50) + 10)).render();  
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