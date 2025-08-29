import Swal from "sweetalert2";

export function alertaGeneral(titulo, mensaje, icono) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
  });
}
