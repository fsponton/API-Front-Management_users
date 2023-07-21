import Swal from 'sweetalert2';

const ValidatePassword = async () => {
    let inputPassword = ''
    let flag = false

    while (!flag) {
        try {
            const result = await Swal.fire({
                title: 'Ingrese su password',
                input: 'password', // Tipo de input (en este caso, es de tipo texto)
                inputPlaceholder: 'password', // Placeholder del input
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
            })
            if (result.isConfirmed) {
                inputPassword = result.value
                if (inputPassword.trim() !== '' && inputPassword.length > 8) {
                    flag = true
                } else {
                    await Swal.fire({
                        icon: 'warning',
                        title: 'incorrect password',
                        text: 'password vacia o menor a 8 caracteres'
                    });
                }
            } else {
                break;
            }
        } catch (err: any) {
            console.log(err)
        }
    }

    return inputPassword
}

export default ValidatePassword;

