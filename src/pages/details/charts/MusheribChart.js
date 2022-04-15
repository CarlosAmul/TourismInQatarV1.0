/* eslint no-else-return:0 */

import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
    Box, Tab, Card, CardContent, Grid, Divider, Container, Typography,
    Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// Chart
import Chart from "react-apexcharts";
import TimeChart from './timeChart'
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getProduct, addCart, onGotoStep } from '../../../redux/slices/product';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import Markdown from '../../../components/Markdown';
import { SkeletonProduct } from '../../../components/skeleton';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
// sections
import PlaceDetailsCarousel from '../../../sections/details/placeCarousel';

export default function MChart({ place }) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const [chartTab, setChartTab] = useState('1')

    return (
        <>
            <Markdown>
                Timings:
            </Markdown>
            <TableContainer component={Paper} style={{ padding: 30 }}>
                <Table size="small">
                    <TableBody>
                        <TableRow
                            sx={{ border: '1px solid black' }}
                        >
                            <TableCell>Thursday</TableCell>
                            <TableCell>9AM - 5PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Friday</TableCell>
                            <TableCell>3PM - 9PM</TableCell>
                        </TableRow>
                        <TableRow sx={{ border: '1px solid black' }}>
                            <TableCell>Saturday</TableCell>
                            <TableCell>9AM - 5PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sunday</TableCell>
                            <TableCell>Closed</TableCell>
                        </TableRow>
                        <TableRow sx={{ border: '1px solid black' }}>
                            <TableCell>Monday</TableCell>
                            <TableCell>9AM - 5PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tuesday</TableCell>
                            <TableCell>9AM - 5PM</TableCell>
                        </TableRow>
                        <TableRow sx={{ border: '1px solid black' }}>
                            <TableCell>Wednesday</TableCell>
                            <TableCell>9AM - 5PM</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider />
            <TabContext value={chartTab}>
                <Markdown children={`Highest Expected Capacity (By Day)`} />
                <Chart
                    options={{
                        chart: {
                            id: "weeklyvisitors"
                        },
                        xaxis: {
                            categories: days
                        },
                        yaxis: {
                            labels: {
                                formatter: (value) => {
                                    return `${value}%`
                                },
                            },
                        },
                    }}

                    series={[
                        {
                            name: "highest capacity",
                            data: [20, 30, 40, 90, 50, 30]
                        }
                    ]}
                    type="bar"
                    width="500"
                />
                <Divider />
                <Markdown> Busy Times </Markdown>
                <TabList onChange={(e, value) => setChartTab(value)}>
                    <Tab disableRipple value="1" label="Monday" />
                    <Tab disableRipple value="2" label="Tuesday" />
                    <Tab disableRipple value="3" label="Wednesday" />
                    <Tab disableRipple value="4" label="Thursday" />
                    <Tab disableRipple value="5" label="Friday" />
                    <Tab disableRipple value="6" label="Saturday" />
                </TabList>
                <Divider />
                <TabPanel value="1">
                    <TimeChart
                        id={'busytimesmonday'}
                        data={[
                            20, 20, 10, 10,
                            10, 10, 10, 10,
                        ]}
                        start={'9am'}
                    />
                </TabPanel>
                <TabPanel value="2">
                    <TimeChart
                        id={'busytimestuesday'}
                        data={[
                            20, 10, 30, 10,
                            10, 10, 20, 10,
                            10, 20, 10, 20, 10
                        ]}
                        start={'9am'}
                    />
                </TabPanel>
                <TabPanel value="3">
                    <TimeChart
                        id={'busytimeswednesday'}
                        data={[
                            10, 20, 30, 40,
                            10, 10, 20, 10,
                            10, 20, 30, 30, 10
                        ]}
                        start={'9am'}
                    />
                </TabPanel>
                <TabPanel value="4">
                    <TimeChart
                        id={'busytimesthursday'}
                        data={[
                            40, 60, 90, 50,
                            30, 20, 10, 10,
                            10, 10, 10, 10, 10
                        ]}
                        start={'9am'}
                    />
                </TabPanel>
                <TabPanel value="5">
                    <TimeChart
                        id={'busytimesfriday'}
                        data={[
                            10, 40, 50,
                            50, 30, 10,
                        ]}
                        start={'3pm'}
                    />
                </TabPanel>
                <TabPanel value="6">
                    <TimeChart
                        id={'busytimessat'}
                        data={[
                            20, 20, 30, 10,
                            10, 10, 30, 20,
                        ]}
                        start={'9am'}
                    />
                </TabPanel>
            </TabContext>
        </>
    )
}