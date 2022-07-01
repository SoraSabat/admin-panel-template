import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.scss'
import { userData } from '../../mock'
import WidgetsSm from '../../components/widgetsSm/WidgetsSm'
import WidgetsLg from '../../components/widgetsLg/WidgetsLg'

const Home = () => {
	return (
		<div className='home'>
			<FeaturedInfo />
			<Charts title="User Analytics" data={userData} xaxisDataKey="Month" lineDataKey="Active Users" grid />
			<div className="homeWidgets">
				<WidgetsSm />
				<WidgetsLg />
			</div>
		</div>
	)
}

export default Home