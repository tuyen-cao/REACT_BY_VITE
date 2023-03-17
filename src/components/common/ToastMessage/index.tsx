import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
export default function ToastMessage() {
    console.log('aaaaaa');

    return (
        <>
            {[
                'Primary',
                'Secondary',
                'Success',
                'Danger',
                'Warning',
                'Info',
                'Light',
                'Dark',
            ].map((variant, idx) => (
                <ToastContainer position="top-center" key={'container' + idx}>
                    <Toast
                        className="d-inline-block m-1"
                        bg={variant.toLowerCase()}
                        key={idx}
                        show={false}
                    >
                        <Toast.Body
                            className={variant === 'Dark' && 'text-white'}
                        >
                            Hello, world! This is a toast message.
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            ))}
        </>
    );
}
