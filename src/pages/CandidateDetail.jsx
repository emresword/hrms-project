import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getCandidateById } from '../store/thunks/candidateThunks';

export default function CandidateDetail() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const candidate = useSelector(state => state.candidate.selectedCandidate);

  useEffect(() => {
    dispatch(getCandidateById(id)); 
  }, [dispatch, id]);

  return (
    <Card sx={{ maxWidth: 345, margin: '0 auto', marginTop: '20px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {candidate?.firstName?.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${candidate?.firstName} ${candidate?.lastName}`}
        subheader={candidate?.birthYear}
      />
      <CardMedia
        component="img"
        height="194"
        image={candidate?.candidateImageInformation?.[0]?.imagePath || 'https://via.placeholder.com/90'}
        alt={`${candidate?.firstName} ${candidate?.lastName}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {candidate?.candidateCoverLetter?.[0]?.coverLetter || 'No cover letter provided'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Web Link: {candidate?.candidateWebAddresses?.[0]?.webLink || 'No web link provided'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Talent: {candidate?.candidateTalentInformation?.[0]?.knownTechnology || 'No talent information provided'}
        </Typography>
      </CardContent>
    </Card>
  );
}
