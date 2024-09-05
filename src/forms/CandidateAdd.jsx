import { Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Button, Input } from 'semantic-ui-react';
import YekTextInput from '../utilities/costumFromControls/YekTextInput';
import { useDispatch } from 'react-redux';
import { addCandidate } from '../store/thunks/candidateThunks';
import { uploadImageToCloudinary } from '../services/cloudinaryService'; // Update this with your actual upload function

export default function CandidateAdd() {
    const dispatch = useDispatch();
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const initialValues = {
        firstName: "",
        lastName: "",
        birthYear: 0,
        identityNumber: "",
        email: "",
        password: "",
        candidateCoverLetter: [{ coverLetter: "" }],
        candidateEducationInformation: [{ degree: "", department: "", endDate: "", schoolName: "", startDate: "" }],
        candidateExperienceInformation: [{ institution: "", jobEndDate: "", jobStartDate: "", role: "" }],
        candidateImageInformation: [{ imageName: "", imagePath: imageUrl, storageName: "Cloudinary" }],
        candidateLanguegeLevel: [{ languageLevel: "", languageName: "" }],
        candidateTalentInformation: [{ knownTechnology: "" }],
        candidateWebAddresses: [{ webLink: "" }],
        verificationCodeCandidate: { code: "", verified: false, verifiedDate: "" }
    };

    const schema = Yup.object().shape({
        firstName: Yup.string().required("First Name can't be null"),
        lastName: Yup.string().required("Last Name can't be null"),
        birthYear: Yup.number().required("Birth Year can't be null"),
        identityNumber: Yup.string().required("Identity Number can't be null"),
        email: Yup.string().email().required("Email can't be null"),
        password: Yup.string().required("Password can't be null"),
        candidateCoverLetter: Yup.array().of(
            Yup.object().shape({
                coverLetter: Yup.string().required("Cover Letter can't be null")
            })
        ),
        candidateEducationInformation: Yup.array().of(
            Yup.object().shape({
                degree: Yup.string().required("Degree can't be null"),
                department: Yup.string().required("Department can't be null"),
                endDate: Yup.date().required("End Date can't be null"),
                schoolName: Yup.string().required("School Name can't be null"),
                startDate: Yup.date().required("Start Date can't be null")
            })
        ),
        candidateExperienceInformation: Yup.array().of(
            Yup.object().shape({
                institution: Yup.string().required("Institution can't be null"),
                jobEndDate: Yup.date().required("Job End Date can't be null"),
                jobStartDate: Yup.date().required("Job Start Date can't be null"),
                role: Yup.string().required("Role can't be null")
            })
        ),
        candidateImageInformation: Yup.array().of(
            Yup.object().shape({
                imageName: Yup.string().required("Image Name can't be null"),
                imagePath: Yup.string().required("Image Path can't be null"),
                storageName: Yup.string().required("Storage Name can't be null")
            })
        ),
        candidateLanguegeLevel: Yup.array().of(
            Yup.object().shape({
                languageLevel: Yup.string().required("Language Level can't be null"),
                languageName: Yup.string().required("Language Name can't be null")
            })
        ),
        candidateTalentInformation: Yup.array().of(
            Yup.object().shape({
                knownTechnology: Yup.string().required("Known Technology can't be null")
            })
        ),
        candidateWebAddresses: Yup.array().of(
            Yup.object().shape({
                webLink: Yup.string().required("Web Link can't be null")
            })
        ),
        verificationCodeCandidate: Yup.object().shape({
            code: Yup.string().required("Verification Code can't be null"),
            verified: Yup.boolean().required("Verified can't be null"),
            verifiedDate: Yup.date().required("Verified Date can't be null")
        })
    });

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const result = await uploadImageToCloudinary(file); // Replace with your actual upload function
                setImageUrl(result.secure_url); // Update image URL
                setImageFile(file); // Store the file if needed
            } catch (error) {
                console.error("Image upload failed:", error);
            }
        }
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        // Update candidate image information with the uploaded image details
        values.candidateImageInformation[0].imagePath = imageUrl;
        values.candidateImageInformation[0].imageName = imageFile ? imageFile.name : '';

        try {
            await dispatch(addCandidate(values));
            // Handle successful response, e.g., show a success message or redirect
        } catch (error) {
            console.error("Failed to add candidate:", error);
            // Handle error, e.g., show an error message
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, isSubmitting }) => (
                    <Form className='ui form' onSubmit={handleSubmit}>
                        <YekTextInput name="firstName" placeholder='First Name' />
                        <YekTextInput name="lastName" placeholder='Last Name' />
                        <YekTextInput name="birthYear" placeholder='Birth Year' type="number" />
                        <YekTextInput name="identityNumber" placeholder='Identity Number' />
                        <YekTextInput name="email" placeholder='Email' type="email" />
                        <YekTextInput name="password" placeholder='Password' type="password" />

                        <YekTextInput name="candidateCoverLetter[0].coverLetter" placeholder='Cover Letter' />

                        <YekTextInput name="candidateEducationInformation[0].degree" placeholder='Degree' />
                        <YekTextInput name="candidateEducationInformation[0].department" placeholder='Department' />
                        <YekTextInput name="candidateEducationInformation[0].endDate" placeholder='End Date' type="date" />
                        <YekTextInput name="candidateEducationInformation[0].schoolName" placeholder='School Name' />
                        <YekTextInput name="candidateEducationInformation[0].startDate" placeholder='Start Date' type="date" />

                        <YekTextInput name="candidateExperienceInformation[0].institution" placeholder='Institution' />
                        <YekTextInput name="candidateExperienceInformation[0].jobEndDate" placeholder='Job End Date' type="date" />
                        <YekTextInput name="candidateExperienceInformation[0].jobStartDate" placeholder='Job Start Date' type="date" />
                        <YekTextInput name="candidateExperienceInformation[0].role" placeholder='Role' />

                        <Input type="file" onChange={handleImageUpload} />

                        <YekTextInput name="candidateImageInformation[0].imageName" placeholder='Image Name' value={imageFile ? imageFile.name : ''} readOnly />
                        <YekTextInput name="candidateImageInformation[0].imagePath" placeholder='Image Path' value={imageUrl} readOnly />
                        <YekTextInput name="candidateImageInformation[0].storageName" placeholder='Storage Name' value="Cloudinary" readOnly />

                        <YekTextInput name="candidateLanguegeLevel[0].languageLevel" placeholder='Language Level' />
                        <YekTextInput name="candidateLanguegeLevel[0].languageName" placeholder='Language Name' />

                        <YekTextInput name="candidateTalentInformation[0].knownTechnology" placeholder='Known Technology' />

                        <YekTextInput name="candidateWebAddresses[0].webLink" placeholder='Web Link' />

                        <YekTextInput name="verificationCodeCandidate.code" placeholder='Verification Code' />
                        <YekTextInput name="verificationCodeCandidate.verified" placeholder='Verified' type="checkbox" />
                        <YekTextInput name="verificationCodeCandidate.verifiedDate" placeholder='Verified Date' type="date" />

                        <Button type="submit" color="green" disabled={isSubmitting}>
                            Add Candidate
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
