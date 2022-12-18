$(document).ready(function(){

//Resolucion Admin  
$('#btnSolucionAdmin').click(function (e) { 
    e.preventDefault();

    var response = $('#resolucionAdmin').val();

    if(!response.length){
        Swal.fire('¡Alerta!','Debe completar los espacios requeridos','warning');
    }else{
        Swal.fire('¡Exito!','Se notifico al usuario correctamente','success');

        setTimeout(function(){  
           window.location.href = 'problemas.html';
        },2000);
    }
});

//Agregar Contraloria  
$('#btnAgregarContraloria').click(function (e) { 
    e.preventDefault();

    $('#nameOption').text('Agregar Contraloría');
    $('#btnAgregarContraForm').show();
    $('#btnEditarContraForm').hide();
    $('#btnEliminarContraForm').hide();

    $('#dataEditForm').hide();
    $('#dataDeleteForm').hide();
    $('#dataAddForm').show();

    $('#btnAgregarContraForm').click(function (e) { 
        e.preventDefault();

        var name = $('#nameAdd').val();
        var phone = $('#phoneAdd').val();
        var mail = $('#emailAdd').val();
        var ubication = $('#ubicationAdd').val();
        

        if(!name.length || !phone.length || !mail.length|| !ubication.length){
            Swal.fire('¡Alerta!','Debe completar los espacios','warning');
        }else{
            Swal.fire('¡Exito!','Se agrego la contraloría correctamente','success');

            setTimeout(function(){  
               window.location.href = 'mantenimineto.html';
            },2000);
        }
    });
});

//Editar Contraloria  
$('#btnEditarContraloria').click(function (e) { 
    e.preventDefault();

    $('#nameOption').text('Editar Contraloría');
    $('#btnEditarContraForm').show();
    $('#btnAgregarContraForm').hide();
    $('#btnEliminarContraForm').hide();

    $('#dataAddForm').hide();
    $('#dataDeleteForm').hide();
    $('#dataEditForm').show();

    $('#btnEditarContraForm').click(function (e) { 
        e.preventDefault();

        var name = $('#nameEdit').val();
        var phone = $('#phoneEdit').val();
        var mail = $('#emailEdit').val();
        var ubication = $('#ubicationEdit').val();
        

        if(!name.length || !phone.length || !mail.length|| !ubication.length){
            Swal.fire('¡Alerta!','Debe completar los espacios','warning');
        }else{
            Swal.fire('¡Exito!','Se edito la contraloría correctamente','success');

            setTimeout(function(){  
                window.location.href = 'mantenimineto.html';
            },2000);
        }
    });

});

//Eliminar Contraloria  
$('#btnEliminarContraloria').click(function (e) { 
    e.preventDefault();

    $('#nameOption').text('Eliminar Contraloría');
    $('#btnEliminarContraForm').show();
    $('#btnAgregarContraForm').hide();
    $('#btnEditarContraForm').hide();

    $('#dataAddForm').hide();
    $('#dataEditForm').hide();
    $('#dataDeleteForm').show();

    $('#btnEliminarContraForm').click(function (e) { 
        e.preventDefault();

        var name = $('#nameDelete').val();
        var motive = $('#motiveDelete').val();

        if(!name.length || !motive.length){
            Swal.fire('¡Alerta!','Debe completar los espacios','warning');
        }else{
            Swal.fire('¡Exito!','Se elimino la contraloría correctamente','success');

            setTimeout(function(){  
               window.location.href = 'mantenimineto.html';
            },2000);
        }
    });
});

$('#btnAgregarContraForm').click(function (e) { 
    e.preventDefault();

    var name = $('#nameAdd').val();
    var phone = $('#phoneAdd').val();
    var mail = $('#emailAdd').val();
    var ubication = $('#ubicationAdd').val();
    

    if(!name.length || !phone.length || !mail.length|| !ubication.length){
        Swal.fire('¡Alerta!','Debe completar los espacios','warning');
    }else{
        Swal.fire('¡Exito!','Se agrego la contraloría correctamente','success');

        setTimeout(function(){  
           window.location.href = 'mantenimineto.html';
        },2000);
    }
});

});