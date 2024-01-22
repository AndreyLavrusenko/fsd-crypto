export function validateInputNumber(input: number, maxValue: number) {
    if (input > maxValue) {
        return Number(maxValue.toString().slice(0, -1));
    }

    return input
}