import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name}) => {
    if (!exerciseVideos.length) return 'Loading...'
    return (
        <Box sx={{marginTop: {lg: '50px', xs: '20px'}}} p='20px'>
            <Typography variant='h3'>
                Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' mt='20px' sx={{flexDirection: {lg: 'row'}, gap : {lg: '20px', xs: '0'} }}>
                {exerciseVideos?.slice(0, 3).map((item, index) => (
                    <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel="noreferrer">
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} loading='lazy' />
                        <Typography variant="h6" color='#000'>
                            {item.video.title}
                        </Typography>
                        <Typography variant="h7" color='#000'>
                            {item.video.channelName}
                        </Typography>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos;