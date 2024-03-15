
import Loading from "../Share/Loading";
import useHooks from "../hooks/useHooks"
import Food from "./food";





const Manu = () => {

 
    

 const [data] = useHooks()


 if(!data){
  return <Loading></Loading>
}


  return (

    <div className="mt-8 md:mt-20 lg:mt-20">
 
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-12 md:gap-8  justify-center items-center lg:w-4/6 md:w-full w-full mx-auto">
      {
       data?.map(food=><Food key={food._id} food={food} ></Food>)
      }
      </div>
    </div>
  );
};

export default Manu;



