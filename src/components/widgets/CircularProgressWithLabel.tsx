import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>

            <Box sx={{ position: 'relative' }}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                        color: (theme) =>
                            theme.palette.grey[theme.palette.mode === 'light' ? 600 : 800],
                    }}
                    size={"6rem"}
                    thickness={4}
                    {...props}
                    value={100}
                />
                <CircularProgress
                    variant="determinate"
                    disableShrink
                    sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                        position: 'absolute',
                        left: 0,
                    }}
                    size={"6rem"}
                    thickness={4}
                    {...props}
                />
            </Box>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="primary.light"
                    sx={{ fontSize: "1rem" }}
                >{`${Math.round(props.value)}%`}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: "0.5rem" }} color={"primary.light"}>Goal</Typography>
                    <Typography sx={{ fontSize: "0.5rem" }} color={"primary.light"}>Completed</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default function CircularWithValueLabel() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        setProgress(70);
    }, []);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "5px" }}>
            <CircularProgressWithLabel value={progress} />
            <Typography sx={{ fontSize: "0.6rem" }} color={"primary.light"}>*The values here has been rounded off.</Typography>
        </Box>
    );
}
