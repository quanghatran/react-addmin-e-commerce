import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

export default function FeaturedInfo() {
	return (
		<div className='featured'>
			<div className='featuredItem'>
				<span className='featuredTitle'>Revenue</span>
				<div className='featuredMoneyContainer'>
					<span className='featureMoney'>$2,415</span>
					<span className='featureMoneyRate'>
						-11.4 <ArrowDownward className='featuredIcon negative' />
					</span>
				</div>
				<span className='featureSub'>Compare to last month</span>
			</div>

			<div className='featuredItem'>
				<span className='featuredTitle'>Sales</span>
				<div className='featuredMoneyContainer'>
					<span className='featureMoney'>$5,200</span>
					<span className='featureMoneyRate'>
						-20.4 <ArrowDownward className='featuredIcon negative' />
					</span>
				</div>
				<span className='featureSub'>Compare to last month</span>
			</div>

			<div className='featuredItem'>
				<span className='featuredTitle'>Costs</span>
				<div className='featuredMoneyContainer'>
					<span className='featureMoney'>$6,450</span>
					<span className='featureMoneyRate'>
						+2.4 <ArrowUpward className='featuredIcon' />
					</span>
				</div>
				<span className='featureSub'>Compare to last month</span>
			</div>
		</div>
	);
}
