import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const AuthLayout = () => {
	return (
		<Box maxW="100vw" maxH="100vh">
			<Outlet />
		</Box>
	);
};

export default AuthLayout;
