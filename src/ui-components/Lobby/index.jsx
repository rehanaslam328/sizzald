import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import image1 from '../../assets/image1.svg';
import bitcoin from '../../assets/bitcoin.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';
import { Box, Button, Typography } from '@mui/material';
import { width } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#FFFFFF',
    // borderRadius: '8px',
    borderBottom: '1px solid #221F25',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: '1px solid #221F25',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    color: '#FFFFFF',
    borderBottom: '1px solid red',
  },
  // hide last border
  '&:last-child td, &:last-child th': {},
}));

// function createData(Game,text, Player, BetID, Payout, Profile,bitcoin) {
//   return { Game, Player,text, BetID, Payout, Profile,bitcoin };
// }

const rows = [
  {
    image1: <img src={image1}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image2}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image3}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image4}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image2}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image3}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
];
const typo = { fontSize: '16px', fontWeight: 400, color: '#ffffff' };
export default function CustomizedTables() {
  return (
    <Box sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <Box>
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '30px',
            fontWeight: 700,
            textTransform: 'uppercase',
            paddingBottom: '30px',
            mt:'20px'
          }}
        >
          Lobby
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: '20px' }}>
          <Button
            sx={{
              background: '#45D91E',
              borderRadius: '62px',
              color: '#ffffff',
            }}
          >
            latest bets
          </Button>
          <Button
            sx={{
              borderRadius: '62px',
              color: '#ffffff',
              border: '1px solid rgba(3, 251, 117, 0.22)',
            }}
          >
            High Rollers
          </Button>
          <Button
            sx={{
              borderRadius: '62px',
              color: '#ffffff',
              border: '1px solid rgba(3, 251, 117, 0.22)',
            }}
          >
            Wager Contest
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ background: '#2B2D50', width:'100%'}}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead
            sx={{ background: '#01022F', borderBottom: '1px solid #221F25' }}
          >
            <TableRow>
              <StyledTableCell>Game</StyledTableCell>
              <StyledTableCell align='left'>Player</StyledTableCell>
              <StyledTableCell align='left'>Bet ID</StyledTableCell>
              <StyledTableCell align='left'>Payout</StyledTableCell>
              <StyledTableCell align='left'>Profile</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow>
                <StyledTableCell component='th' scope='row' align='left'>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {row.image1}
                    <Typography sx={typo}>{row.text}</Typography>
                  </Box>
                </StyledTableCell>
                <StyledTableCell sx={typo} align='left'>
                  {row.player}
                </StyledTableCell>
                <StyledTableCell sx={typo} align='left'>
                  {row.betid}
                </StyledTableCell>
                <StyledTableCell align='left'>
                  <Button
                    sx={{
                      background: '#45D91E',
                      borderRadius: '16px',
                      height: '26px',
                    }}
                  >
                    {row.button}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align='left'>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {row.bitcoin}
                    <Typography sx={typo}>{row.bitcoinText}</Typography>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
