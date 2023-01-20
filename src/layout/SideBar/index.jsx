import { Box, Typography } from '@mui/material';
// import SideBar from '../../layout/SideBar/SideBar'
import Card from '../../layout/SideBar/Card';
import DropDowns from '../../layout/SideBar/DropDowns';
import spinImage from '../../assets/Frame.svg';
import taskUnlcoked from "../../assets/task-unlocked.png";
import spinUnlocked from "../../assets/spin-unlocked.png";
import rakeBack from "../../assets/rake-back.png";
import recharge from "../../assets/recharge.png";
import bonusCode from "../../assets/bonus-code.png";
import bounus from "../../assets/bonus.png";
import piggy from '../../assets/piggy.svg';
import arrowplane from '../../assets/arrowplane.svg';
import group from '../../assets/group.svg';
import gold from '../../assets/gold.svg';
import icon from '../../assets/coins.svg';
import { firstChild, flex, font, secondChild, style, vip } from './Sidebarstyle';
import { SidebarData } from './SideBardata';
import { height } from '@mui/system';


export default function SideBar() {
  return (
    <div style={{position:'relative'}} >
      <Box sx={style}>
        <Box sx={firstChild}>
          <Box>
            <Box sx={flex}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px',
                }}
              >
                <Typography sx={vip}>My VIP </Typography>
                <Typography sx={{ color: '#ffffff', marginLeft: '5px',fontStyle:"italic",fontWeight:"bold"}}>
                  Perks{' '}
                </Typography>
              </Box>
              <Typography sx={font}>view all</Typography>
            </Box>
          </Box>

          {/* <Card/> */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
              <Card
                img={taskUnlcoked}
              />
              <Card
                img={spinUnlocked}
              />
            </Box>
            <Box sx={{ display: 'flex', mt: '10px' }}>
              <Card
                img={rakeBack}
              />
              <Card
                img={recharge}
              />
            </Box>
            <Box sx={{ display: 'flex', mt: '10px' }}>
              <Card
                img={bonusCode}
              />
              <Card
                img={bounus}
              />
            </Box>
          </Box>
        </Box>
        {/* second div */}
        <Box sx={secondChild}>
          <img src={icon} alt="" style={{maxWidth:'100%',marginLeft:'15px'}}/>
          <Typography sx={{color:'#FBB315',fontWeight: 900,textTransform: 'capitalize',fontStyle:"italic",fontWeight:"bold"}}>Refer and Earn</Typography>

        </Box>
        {/* third child */}
        <Box sx={{ background:'rgba(95, 95, 111, 0.6)' ,height:'auto',borderRadius: '0px 8px 0px 0px'}}>
        {SidebarData.map((item, index) => {
              return (
                <>
                <DropDowns item={item} key={index} ></DropDowns>
                </>
              
              );
            })}
       </Box>
      </Box>
      
    </div>
  );
}
