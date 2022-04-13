const fn = (state, action) => {
  switch (action.type) {
    case 'IS_LOGGED_IN':
      return {
        ...state,
        isLogin: action.isLogin,
        role: action.role
      };
    case 'ALERT_OPEN':
      return {
        ...state,
        alert: {
          isOpen: action.isOpen,
          severity: action.severity,
          label: action.label
        }
      };
    case 'ALERT_CLOSE':
      return {
        ...state,
        alert: {
          isOpen: action.isOpen,
          severity: state.alert.severity,
          label: state.alert.label
        }
      };
    case 'SOCKET':
      return {
        ...state,
        socketIO: action.socketIO
      };
    default:
      return state;
  }
};

export default fn;
