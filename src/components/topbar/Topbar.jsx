import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import React from "react";
import "./topbar.css";

export default function Topbar() {
	return (
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className='logo'>
					<span>LamaAdmin</span>
				</div>

				<div className='topRight'>
					<div className='topbarIconContainer'>
						<NotificationsOutlinedIcon />
						<span className='topIconBag'>2</span>
					</div>
					<div className='topbarIconContainer'>
						<LanguageOutlinedIcon />
						<span className='topIconBag'>3</span>
					</div>
					<div className='topbarIconContainer'>
						<SettingsOutlinedIcon />
					</div>
					<img
						src='https://image.thanhnien.vn/460x306/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg'
						alt='topAvatar'
						className='topAvatar'
					/>
				</div>
			</div>
		</div>
	);
}
