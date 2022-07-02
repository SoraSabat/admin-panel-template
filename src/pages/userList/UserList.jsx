import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../mock'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {

	const [data, setData] = useState(userRows)
	console.log(data)

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id))
	}

	// console.log()

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
				return (
					<div className='userListDiv'>
						<img className='userListImg' src={params.row.avatar} alt='' />
						{params.row.user}
					</div>
				)
			}
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 200,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 160,
		},
		{
			field: 'transaction',
			headerName: 'Transaction',
			width: 160,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 160,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/user/" + params.row.id}>
							<button className="userListEdit">Edit</button>
						</Link>
						<DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
					</>
				)
			}
		}
	];

	return (
		<div className="userList">
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[8]}
				disableSelectionOnClick
				checkboxSelection />
		</div>
	)
}

export default UserList