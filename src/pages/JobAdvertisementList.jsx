import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableFooter,
    TableCell,
    TableBody,
    MenuItem,
    Icon,
    Label,
    Menu,
    Table,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function JobAdvertisementList() {

    cosnt[JobAdvertisements, setJobAdvertisement] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisiments().then(result => {
            setJobAdvertisement(result.data.data)
        });

    }, []);



    return (
        <div>
            <Table celled>
                <TableHeader>
                    <TableRow>
                      
                        <TableHeaderCell>Job Description</TableHeaderCell>
                        <TableHeaderCell>Header</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {jobAdvertisements.map(jobAdvertisement => {
                        <TableRow key={jobAdvertisement.id}>
                            <TableCell><Link to={`/jobAdvertisement/${jobAdvertisement.description}`}> {jobAdvertisement.description} </Link></TableCell>
                            <TableCell>Cell</TableCell>
                            
                        </TableRow>
                    })}


                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableHeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron left' />
                                </MenuItem>
                                <MenuItem as='a'>1</MenuItem>
                                <MenuItem as='a'>2</MenuItem>
                                <MenuItem as='a'>3</MenuItem>
                                <MenuItem as='a'>4</MenuItem>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron right' />
                                </MenuItem>
                            </Menu>
                        </TableHeaderCell>
                    </TableRow>
                </TableFooter>
            </Table>

        </div>
    )
}
