export const formatCurrency = (currency: number) => {
    const originalAmount = currency.toString();

    // Split the amount by the decimal point
    const parts = originalAmount.split(".");

    // Format the first part with thousands separators
    const formattedAmount = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Combine the formatted first part with the second part, if it exists
    return parts.length > 1 ? formattedAmount + "." + parts[1] : formattedAmount;
}