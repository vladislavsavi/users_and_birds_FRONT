import { FC } from 'react';
import { PageHeader, Button } from 'antd';
import {
    Link,
} from "react-router-dom";

import './header.scss';

export const Header: FC = () => {
    return (
        <PageHeader
            ghost={false}
            className='header casts_shadow'
            title="Users And Birds"
            extra={[
                <Link key='sign-in' to='/sign-in'>Sign in</Link>,
                <Link key='sign-up' to='/sign-up'>Sign up</Link>
            ]}
        />
    );
}