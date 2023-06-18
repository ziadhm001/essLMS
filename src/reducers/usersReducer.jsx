const initialState = []

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return [
            ...state,
            {
                id: action.id,
                username: action.username,
                password: action.password,
                role: action.role,
                accessToken: action.accessToken
            }
        ];      
      default:
        return state
    }
};

export default usersReducer; 