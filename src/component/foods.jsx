
import useHooks from "../hooks/useHooks"
import Loading from "../Share/Loading";
import Food from "./food";




const Foods = () => {


 const [data] = useHooks()



 if(!data){
  return <Loading></Loading>
}

  return (

    <div className="mt-10 md:mt-20 lg:mt-40 lg:mb-32 md:mb-16  mb-16">
<h1 className="text-3xl text-center font-bold my-8">Popular Item</h1>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-12 md:gap-8  justify-center items-center lg:w-4/6 md:w-full w-full mx-auto">
      {
        data?.slice(1,4)?.map(food=><Food key={food._id} food={food} ></Food>)
      }
      </div>
    </div>
  );
};

export default Foods;



