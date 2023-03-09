import { InputField } from '@/components/form-controls';
import BlackButton from '@/components/form-controls/BlackButton';
import { getPromoCode } from '@/services';
import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { appplyPromoCode } from '@/features/products/slice';
import { PromoCodeFormErrors, PromoCodeProps } from '@/models';

const validate = (values: { promoCode: string }) => {
    const errors: PromoCodeFormErrors = {};

    if (!values.promoCode) {
        errors.promoCode = 'Required';
    } else if (values.promoCode.length !== 5) {
        errors.promoCode = 'Must be 5 characters ';
    }
    return errors;
};

export function PromoCode({ hasRef = false }: { hasRef?: boolean }) {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const [promocode, setPromoCode] = useState('');
    const { data, isSuccess } = useQuery(
        ['promo-code', promocode],
        () => getPromoCode(promocode),
        {
            enabled: Boolean(promocode),
            initialData: () => {
                const promoCode = queryClient.getQueryData(['promo-code']);
                if (promoCode !== undefined) return promoCode;
            },
        }
    );
    const promoCodes = data as PromoCodeProps[];
    const formik = useFormik({
        initialValues: {
            promoCode: '',
        },
        validate,
        onSubmit: (values) => {
            setPromoCode(Object.values(values)[0]);
        },
    });

    const applyPromoCode = useCallback(() => {
        if (isSuccess) {
            dispatch(appplyPromoCode(promoCodes[0].value));
        }
    }, [promoCodes, dispatch, isSuccess]);

    useEffect(() => {
        if (!formik.isValid)
            document.getElementById(Object.keys(formik.errors)[0])?.focus();
        if (isSuccess && promoCodes !== null) applyPromoCode();
    }, [applyPromoCode, promoCodes, formik.errors, formik.isValid, isSuccess]);

    return (
        <div className={'was-validated cart__discount'}>
            {!hasRef && <h6>Discount codes</h6>}
            <form name="frmPromo" onSubmit={formik.handleSubmit}>
                <div className="position-relative">
                    <InputField
                        name="promoCode"
                        id="promoCode"
                        placeholder="PromoCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.promoCode}
                        isFocus={hasRef}
                    />
                    <BlackButton type="submit">
                        <>Apply</>
                    </BlackButton>
                </div>

                {formik.touched.promoCode && formik.errors.promoCode ? (
                    <div className="invalid-feedback">
                        {formik.errors.promoCode}
                    </div>
                ) : (
                    <>
                        {' '}
                        {promoCodes?.length === 0 && formik.submitCount > 0 && (
                            <div className="invalid-feedback">
                                Coupon code is not valid
                            </div>
                        )}
                    </>
                )}
            </form>
        </div>
    );
}
