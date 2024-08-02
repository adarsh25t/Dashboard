import { Box, Card, CardContent, Rating, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import { FeedbackProps } from '../../lib/type';



function FeedbackWidget() {

  const CardItem: React.FC<FeedbackProps> = ({ name, image, feedback, rating }) => {
    return (
      <Box sx={{
        backgroundColor: 'secondary.main',
        color: 'primary.light',
        boxShadow: 'none',
        paddingBottom: '10px',
        borderBottom: '1px solid #3E3E3E',
      }}>
        <Box>
          <Box display={'flex'} alignItems={'center'} gap={2}>
            <img
              src={image}
              alt={image}
              style={{ width: '35px', height: '35px', borderRadius: '50%' }}
            />
            <Typography variant='subtitle2'>{name}</Typography>
          </Box>
          <Rating
            name="text-feedback"
            value={rating}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ color: 'white' }} fontSize="inherit" />}
          />
          <Typography variant='subtitle2' color={'primary.light'}>{feedback}</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Box bgcolor={'secondary.main'} p={2} sx={{ height: "450px", overflowY: "scroll",borderRadius: '10px' }}>
      <Typography variant='h6' fontWeight={700} color={'primary.light'}>Customer Feedback</Typography>

      <Box mt={2} display={'flex'} gap={3} flexWrap={'wrap'}>
        <CardItem
          name="Wade warren"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9cL3N3dcpRDLwhK6yU0KHHFbSdAESxaf54YUEjLC_7I4I5oOpehC3REcil7WtSp9yiI&usqp=CAU"
          feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?"
          rating={4.5}
        />

        <CardItem
          name="Jane Cooper"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0q_kXbyLuTCYZ4-shDACysWtJ7uTxakzigjMw7bKa_HZeiumEjjPBelTPTT5fx5yOsg&usqp=CAU"
          feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?"
          rating={3}
        />

        <CardItem
          name="Guy Hawkins"
          image="https://w0.peakpx.com/wallpaper/107/46/HD-wallpaper-best-pose-for-profile-for-men-profile-pose-men-best-glasses.jpg"
          feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?"
          rating={2}
        />

        <CardItem
          name="Cody Fisher"
          image="https://preview.redd.it/photo-pose-for-boys-insta-profile-v0-5byqwfc7cxhb1.jpg?width=585&format=pjpg&auto=webp&s=0af55e56bab8cfe5b6f17f522b7bf9b48b0d5bfb"
          feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?"
          rating={4}
        />
      </Box>
    </Box>
  )
}

export default FeedbackWidget