import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import data from '../../dummyData'
import './home.css'
import WidgetSM from '../../components/widgetSm/WidgetSM'
import WidgetLg from '../../components/widgetLg/WidgetLg'
const Home = () => {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart grid data={data} title={"User Analytics"} dataKey={"Active User"}/>
        <div className="homeWidgets">
          <WidgetSM/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home