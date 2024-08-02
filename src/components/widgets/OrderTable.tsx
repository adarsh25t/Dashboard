import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/material';

function createData(
  image: string,
  name: string,
  order: number,
  amount: number,
  status: string,
) {
  return {image, name, order, amount, status };
}

const rows = [
  createData("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9cL3N3dcpRDLwhK6yU0KHHFbSdAESxaf54YUEjLC_7I4I5oOpehC3REcil7WtSp9yiI&usqp=CAU",'Wade warren', 34534534, 123.00, "Delivered"),
  createData("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0q_kXbyLuTCYZ4-shDACysWtJ7uTxakzigjMw7bKa_HZeiumEjjPBelTPTT5fx5yOsg&usqp=CAU",'jane Cooper', 34534534,435.93, "Delivered"),
  createData("https://w0.peakpx.com/wallpaper/107/46/HD-wallpaper-best-pose-for-profile-for-men-profile-pose-men-best-glasses.jpg",'Guy Hawkins', 44534533, 43244.00, "Delivered"),
  createData("https://preview.redd.it/photo-pose-for-boys-insta-profile-v0-5byqwfc7cxhb1.jpg?width=585&format=pjpg&auto=webp&s=0af55e56bab8cfe5b6f17f522b7bf9b48b0d5bfb",'Cody Fisher', 64534532, 124.00, "Cancelled"),
  createData("https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png",'Savannah Nguyen', 74534523,128.20, "Pending"),
];

export default function OrderTable() { 
  return (
    <TableContainer component={Paper} sx={{ bgcolor: 'transparent',boxShadow: 'none' }}>
      <Table aria-label="simple table" >
        <TableHead >
          <TableRow 
            sx={{ 'th, td': { borderColor: '#757575' }  }}
          >
            <TableCell sx={{ color: 'primary.light' }}>Customers</TableCell>
            <TableCell align="left" sx={{ color: 'primary.light' }}>Order No.</TableCell>
            <TableCell align="left" sx={{ color: 'primary.light' }}>Amount</TableCell>
            <TableCell align="left" sx={{ color: 'primary.light' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ 'th, td': { borderColor: '#757575' } ,'&:last-child td, &:last-child th': { border: 0 },  }}
            >
              <TableCell component="th" scope="row" sx={{ color: 'primary.light' }}>
                <Box display="flex" alignItems="center" gap={2}>
                  <img src={row.image} alt={row.image}  style={{ borderRadius: '50%', width: '40px', height: '40px' }}/>
                  {row.name}
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ color: 'primary.light' }}>{row.order}</TableCell>
              <TableCell align="left" sx={{ color: 'primary.light' }}>$ {row.amount}</TableCell>
              <TableCell align="left">
                {row.status === "Delivered" ? 
                  <span style={{ color: '#66BB6A',backgroundColor: 'rgba(102, 187, 106, 0.27)', padding: '6px 14px', borderRadius: '30px' }}>{row.status}</span> : 
                  <span style={{ color: '#F44336',backgroundColor: 'rgba(229, 115, 115, 0.28)', padding: '6px 14px', borderRadius: '30px' }}>{row.status}</span>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}