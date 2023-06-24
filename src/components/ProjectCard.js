import React from "react";
import { Button, Card } from "react-bootstrap";
import GitHubMark from '../assets/png/GitHub-Mark.png'

export const ProjectCard = (props) => {
    return (
        <Card className="project-card mb-2">
            <a href={props.link}><Card.Img variant="top" src={props.image}/></a>
            <Card.Body className="d-flex flex-column">
                <Card.Title><a href={props.link} target="_blank" className="project-link" rel="noreferrer">{props.title}</a></Card.Title>
                <Card.Text className="d-flex flex-column h-100 mb-1">
                    {props.children}
                </Card.Text>
                {props.srclink ? 
                    <Button href={props.srclink} target="_blank" className="portfolio-btn project-btn">
                        <img src={GitHubMark} alt="GitHub Mark" style={{width: "30px", borderRadius:"22px", margin:"0 10px 0 -5px"}}/>Accéder au code source
                    </Button> 
                    :
                    null
                }
            </Card.Body>
        </Card>
    );
}