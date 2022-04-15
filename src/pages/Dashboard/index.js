import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

import ImageCard from '../../components/Dashbord/DashbordHeader/image-card';
import AppBarComponent from '../../components/Dashbord/Appbar/Appbar';
import DrawerLeftComponent from '../../components/Dashbord/DrawerLeft/DrawerLeft';
import DrawerRightComponent from '../../components/Dashbord/DrawerRight/DrawerRight';
import StatisticComponent from '../../components/Dashbord/StatisticsSection';
import MapContainer from '../../components/Dashbord/Map';
import GraphContainer from '../../components/Dashbord/Charts';
import EnegryComponent from '../../components/Dashbord/Energy';
import HavcComponent from '../../components/Dashbord/HAVC';
import ActiveAlertComponent from '../../components/Dashbord/ActiveAlert';
import EnergyIntensityComponent from '../../components/Dashbord/EnergyIntencity';

import Image from '../../asset/image/Background.png';

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

export default function MiniDrawer(props) {
	const [open, setOpen] = React.useState(false);
	const [openRight, setOpenRight] = React.useState(false);
	const classes = useStyles();

	console.log(props);

	useEffect(() => {
		props.getBuilding();
	}, []);

	return (
		<Box className={classes.root}>
			<CssBaseline />
			<AppBarComponent
				open={open}
				openRight={openRight}
				leftOpen={() => setOpen(true)}
				rightOpenClose={() => setOpenRight(!openRight)}
				floorName={
					props.dashbordDate.data.length === 0
						? ''
						: props.dashbordDate.data[props.dashbordDate.selectedBuilding]
								.floorName[props.dashbordDate.selectedFloor]
				}
				buildingName={
					props.dashbordDate.data.length === 0
						? ''
						: props.dashbordDate.data[props.dashbordDate.selectedBuilding]
								.buildingName
				}
			/>
			<DrawerLeftComponent
				open={open}
				leftClose={() => setOpen(false)}
				leftOpen={() => setOpen(true)}
			/>
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<ImageCard
					data={
						props.dashbordDate.data.length === 0
							? {}
							: props.dashbordDate.data[props.dashbordDate.selectedBuilding]
					}
				/>
				<Box mt={4}></Box>
				<Grid container spacing={2}>
					<Grid item md={7} lg={7} xl={7}>
						<Grid container spacing={2}>
							<Grid item md={12} sm={12} lg={12}>
								<StatisticComponent />
							</Grid>
							<Grid item md={12} sm={12} lg={12}>
								<EnegryComponent />
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={5} lg={5} xl={5}>
						<Grid container spacing={2}>
							<Grid item sm={12} md={12} lg={12}>
								<MapContainer />
							</Grid>
							<Grid item sm={12} md={12} lg={12}>
								<GraphContainer />
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={12} lg={12}>
						<Grid container spacing={2} component={Box} mt={4}>
							<Grid item md={6} lg={6}>
								<EnergyIntensityComponent />
							</Grid>
							<Grid item md={6} lg={6}></Grid>
						</Grid>
					</Grid>
					<Grid item md={12} lg={12}>
						<Grid container spacing={2} component={Box} mt={4}>
							<Grid item md={5} lg={5}>
								<ActiveAlertComponent />
							</Grid>
							<Grid item md={7} lg={7}>
								<HavcComponent />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<DrawerRightComponent
				openRight={openRight}
				building={props.dashbordDate.data}
				select={props.selectBuilding}
				selectFloor={props.selectFloor}
				closeDrawer={() => setOpenRight(false)}
				openDrawer={() => setOpenRight(true)}
			/>
		</Box>
	);
}
