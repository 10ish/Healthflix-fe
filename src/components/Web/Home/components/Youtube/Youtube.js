import { Container } from "react-bootstrap";
import './Youtube.css'
export default function Youtube(){

    return(
        <div className="youtube">
        <Container className="mid-section">
          
            
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                frameBorder="1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="mid-video"
              />
            
        
        </Container>
      </div>
    )
}