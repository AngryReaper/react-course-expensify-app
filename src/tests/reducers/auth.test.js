import authReducer from '../../reducers/auth';

test('should get uid and login', () => {
    const uid = 'abc123'
    
    const action = {
        type: 'LOGIN',
        uid
    }

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should wipe uid and logout', () => {
    const action = {type: 'LOGOUT'}
    const state = authReducer({uid: 'someUid'}, action);
    //expect(state.uid).toBe(undefined);
    expect(state).toEqual({});
});