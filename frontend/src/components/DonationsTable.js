import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/**
 * DonationsTable component renders a table displaying donations data.
 * @param {Object} props - The component props.
 * @param {Array} props.donations - An array of donations data.
 * @returns {JSX.Element} The DonationsTable component.
 */
export default function DonationsTable({ donations }) {
    // Map donations data to table rows
    const tableRows = donations.map((row, idx) => (
        <TableRow key={idx}>
            {row.map((v, i) => <TableCell key={i}>{v}</TableCell>)}
        </TableRow>
    ));

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Donation ID</TableCell>
                        <TableCell>Donor Name</TableCell>
                        <TableCell>Donation Date</TableCell>
                        <TableCell>Item</TableCell>
                        <TableCell>Garden Address</TableCell>
                        <TableCell>Garden Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// const columns = [
//     { field: 'donation_id', headerName: 'Donation ID', width: 100 },
//     { field: 'donor_name', headerName: 'Donor Name', width: 150 },
//     { field: 'don_date', headerName: 'Donation Date', width: 150 },
//     { field: 'item', headerName: 'Item', width: 200 },
//     { field: 'garden_address', headerName: 'Garden Address', width: 150 },
//     { field: 'garden_name', headerName: 'Garden Name', width: 150 },
// ];

// export default function DonationsTable({ donations }) {
//     const rows = donations.map((donation, index) => ({
//         id: index,
//         donation_id: donation[0],
//         donor_name: donation[1],
//         don_date: donation[2],
//         item: donation[3],
//         garden_address: donation[4],
//         garden_name: donation[5],
//     }));

//     return (
//         <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                     pagination: {
//                         paginationModel: { page: 0, pageSize: 5 },
//                     },
//                 }}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//                 disableSelectionOnClick
//             />
//         </div>
//     );
// }


