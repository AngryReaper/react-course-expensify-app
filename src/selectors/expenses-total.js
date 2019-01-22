export default (expenses) => {
    return expenses.map(expense => expense.amount).reduce((sum, current) => {
        return sum + current;
    },0);
}