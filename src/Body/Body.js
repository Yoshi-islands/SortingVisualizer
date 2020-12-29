import '../css/index.css';
import '../css/App.css';  
import { Container, Bar, BarLabel} from './Body.style';



//This function will take the array from the app.js file as its parameter 
export default function Body({data, getIndex, getFollowingIndex }) {  

  
    return (

        <Container>
            
            {/*We need to map the array for the bars in the div
            where size is how each element within is accessed  */}
            {

            
                data.map((size, idx) => (
                  
                    <Bar
                        /*originally had 270 */
                        height={`${size}px`}
                        key={idx}
                        change={getIndex() === idx}
                        style={getFollowingIndex() === idx ? { backgroundColor: "#008000" } : null}
                       
                    >
                        
                    {/*We want to display the number only if the the size is less than or = to 45
                    based on the steps from the slider that are present*/}
                        
                        {data.length <= 45 && < BarLabel > {size}</BarLabel>}
                    
                    </Bar>

                    
                ))

            }

        </Container>

    )


}

