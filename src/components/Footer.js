import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap"  pt="24px">
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center">
        React Exercises Website
    </Typography>
    </Stack>
    <Typography variant="h6" mt="10px" textAlign="center" pb="40px">
        Made by Ali Saif
    </Typography>
  </Box>
);

export default Footer;