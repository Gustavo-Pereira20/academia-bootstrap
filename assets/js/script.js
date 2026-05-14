
const enviar = document.getElementById('enviar_formulario');
const fish = document.getElementById('plano_fish');
const shark = document.getElementById('plano_shark');
const mega = document.getElementById('plano_mega');

enviar.addEventListener('click', () =>{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Tem Certeza?",
  text: "Verifique se seu endereço de Email e respostas estão corretas.",
  icon: "info",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) swalWithBootstrapButtons.fire({
    title: "Enviado!",
    text: "Seu formulário foi enviado com sucesso, aguarde nossa resposta!",
    icon: "success"
  });
  else if (result.dismiss === Swal.DismissReason.cancel) swalWithBootstrapButtons.fire({
    title: "Cancelado",
    text: "Refaça o formulário.",
    icon: "error"
  });
});

});

fish.addEventListener('click', () =>{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Tem Certeza?",
  text: "Verifique se seu endereço de Email e respostas estão corretas.",
  icon: "info",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) swalWithBootstrapButtons.fire({
    title: "Enviado!",
    text: "Seu formulário foi enviado com sucesso, aguarde nossa resposta!",
    icon: "success"
  });
  else if (result.dismiss === Swal.DismissReason.cancel) swalWithBootstrapButtons.fire({
    title: "Cancelado",
    text: "Refaça o formulário.",
    icon: "error"
  });
});

});


shark.addEventListener('click', () =>{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Tem Certeza?",
  text: "Verifique se seu endereço de Email e respostas estão corretas.",
  icon: "info",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) swalWithBootstrapButtons.fire({
    title: "Enviado!",
    text: "Seu formulário foi enviado com sucesso, aguarde nossa resposta!",
    icon: "success"
  });
  else if (result.dismiss === Swal.DismissReason.cancel) swalWithBootstrapButtons.fire({
    title: "Cancelado",
    text: "Refaça o formulário.",
    icon: "error"
  });
  

});


mega.addEventListener('click', () =>{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Tem Certeza?",
  text: "Verifique se seu endereço de Email e respostas estão corretas.",
  icon: "info",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) swalWithBootstrapButtons.fire({
    title: "Enviado!",
    text: "Seu formulário foi enviado com sucesso, aguarde nossa resposta!",
    icon: "success"
  });
  else if (result.dismiss === Swal.DismissReason.cancel) swalWithBootstrapButtons.fire({
    title: "Cancelado",
    text: "Refaça o formulário.",
    icon: "error"
  });
});

});