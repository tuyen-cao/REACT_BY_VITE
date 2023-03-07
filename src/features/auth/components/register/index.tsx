import { LoginPayload } from '@/models'
import RegisterForm from '../RegisterForm'


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
