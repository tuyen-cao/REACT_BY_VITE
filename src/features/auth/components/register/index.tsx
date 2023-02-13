import { LoginPayload } from '@/models'
import RegisterForm from '../register-form'


export default function Register() {
    const handleSubmit = (payload: LoginPayload) => {
        console.log(payload);
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}
