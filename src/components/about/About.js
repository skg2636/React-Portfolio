import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box, Button} from "@mui/material";
import {info} from "../../info/Info";
import FileDownloadIcon from '@mui/icons-material/FileDownload';


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }
    
    function resumeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd resume</p>
            <p><span style={{color: info.baseColor}}>resume <span
                className={Style.green}>(main)</span> $</span> cat {firstName}_resume.pdf</p>
            <p><span style={{color: info.baseColor}}>Opening resume from Google Drive...</span></p>
            <Box display="flex" justifyContent="center" mt={2}>
                <Button 
                    variant="contained" 
                    component="a" 
                    href={info.resume} 
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<FileDownloadIcon />}
                    sx={{
                        backgroundColor: info.baseColor,
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: info.colors ? info.colors[1] : info.baseColor,
                        },
                        borderRadius: '20px',
                        padding: '8px 16px',
                        fontWeight: 'bold'
                    }}
                >
                    View Resume
                </Button>
            </Box>
        </>;
    }

    function educationText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                education</p>
            <p><span style={{color: info.baseColor}}>education <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.education.map((edu, index) => (
                    <li key={index}>
                        <Box component={'span'} mr={'1rem'}>🎓</Box>
                        <Box component={'span'} fontWeight={'bold'}>{edu.school}</Box>
                        <Box component={'span'} display={'block'} ml={'2rem'}>{edu.degree} ({edu.year})</Box>
                    </li>
                ))}
            </ul>
        </>;
    }

    function experienceText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                experience</p>
            <p><span style={{color: info.baseColor}}>experience <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.experience.map((exp, index) => (
                    <li key={index}>
                        <Box component={'span'} mr={'1rem'}>💼</Box>
                        <Box component={'span'} fontWeight={'bold'}>{exp.role} @ {exp.company}</Box>
                        <Box component={'span'} display={'block'} ml={'2rem'}>{exp.period}</Box>
                        <Box component={'span'} display={'block'} ml={'2rem'} fontStyle={'italic'}>{exp.description}</Box>
                    </li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={experienceText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={educationText()}/>
            <Terminal text={resumeText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}