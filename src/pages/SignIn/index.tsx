import { EMAIL } from '@/constants';
import LoginForm from '@/features/auth/components/LoginForm';
import { userLogin } from '@/services/Auth';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserType } from '@/models';
import { setUserLogin } from '@/features/auth/slice';

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState<UserType>({ password: '' });

    const {
        data: userData,
        refetch,
        isSuccess,
    } = useQuery({
        queryKey: ['user', user],
        queryFn: () => userLogin(user),
        enabled: !!user,
    });

    const handleLoginFormSubmit = (payload: LoginPayload) => {
        setUser((user) => {
            return { ...user, password: payload.loginPassword };
        });
        if (payload.loginName.match(EMAIL))
            setUser((user) => {
                return { ...user, email: payload.loginName };
            });
        else
            setUser((user) => {
                return { ...user, username: payload.loginName };
            });
        refetch();
    };

    useEffect(() => {
        if (isSuccess && user.password !== '') {
            dispatch(
                setUserLogin({
                    accessToken: userData.accessToken,
                    user: userData?.user,
                })
            );
            navigate('/');
        }
    }, [dispatch, navigate, userData, user, isSuccess]);
    return (
        <section className="spad">
            <div className="container">
                <div className="row">
                    <div className=" container  flex-column w-50">
                        <LoginForm onSubmit={handleLoginFormSubmit} />
                    </div>
                </div>
            </div>
        </section>
    );
}
