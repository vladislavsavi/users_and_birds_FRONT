import { Card } from 'antd';
import {SignInForm} from '../../components';
import './sign-in.scss'

export const SignInPage = () => {
    
    return (
        <Card title="Sign in" className='sign-in casts_shadow'>
            <SignInForm/>
        </Card>
    );
}
