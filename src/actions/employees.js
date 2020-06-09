export const fetchEmployees = (employees) => {
    return {
        type: 'FETCH_EMPLOYEES',
        payload: employees
    }
}
