import React, { FC }    from 'react';
import { IconButton }   from '@mui/material';
import { Link }         from 'react-router-dom';
import { ChevronRight } from '@mui/icons-material';

interface NavButtonProps {
	link: string;
	handleClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavButton: FC<NavButtonProps> = ({ link, handleClick }) => {
	return (
		<IconButton sx={{ position: 'absolute', padding: 0, '&:hover': { backgroundColor: 'transparent' } }}
		            color="primary"
		            size="large"
		            className="top-1/2 bottom-0 right-0 w-8 sm:w-10 md:w-8 lg:w-10 xl:w-16 2xl:w-20"
		            component={Link}
		            onClick={handleClick}
		            to={link}>
			<ChevronRight className="scale-125" fontSize="large"/>
		</IconButton>
	);
};

export default NavButton;