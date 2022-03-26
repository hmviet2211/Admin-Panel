import React from 'react'
import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const featuredInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.54</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownwardIcon className="featuredIcon negative"/>
                        
                    </span>

                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4.54</span>
                    <span className="featuredMoneyRate">
                        -1.4
                        <ArrowDownwardIcon className="featuredIcon negative"/>
                        
                    </span>

                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3.54</span>
                    <span className="featuredMoneyRate">
                        +2.53
                        <ArrowUpwardIcon className="featuredIcon positive"/>
                        
                    </span>

                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
        </div>
    )
}

export default featuredInfo