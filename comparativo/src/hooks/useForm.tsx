import { useState } from "react"


export default function useForm(initialForm: any = {}) {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
