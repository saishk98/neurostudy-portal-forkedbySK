'use client';

import styles from '../page.module.css';
import ActionButton from '../../components/buttons/ActionButton';
import Link from 'next/link';
import AuthLeftBanner from '../component/AuthLeftBanner';
import AuthFormFooter from '../component/AuthFormFooter';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import TextBox from '@/app/components/formElements/TextBox';
import { EMAIL_REGEX } from '@/app/utilities/constants';
import classNames from 'classnames';
import Form from '@/app/components/formElements/Form';
import AuthFormHeader from '../component/AuthFormHeader';

interface LoginFieldValues extends FieldValues {
  email: string;
  password: string;
}

const Page = () => {
  const { control }: UseFormReturn<LoginFieldValues> =
    useForm<LoginFieldValues>({ mode: 'onBlur' });

  return (
    <main className='main-container'>
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
          <div className={styles.formColumnWrapper}>
            <AuthFormHeader title='Login' subText='to your account' />
            <Form control={control}>
              <TextBox
                name='email'
                type='email'
                label='Email Address'
                required
                placeholder='Email address'
                pattern={EMAIL_REGEX}
              />
              <TextBox
                name='password'
                type='password'
                label='Password'
                required
                placeholder='Password'
              />
              <div className={classNames(styles.forgotPassword, 'pt-1 pb-4')}>
                <Link href='/login'>Forgot Password?</Link>
              </div>
              <div>
                <ActionButton
                  type='submit'
                  label='Login'
                  disabled={true}
                  className={styles.submitBtn}
                />
              </div>
            </Form>
            <AuthFormFooter
              text='New to Neurodiversity Academy? '
              to='/auth/signup'
              toText='Sign Up'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
