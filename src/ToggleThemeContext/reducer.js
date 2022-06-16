export const reducer = (state, action) => {
  switch (action.type) {
    case 'darkTheme': {
      return {
        ...state,
        colors: { ...state.colors, primaryColor: '#242424', white: '#FFFF' },
      };
    }
    case 'lightTheme': {
      return {
        ...state,
        colors: { ...state.colors, primaryColor: '#FFFF', white: '#242424' },
      };
    }
  }

  return state;
};
