function VerRegistroPersonaComun(){
    document.getElementById('containerRegistroPersonaComun').style.display='block';
    document.getElementById('containerRegistroEmpresas').style.display='none';
    
}
function VerRegistroEmpresas(){
    document.getElementById('containerRegistroEmpresas').style.display='block';
    document.getElementById('containerRegistroPersonaComun').style.display='none';

}


function Alerta() {

    Swal.fire({
        title: 'Autorizacion de tratamiento de datos',
        text: " ¡Según la legislación colombiana, el responsable del tratamiento de tus datos en este sitio web es la Sociedad PartyGo!  identificada con N.I.T.1022444522-2 En cumplimiento con la Ley 1581 de 2012 “Ley de protección de datos personales” y el Decreto 1377 de 2013, informamos que somos responsables de la administración de dichos datos. Según nuestras políticas de tratamiento de datos personales, los mecanismos a través de los cuales hacemos uso de éstos son seguros y confidenciales. Esto se logra mediante el uso de medios tecnológicos idóneos para asegurar que sean almacenados evitando el acceso indeseado por parte de terceras personas, y en ese mismo orden garantizamos la confidencialidad de los datos suministrados por los usuarios.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Estoy de acuerdo'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Registrado!',
            'Tus datos han sido registrados correctamente',
            'success'
          )
        }
      })

};


/*  Funcion para agregar Evento */

