import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import "./widgetSm.css";

export default function WidgetSm() {
	return (
		<div className='widgetSm'>
			<span className='widgetSmTitle'>New Join Member</span>
			<ui className='widgetSmList'>
				<li className='widgetSmListItem'>
					<img
						className='widgetSmImg'
						src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
						alt='user'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>John Doe</span>
						<span className='widgetSmUserTitle'>Software Engineer</span>
					</div>
					<button className='widgetSmButton'>
						<VisibilityIcon className='widgetSmIcon' />
						Display
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img
						className='widgetSmImg'
						src='https://www.freecodecamp.org/news/content/images/2022/01/IMG_1763.jpg'
						alt='user'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Travelsy Media</span>
						<span className='widgetSmUserTitle'>IT Supporter</span>
					</div>
					<button className='widgetSmButton'>
						<VisibilityIcon className='widgetSmIcon' />
						Display
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img
						className='widgetSmImg'
						src='https://blog.hubspot.com/hubfs/how-to-create-user-accounts-and-profiles.jpeg'
						alt='user'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Adele</span>
						<span className='widgetSmUserTitle'>Singer</span>
					</div>
					<button className='widgetSmButton'>
						<VisibilityIcon className='widgetSmIcon' />
						Display
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img
						className='widgetSmImg'
						src='https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png'
						alt='user'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Ed Sheeran</span>
						<span className='widgetSmUserTitle'>Musician</span>
					</div>
					<button className='widgetSmButton'>
						<VisibilityIcon className='widgetSmIcon' />
						Display
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img
						className='widgetSmImg'
						src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg'
						alt='user'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Jame Brown</span>
						<span className='widgetSmUserTitle'>Broad Manager</span>
					</div>
					<button className='widgetSmButton'>
						<VisibilityIcon className='widgetSmIcon' />
						Display
					</button>
				</li>
			</ui>
		</div>
	);
}
