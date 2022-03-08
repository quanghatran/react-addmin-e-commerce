import { DataGrid } from "@material-ui/data-grid";
import "./userList.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "user",
			headerName: "Username",
			width: 170,
			renderCell: (param) => {
				return (
					<div className='userListUser'>
						<img className='userListImg' src={param.row.avatar} alt='' />
						{param.row.userName}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 170 },
		{
			field: "status",
			headerName: "Status",
			width: 170,
		},
		{
			field: "transaction",
			headerName: "Transaction Volume",
			width: 200,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/user/${params.row.id}`}>
							<button className='userListEdit'>Edit</button>
						</Link>
						<DeleteOutlineIcon
							className='userListDelete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className='userList'>
			<DataGrid
				disableSelectionOnClick
				rows={data}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[8]}
				checkboxSelection
			/>
		</div>
	);
}
