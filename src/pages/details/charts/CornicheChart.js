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

export default function CChart({ place }) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const [chartTab, setChartTab] = useState('1')

    return (
        <>
            <Markdown>
                Timings:
            </Markdown>
            <TableContainer component={Paper} style={{ padding: 30 }}>
                <Table size="small">
                    <TableBody>
                        <TableRow sx={{ border: '1px solid black' }}>
                            <TableCell>Sunday</TableCell>
                            <TableCell>Open 24 Hrs</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Monday</TableCell>
                            <TableCell>Open 24 Hrs </TableCell>
                        </TableRow>
                        <TableRow sx={{ border: '1px solid black' }}>
                            <TableCell>Tuesday</TableCell>
                            <TableCell>Open 24 Hrs</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Wednesday</TableCell>
                            <TableCell>Open 24 Hrs</TableCell>
                        </TableRow>
                        <TableRow sx={{ border: '1px solid black' }}>
                            <TableCell >Thursday</TableCell>
                            <TableCell>Open 24 Hrs</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Friday</TableCell>
                            <TableCell>Open 24 Hrs</TableCell>
                        </TableRow>
                        <TableRow sx={{ border: '1px solid black' }}>
                            <TableCell>Saturday</TableCell>
                            <TableCell>Open 24 Hrs</TableCell>
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
                            data: [70, 60, 70, 50, 90, 90, 70]
                        }
                    ]}
                    type="bar"
                    width="100%"
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
                    <Tab disableRipple value="7" label="Sunday" />
                </TabList>
                <Divider />
                <TabPanel value="1">
                    <TimeChart
                        id={'busytimesmonday'}
                        data={[
                            20, 20, 30, 20,
                            20, 10, 30, 20,
                            20, 20, 20, 10,
                            10, 20, 40, 10,
                            40, 50, 60, 50,
                            50, 30, 40, 20,
                        ]}
                        start={'12am'}
                    />
                </TabPanel>
                <TabPanel value="2">
                    <TimeChart
                        id={'busytimestuesday'}
                        data={[
                            10, 20, 30, 20,
                            20, 20, 30, 30,
                            30, 20, 20, 30,
                            50, 60, 50, 70,
                            60, 70, 70, 50,
                            50, 30, 20, 10,
                        ]}
                        start={'12am'}
                    />
                </TabPanel>
                <TabPanel value="3">
                    <TimeChart
                        id={'busytimeswednesday'}
                        data={[
                            20, 20, 20, 20,
                            20, 30, 20, 20,
                            20, 30, 20, 30,
                            10, 20, 40, 10,
                            40, 30, 30, 40,
                            50, 30, 40, 20,
                        ]}
                        start={'12am'}
                    />
                </TabPanel>
                <TabPanel value="4">
                    <TimeChart
                        id={'busytimesthursday'}
                        data={[
                            30, 20, 10, 20,
                            20, 10, 30, 20,
                            20, 20, 20, 30,
                            40, 50, 60, 70,
                            80, 80, 90, 80,
                            90, 80, 60, 40,
                        ]}
                        start={'12am'}
                    />
                </TabPanel>
                <TabPanel value="5">
                    <TimeChart
                        id={'busytimesfriday'}
                        data={[
                            10, 10, 10, 20,
                            20, 10, 10, 20,
                            20, 10, 20, 30,
                            40, 40, 50, 60,
                            70, 80, 90, 80,
                            70, 60, 50, 40,
                        ]}
                        start={'12am'}
                    />
                </TabPanel>
                <TabPanel value="6">
                    <TimeChart
                        id={'busytimessat'}
                        data={[
                            10, 20, 30, 20,
                            20, 10, 20, 30,
                            30, 30, 10, 30,
                            50, 30, 50, 40,
                            60, 70, 40, 50,
                            50, 30, 20, 10,
                        ]}
                        start={'12am'}
                    />
                </TabPanel>
                <TabPanel value="7">
                    <TimeChart
                        id={'busytimessun'}
                        data={[
                            10, 20, 30, 20,
                            20, 20, 30, 30,
                            30, 20, 20, 30,
                            50, 60, 50, 70,
                            60, 70, 70, 50,
                            50, 30, 20, 10,
                        ]}
                        start={'12am'}
                    />
                </TabPanel>
            </TabContext>
        </>
    )
}