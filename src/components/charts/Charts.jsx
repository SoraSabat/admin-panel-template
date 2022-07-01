import './charts.scss'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({ title, data, xaxisDataKey, lineDataKey, grid }) => {

	return (
		<div className="chart">
			<h3 className="chartTitle">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					{grid && <CartesianGrid strokeDasharray="3 3" />}
					<XAxis dataKey={xaxisDataKey} />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey={lineDataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Charts