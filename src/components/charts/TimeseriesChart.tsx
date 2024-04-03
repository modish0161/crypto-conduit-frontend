import React from 'react';
import { ResponsiveLine } from '@nivo/line';

interface TimeSeriesDataPoint {
    x: string; // Assuming 'x' is a date in a string format (e.g., '2020-01-01')
    y: number;
}

interface TimeSeriesData {
    id: string | number;
    color?: string;
    data: TimeSeriesDataPoint[];
}

interface TimeseriesChartProps {
    data: TimeSeriesData[];
}

const TimeseriesChart: React.FC<TimeseriesChartProps> = ({ data }) => {
    return (
        <div style={{ height: '400px' }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
                xScale={{
                    type: 'time',
                    format: '%Y-%m-%d',
                    precision: 'day',
                }}
                xFormat="time:%Y-%m-%d"
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: false,
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    format: '%b %d',
                    tickValues: 'every 2 days',
                    legend: 'Time',
                    legendOffset: -12,
                }}
                axisLeft={{
                    legend: 'Value',
                    legendOffset: -40,
                    legendPosition: 'middle',
                }}
                colors={{ scheme: 'nivo' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                useMesh={true}
                enableSlices="x"
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
};

export default TimeseriesChart;
