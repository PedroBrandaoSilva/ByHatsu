import { Container, ImagesContainers, Title } from "./style"
import {images} from "../../assets/feedbacks"

console.log(images)
function Feedbacks() {
    return(
        <Container>
            <Title><h2>Cada feedback representa confiança e qualidade entregue.</h2></Title>
            <ImagesContainers>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Feedback ${index + 1}`} />
                ))}
            </ImagesContainers>
        </Container>
    )
}


export default Feedbacks