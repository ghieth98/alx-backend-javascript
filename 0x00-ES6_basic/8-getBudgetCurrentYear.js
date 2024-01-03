export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
        [`income-${new Date().getFullYear()}`]: income,
        [`gdp-${new Date().getFullYear()}`]: gdp,
        [`capita-${new Date().getFullYear()}`]: capita,
    };

    return budget;
}