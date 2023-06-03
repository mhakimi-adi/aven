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
import SentimentNeutralTwoToneIcon from
    '@mui/icons-material/SentimentNeutralTwoTone';

export default function Page() {
    const [value, setValue] = React.useState(30);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const marks = [
        {
            value: 1,
            label: <SentimentSatisfiedTwoToneIcon
                        sx={{
                            fontSize: "5vh",
                            width: "400%"
                        }}
                    />
        },
        {
            value: 5,
            label: <SentimentNeutralTwoToneIcon
                        sx={{
                            fontSize: "5vh",
                            width: "400%"
                        }}
                    />
        },
        {
            value: 10,
            label: <SentimentVeryDissatisfiedTwoToneIcon
                        sx={{
                            fontSize: "5vh",
                            width: "400%"
                        }}
                    />
        }
    ]

    return (
        <main className={styles.main}>
            <Box
                sx={{
                    margin: "auto",
                    width: "50%"
                }}
            >
                <Stack
                    spacing={{ xs: 2, md: 4}}
                    direction="row"
                    alignItems="center"
                >

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
                            height: "70vh !important",
                            width: "75%"
                        }}
                        orientation='vertical'
                        marks={marks}
                    />
                </Stack>
            </Box>
        </main>
    )
}