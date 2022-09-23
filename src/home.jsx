import Shop from './componants/Shop';
import Slider from './componants/slider';
import Swip from './componants/swip';

function Home(props) {
  return (
   <>
   <Slider/>
   <Swip/>
   <Shop handelcount={props.handelcount} prodactsData={props.prodacts} id ={'shop'}/>
   </>
  );
}
export default Home