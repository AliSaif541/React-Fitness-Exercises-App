import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
    return (
        <Box p='20px'>
            <Typography variant="h3">
                Similar <span style={{color: '#ff2625', textTransform: 'capitalize'}}>Target Muscle</span> Exercises
            </Typography>
            <Stack marginTop='25px' direction="row" sx={{p: '2', position: 'relative'}}>
                {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader /> }
            </Stack>
            <Typography marginTop='75px' variant="h3">
                Similar <span style={{color: '#ff2625', textTransform: 'capitalize'}}>Equipment</span> Exercises
            </Typography>
            <Stack marginTop='25px' direction="row" sx={{p: '2', position: 'relative'}}>
                {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader /> }
            </Stack>
        </Box>
    )
}

export default SimilarExercises;