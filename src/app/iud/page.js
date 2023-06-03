'use client';

import styles from '../page.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import SentimentSatisfiedTwoToneIcon from
    '@mui/icons-material/SentimentSatisfiedTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from
    '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';

export default function Page() {
    const [value, setValue] = React.useState(30);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <main className={styles.main}>
            <Box
                sx={{
                    margin: "auto",
                    width: "80%"
                }}
            >
                <Stack
                    spacing={{ xs: 2, md: 4}}
                    direction="row"
                    alignItems="center"
                >
                    <SentimentSatisfiedTwoToneIcon
                        sx={{
                            fontSize: "25vh"
                        }}
                    />

                    <Slider
                        aria-label="Pain"
                        value={value}
                        onChange={handleChange}
                        size="medium"
                        valueLabelDisplay="auto"
                        min={1}
                        max={10}
                        step={1}
                        sx={{
                            height: "10vh !important"
                        }}
                    />

                    <SentimentVeryDissatisfiedTwoToneIcon
                        sx={{
                            fontSize: "25vh"
                        }}
                    />
                </Stack>
            </Box>
        </main>
    )
}