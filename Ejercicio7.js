function calcularHorasExtras() {
    // Obtener las horas trabajadas y el pago por hora
    let horasTrabajadas = parseFloat(document.getElementById('horasTrabajadas').value);
    let pagoPorHora = parseFloat(document.getElementById('pagoPorHora').value);
    
    // Validar que los valores ingresados son válidos
    if (isNaN(horasTrabajadas) || isNaN(pagoPorHora) || horasTrabajadas < 0 || pagoPorHora < 0) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa valores válidos para horas trabajadas y pago por hora.";
        return;
    }

    // Validar que no se exceden las horas trabajadas
    if (horasTrabajadas > 40) {
        document.getElementById('resultado').innerHTML = "Has ingresado más de 40 horas trabajadas, lo cual no es válido.";
        return;
    }

    let salarioTotal = 0;

    if (horasTrabajadas > 40) {
        let horasExtras = horasTrabajadas - 40;

        // Calcular las horas extras
        if (horasExtras <= 8) {
            salarioTotal = (40 * pagoPorHora) + (horasExtras * 2 * pagoPorHora);
        } else {
            salarioTotal = (40 * pagoPorHora) + (8 * 2 * pagoPorHora) + ((horasExtras - 8) * 3 * pagoPorHora);
        }
    } else {
        // Si no hay horas extras, simplemente se paga el salario normal
        salarioTotal = horasTrabajadas * pagoPorHora;
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `
        <p>Salario total a recibir: $${salarioTotal.toFixed(2)}</p>
    `;
}