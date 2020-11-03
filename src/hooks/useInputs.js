import {useState, useCallback, useReducer} from 'react';

// const initialForm = {
//     username: '',
//     email: ''
// }

// function reducer(state, action) {
//     //CHANGE
//     //ACTION
//     switch(action.type) {
//         case 'CHANGE':
//             return {
//                 ...initialForm,
//                 [action.name]: action.value
//             };
//         case 'RESET':
//             return {
//                 ...initialForm
//             };
//         default:
//             return state;
//     }
// }
//과제 !!!!


function useInputs(initialForm) {
    // const [state, dispatch] = useReducer(reducer, initialForm);
    //https://gist.github.com/velopert/e0d5a027f60a7368b2bb6f9277e3f742


    const [form, setForm] = useState(initialForm);
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;