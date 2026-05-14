


// const swalWithBootstrapButtons = Swal.mixin({
//   customClass: {
//     confirmButton: "btn btn-success",
//     cancelButton: "btn btn-danger"
//   },
//   buttonsStyling: false
// });
// swalWithBootstrapButtons.fire({
//   title: "Tem Certeza?",
//   text: "Verifique se seu endereço de Email e respostas estão corretas.",
//   icon: "info",
//   showCancelButton: true,
//   confirmButtonText: "Sim, enviar",
//   cancelButtonText: "Não, cancele",
//   reverseButtons: true
// }).then((result) => {
//   if (result.isConfirmed) swalWithBootstrapButtons.fire({
//     title: "Enviado!",
//     text: "Seu formulário foi enviado com sucesso, aguarde nossa resposta!",
//     icon: "success"
//   });
//   else if (result.dismiss === Swal.DismissReason.cancel) swalWithBootstrapButtons.fire({
//     title: "Cancelado",
//     text: "Refaça o formulário.",
//     icon: "error"
//   });
// });