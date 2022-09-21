import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './chart.scss';

const data = [
    {
        name: 'Janeiro',
        Rendimento: 111,
    },
    {
        name: 'Fevereiro',
        Rendimento: 106,
    },
    {
        name: 'Março',
        Rendimento: 121,
    },
    {
        name: 'Abril',
        Rendimento: 103,
    },
    {
        name: 'Maio',
        Rendimento: 118,
    },
    {
        name: 'Junho',
        Rendimento: 110,
    },
];

const HomeAreaChart = () => {
    return (
        <div className="area-chart chart">
            <div className="chart-header">
                <h3 className="chart-title">Receita dos últimos 6 meses</h3>
            </div>

            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Rendimento" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default HomeAreaChart;