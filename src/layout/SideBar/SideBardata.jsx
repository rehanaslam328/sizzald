import ArrowForward from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import playingcard from '../../assets/playingcard.svg';
import picksforyou from '../../assets/picksforyou.svg';
import Rocket from '../../assets/Rocket.svg';
// import favourites from '../../assets/favourites.svg';
import Vector from '../../assets/Vector.svg';
import casino from '../../assets/casino.svg';
import recent from '../../assets/recent.svg';
// import sizzeled from '../../assets/sizzeled.svg';
// import slots from '../../assets/slots.svg';
import Hotgames from '../../assets/Hotgames.svg';
import highvolatility from '../../assets/highvolatility.svg';
import star from '../../assets/star.svg';
import newRelessees from '../../assets/newRelessees.svg';
import tablegames from '../../assets/tablegames.svg';
import sports from '../../assets/sports.svg';
import lotery from '../../assets/lotery.svg';
import affilate from '../../assets/affilate.svg';
import fair from '../../assets/fair.svg';
import vipClub from '../../assets/vipClub.svg';
import fourm from '../../assets/fourm.svg';
import blog from '../../assets/blog.svg';
import headphones from '../../assets/headphones.svg';
import languages from '../../assets/languages.svg';
import sponsership from '../../assets/sponsership.svg';

export const SidebarData = [
  {
    title: 'casino',
    // path: '/overview',
    icon: <img src={casino}></img>,
    iconClosed: <ExpandMoreIcon sx={{mt:'20px'}} />,
    iconOpened: <ExpandMoreIcon  sx={{mt:'20px'}}/>,

    subNav: [
      {
        title: 'picks for you',
        path: '/overview/users',
        icon: <img src={picksforyou} />,
      },
      {
        title: 'Favorites',
        path: '/overview/revenue',
        icon: <img src={Vector} />,
      },
      {
        title: 'recent',
        path: '/overview/revenue',
        icon: <img src={recent} />,
      },
      {
        title: 'Sizzld Games',
        path: '/overview/revenue',
        icon: <img src={Rocket} />,
        iconClosed: <ExpandMoreIcon />,
        iconOpened: <ExpandMoreIcon />,
      },
      {
        title: 'Hotgames ',
        path: '/overview/revenue',
        icon: <img src={Hotgames} />,
      },
      {
        title: 'new Releases',
        path: '/overview/revenue',
        icon: <img src={newRelessees} />,
      },
      {
        title: 'High Volatility',
        path: '/overview/revenue',
        icon: <img src={highvolatility} />,
      },
      {
        title: 'Feature Buy-in',
        path: '/overview/revenue',
        icon: <img src={star} />,
      },
      {
        title: 'Table Games',
        path: '/overview/revenue',
        icon: <img src={tablegames} />,
      },
    ],
  },
  {
    title: 'Sports ',
    // path: '/overview',
    icon: <img src={sports} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'lottery ',
    // path: '/overview',
    icon: <img src={lotery} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'Affiliate',
    // path: '/overview',
    icon: <img src={affilate} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'probably fair ',
    // path: '/overview',
    icon: <img src={fair} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'vip Club',
    // path: '/overview',
    icon: <img src={vipClub} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'forum ',
    // path: '/overview',
    icon: <img src={fourm} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'blog ',
    // path: '/overview',
    icon: <img src={blog} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'head phones',
    // path: '/overview',
    icon: <img src={headphones} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'languages',
    // path: '/overview',
    icon: <img src={languages} style={{ marginLeft: '-5px' }}></img>,
  },
  {
    title: 'Sponsorships',
    // path: '/overview',
    icon: <img src={sponsership} style={{ marginLeft: '-5px' }}></img>,
  },
];
