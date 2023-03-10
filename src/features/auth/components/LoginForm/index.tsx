import BlackButton from '@/components/form-controls/BlackButton';
import { LoginFormProps } from '@/models';
import SocialLogin from '../SocialLogin';

export default function LoginForm({
    onSubmit,
    onRegisterClick,
}: LoginFormProps) {
    const handleCheckout = () => {
        onSubmit?.();
    };
    const handleClick = () => {
        onRegisterClick(false);
    };
    return (
        <>
            <form className="d-flex flex-column ">
                <SocialLogin />

                {/*<p className="text-center">or:</p> */}

                <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="loginName"
                        className="form-control"
                    />
                    <label className="form-label" htmlFor="loginName">
                        Email or username
                    </label>
                    <div className="form-notch">
                        <div className="form-notch-leading"></div>
                        <div className="form-notch-middle"></div>
                        <div className="form-notch-trailing"></div>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="password"
                        id="loginPassword"
                        className="form-control"
                    />
                    <label className="form-label" htmlFor="loginPassword">
                        Password
                    </label>
                    <div className="form-notch">
                        <div className="form-notch-leading"></div>
                        <div className="form-notch-middle"></div>
                        <div className="form-notch-trailing"></div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="form-check mb-3 mb-md-0">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="loginCheck"
                                checked
                            />
                            <label
                                className="form-check-label"
                                htmlFor="loginCheck"
                            >
                                {' '}
                                Remember me{' '}
                            </label>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <BlackButton
                    type="submit"
                    cssClass="site-btn w-50 align-self-center"
                    handleClick={handleCheckout}
                >
                    <>Submit</>
                </BlackButton>
                <div className="text-center">
                    <p>
                        Not a member?{' '}
                        <button className="btn btn-link" onClick={handleClick}>
                            Register
                        </button>
                    </p>
                </div>
            </form>
        </>
    );
}
