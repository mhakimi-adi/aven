'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Box
        sx={{
          margin: "auto"
        }}
      >
        <Card>
          <CardActionArea
            onClick={() => router.push('/iud')}
          >
            <CardContent>
              <WaterDropTwoToneIcon
                sx={{
                  fontSize: "50vh"
                }}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </main>
  )
}
