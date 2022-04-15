import React from 'react';
import {
	ChakraProvider,
	Box,
	GridItem,
	Heading,
	SimpleGrid,
} from '@chakra-ui/react';

const ListView = () => {
	return (
		<ChakraProvider>
			<SimpleGrid columns={10} spacing={4}>
				<GridItem colSpan={3}>
					<Box p={4} borderWidth='2px' rounded='lg'>
						<Heading size='sm'>Asset List</Heading>
					</Box>
				</GridItem>
				<GridItem colSpan={7}>
					<Box p={4} borderWidth='2px' rounded='lg'>
						<Heading size='sm'>Device List</Heading>
					</Box>
				</GridItem>
			</SimpleGrid>
		</ChakraProvider>
	);
};

export default ListView;
