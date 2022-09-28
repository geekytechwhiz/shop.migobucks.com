/* eslint-disable */
import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { H3 } from '../Typography';
function AdditionalInfo({ data }) {
  const fields = Object.keys(data?.VariantInfo ?? [0]);
  return (
    <Box width='100%' display={'flex'} sx={{ flexDirection: 'space-between' }}>
      <Box flexDirection='space-between'>
        <H3 mt={2} mb={2}>
          Specification:
        </H3>
        {
          <Grid container xs={12}>
            <Grid xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell> </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fields.map((x) => (
                      <TableRow
                        key={x}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {x}
                        </TableCell>
                        <TableCell align='left'>
                          {/* {data.VariantInfo[0][x]} */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        }
      </Box>

      <Box mx={10} mb={5} flexDirection='space-between'>
        <H3 mt={2} mb={2}>
          Additional Details
        </H3>
        {
          <Grid container>
            <Grid>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell> </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fields.map((x) => (
                      <TableRow
                        key={x}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {x}
                        </TableCell>
                        <TableCell align='left'>
                          {data.VariantInfo[0][x]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        }
      </Box>
    </Box>
  );
}

export default AdditionalInfo;
