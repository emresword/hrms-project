import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid, Image, Button } from 'semantic-ui-react';
import { getAllCandidate } from '../store/thunks/candidateThunks';
import { NavLink } from 'react-router-dom';

export default function CandidateList() {
    const dispatch = useDispatch();
    const candidates = useSelector(state => state.candidate.candidateItems);

    useEffect(() => {
        dispatch(getAllCandidate());
    }, [dispatch]);

    const getCandidateImage = (candidate) => {
        return candidate.candidateImageInformation?.[0]?.imagePath || 'https://via.placeholder.com/80';
    };

    const getCandidateCoverLetter = (candidate) => {
        return candidate.candidateCoverLetter?.[0]?.coverLetter || 'No cover letter provided';
    };

    const getCandidateWebLink = (candidate) => {
        return candidate.candidateWebAddresses?.[0]?.webLink || 'No web link provided';
    };

    return (
        <div>
            <Grid container stackable columns={3}>
                {candidates.map(candidate => (
                    <Grid.Column key={candidate.id}>
                        <Card>
                            <Image 
                                as={NavLink}
                                to={`/candidate/${candidate.id}`}
                                src={getCandidateImage(candidate)} 
                                wrapped ui={false} 
                            />
                            <Card.Content>
                                <Card.Header>
                                    {candidate.firstName} {candidate.lastName}
                                </Card.Header>
                                <Card.Meta>
                                    <span>{getCandidateWebLink(candidate)}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {getCandidateCoverLetter(candidate)}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button as={NavLink} to={`/candidate/${candidate.id}`} primary>
                                    View Profile
                                </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                ))}
            </Grid>
        </div>
    );
}
