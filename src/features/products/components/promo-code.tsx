import { InputField } from '@/components/form-controls';
import BlackButton from '@/components/form-controls/black-button';



/* const validate = values => {
    const errors = {};

    if (!values.PromoCode) {
        errors.PromoCode = 'Required';
    } else if (values.PromoCode.length !== 4) {
        errors.PromoCode = 'Must be 4 characters ';
    }


    return errors;
}; */
export function PromoCode() {
    /*   const formik = useFormik({
          initialValues: {
              PromoCode: ''
          },
          validate,
          onSubmit: values => {
              alert(JSON.stringify(values, null, 2));
          }
      }); */
    return (
        <div className={'was-validated cart__discount'}>
            <h6>Discount codes</h6>
            <form name="frmPromo" /* onSubmit={formik.handleSubmit} */>
                <InputField name="PromoCode" placeholder="PromoCode" />
                <BlackButton type='submit'>
                    <>Apply</>
                </BlackButton>
            </form>

            {/*      {!isLoading
                ? promo?.data?.length === 0 ?
                    <strong className="invalid-feedback">Coupon code is not valid</strong>
                    : <>
                        <strong>{promo?.data[0].value}</strong>
                        {errors.promocode?.type && <div className="invalid-feedback">{errors.promocode.message}</div>}
                        {isError && <div className="invalid-feedback">{isError}</div>}
                    </>
                : null} */}
        </div>
    );
}
