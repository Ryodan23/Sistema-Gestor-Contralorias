$(document).ready(function(){

//Iniciar Audio
$('#btnIniciarAudio').click(function (e) { 
    e.preventDefault();
});

//Detener Audio 
$('#btnDetenerAudio').click(function (e) { 
    e.preventDefault();
});

//Quejas User  
$('#btnQuejaUser').click(function (e) { 
    e.preventDefault();

    var name = $('#nameFuncQuejas').val();

    if(!name.length){
        Swal.fire('¡Alerta!','Debe completar todos los espacios','warning');
    }
});

});