const Toast = {
    message: '',
    description: ''
};

export const toastNotification = (toast = Toast) => {
    return {
        type: 'TOAST_NOTIFICATION',
        payload: toast
    }
}
