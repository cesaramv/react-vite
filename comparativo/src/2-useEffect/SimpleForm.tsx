import { useEffect, useState } from "react"
import Message from "./Message";

function SimpleForm() {

    const [formState, setFormState] = useState({
        username: 'statil',
        email: 'prueba@email.com'
    });

    const { username, email } = formState;

    const onChangeForm = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    };

    useEffect(()=>{
        console.log('useEffect called!!!')
    });

    return (
        <>
            <h2 key='simpleFormH2'>Formulario simple</h2>
            <hr />
            <input type="text" name="username" placeholder="Username" value={username} onChange={onChangeForm} />
            <br />
            <input type="email" name="email" placeholder="Email" value={email} onChange={onChangeForm} />
            <br />
            {username === 'pepe' && <Message></Message>}
        </>
    )
}

export default SimpleForm
