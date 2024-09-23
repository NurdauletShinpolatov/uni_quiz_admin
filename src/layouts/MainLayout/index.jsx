import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import styles from './index.module.scss';

import { Outlet } from 'react-router-dom';

const elements = [
	{
		label: 'Дашборд',
		icon: "",
		link: '/dashboard',
	},
	{
		label: 'Пользователи',
		icon: "",
		link: '/users',
	},
];

const MainLayout = () => {
	return (
		<Flex>
			{/* <Sidebar elements={elements} /> */}

			<Box flex={1} overflowX="hidden">
				<Outlet />
			</Box>
		</Flex>
	);
};
export default MainLayout;
