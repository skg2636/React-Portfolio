import React from 'react';
import IconLink from "./IconLink";
import {Box, Chip, Typography} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title, description, techStack} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mb={4}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         
         {description && (
            <Typography 
               variant="body1" 
               textAlign="center" 
               sx={{ 
                  maxWidth: '80%', 
                  mb: 2, 
                  mt: 1, 
                  fontSize: '1rem',
                  color: '#555'
               }}
            >
               {description}
            </Typography>
         )}
         
         {techStack && (
            <Box 
               display="flex" 
               flexWrap="wrap" 
               justifyContent="center" 
               gap={1} 
               mb={2} 
               maxWidth="90%"
            >
               {techStack.map((tech, index) => (
                  <Chip 
                     key={index} 
                     label={tech} 
                     size="small" 
                     sx={{ 
                        borderRadius: '16px',
                        fontWeight: 500,
                        backgroundColor: '#e0e0e0'
                     }} 
                  />
               ))}
            </Box>
         )}
         
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'1.5rem'}>
            {live && (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
               </Box>
            )}
            {source && (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
               </Box>
            )}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;