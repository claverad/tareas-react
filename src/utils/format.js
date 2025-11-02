export function formatNumber(number) {
    return number.toLocaleString('es-CL', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
}