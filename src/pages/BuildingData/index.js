import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';

import ImageCard from '../../components/Dashbord/DashbordHeader/image-card';
import AppBarComponent from '../../components/Dashbord/Appbar/Appbar';
import DrawerLeftComponent from '../../components/Dashbord/DrawerLeft/DrawerLeft';
import DrawerRightComponent from '../../components/Dashbord/DrawerRight/DrawerRight';

import Image from '../../asset/image/Background.png';
import ListView from '../../components/BuildingData/ListView';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	backgroundColor: 'transparent',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const useStyles = makeStyles({
	root: {
		backgroundImage: `url(${Image})`,
		backgroundRepeat: 'no-repeat',
		objectFit: 'fill',
		width: '100vw',
		// background: "linear-gradient(135deg, #1F1A3B, #344D5E)",
		color: 'white',
		display: 'flex',
		height: '100vh',
		overflow: 'scroll',
	},
});

export default function BuildingData() {
	const [open, setOpen] = React.useState(false);
	const [openRight, setOpenRight] = React.useState(false);
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<CssBaseline />
			<AppBarComponent
				open={open}
				openRight={openRight}
				leftOpen={() => setOpen(true)}
				rightOpenClose={() => setOpenRight(!openRight)}
			/>

			<DrawerLeftComponent
				open={open}
				leftClose={() => setOpen(false)}
				leftOpen={() => setOpen(true)}
			/>

			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Box>
					<ListView />
				</Box>
			</Box>

			<DrawerRightComponent
				openRight={openRight}
				building={'Building 1'}
				select={'Building 2'}
				selectFloor={'3'}
				closeDrawer={() => setOpenRight(false)}
				openDrawer={() => setOpenRight(true)}
			/>
		</Box>
	);
}
