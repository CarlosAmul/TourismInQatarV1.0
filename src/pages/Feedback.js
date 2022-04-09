import { useState, useRef, useEffect } from 'react';
// @mui
import {
  FormControl,
  Typography,
  Card,
  Button,
  Container,
  DialogTitle,
  Box,
  Stack,
  Tooltip,
  TextField,
  IconButton,
  DialogActions,
  Switch,
  Paper,
  Divider
} from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import db from '../db'

// ----------------------------------------------------------------------

export default function Feedback() {
  const { themeStretch } = useSettings();
  const [name, setName]=useState("")
  const [comment, setComment]=useState("")
  const [feedbacks, setFeedbacks]=useState([])
  useEffect(() => db.Feedbacks.listenToFeedbacks(setFeedbacks), [])

  const handleSubmit=()=>{
  
  }

  return (
    <Page title="Page Three">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Feedback
        </Typography>
        <FormControl>
          <Stack spacing={4} direction="row">
            <TextField label="Name" type="text" value={name} 
            onChange={(e) => setName(e.target.value)} />
            <TextField label="Feedback" type="text" value={comment} 
            onChange={(e) => setComment(e.target.value)} />
            <DialogActions>
              <Box sx={{ flexGrow: 1 }} />

              <Button variant="outlined" color="inherit">
                Cancel
              </Button>

              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Add
              </Button>
            </DialogActions>
          </Stack>
        </FormControl>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
        {feedbacks.length>0?      
        
          feedbacks.map(comment=><Paper elevation={3}>
            <Typography sx={{
              fontWeight:"bold",
              color:"#EBD168"
            }}>{comment.name}</Typography>
            <Divider/>
          <Typography>
            {comment.comment}
          </Typography>
          <Button variant="outlined" color="inherit">
                Cancel
              </Button>

              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Add
              </Button>
          </Paper>):<></>}
          </Box>

      </Container>
    </Page>
  );
}
