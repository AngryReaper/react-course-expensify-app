import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with 1 expense', () => {
    //const wrapper = shallow(<ExpensesSummary expenseCount={[expenses[0]].length} expensesTotal={selectExpensesTotal([expenses[0]])} />);
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={selectExpensesTotal(expenses)} />);
    expect(wrapper).toMatchSnapshot();
});
