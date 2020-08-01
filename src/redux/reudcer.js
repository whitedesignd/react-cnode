export default (state = {token:'',personal:{}} ,action) => { 
    const temporary = {...state};
    switch (action.type) {
        case 'SAVE_TOKEN':
            if(temporary.token == ''){
                temporary.token = action.token;
                window.localStorage.setItem('accessToken',action.token);
            }
            return temporary;
        case 'DELETE_TOKEN': 
            temporary.token = '';
            return temporary;
        case 'SAVE_PERSONAL': 
            temporary.personal = action.personal;
            return temporary;
        default:
           return temporary;
    }
}