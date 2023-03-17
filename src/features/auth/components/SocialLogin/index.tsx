export default function SocialLogin() {
    return (
        <>
            <div className="text-center mb-3">
                <p>Sign up with:</p>
                <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                >
                    <i className="fab fa-facebook-f"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                >
                    <i className="fab fa-google"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                >
                    <i className="fab fa-twitter"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                >
                    <i className="fab fa-github"></i>
                </button>
            </div>
            <p className="text-center">or:</p>
        </>
    );
}
