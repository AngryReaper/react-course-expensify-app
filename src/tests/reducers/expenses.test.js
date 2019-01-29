import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    
    const expense = {
        id: '4',
        description: 'Cola',
        note: '',
        ammount: 200,
        createdAt: moment().startOf('month')
    }
    const action = {type: 'ADD_EXPENSE', expense}

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 300;

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {amount}
    }

    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(300);
});

test('should not edit an expense if id not found', () => {
    const amount = 200;

    const action = {
        type: 'EDIT_EXPENSE',
        id: '555',
        updates: {amount}
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {

    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});