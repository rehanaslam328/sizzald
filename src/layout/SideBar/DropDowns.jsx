import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <Box sx={{ mt: '10px', height: 'auto' }}>
      <Link
        style={{ color: 'white' }}
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <Box
          sx={{
            // background: 'rgba(95, 95, 111, 0.6)',
            display: 'flex',
            justifyContent: 'space-between',  
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '5px',
            },
            height: '46px',
            
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center',marginLeft:'15px',mt:'20px' }}>
            {item.icon}
            <Typography sx={{ color: '#BDBDBD', textTransform: 'capitalize' ,fontSize:'16px',fontWeight:400}}>
              {item.title}
            </Typography>
          </Box>

          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </Box>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link style={{ color: 'white', }} to={item.path} key={index}>
               

              <Box
                sx={{
                  paddingLeft:'20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '5px',
                  },
                  height:'50px'
                }}
              >
                {item.icon}
                <Typography
                  style={{ fontSize:'16px',fontWeight:400, textTransform: 'capitalize' }}
                >
                  {item.title}
                </Typography>
                {item.iconOpened && <Box sx={{}}>{item.iconOpened}</Box>}
              </Box>
                
            </Link>
          );
        })}
    </Box>
  );
};

export default SubMenu;
