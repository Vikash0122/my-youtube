const Cart = () => {
    return (
      <div className="w-full bg-gray-300 dark:bg-neutral-700 rounded-lg animate-pulse h-60 md:h-48"></div>
    );
  };
  
  const ShimmerUI = ({ type }) => {
    return (
      <div
        className={
          type
            ? " w-full  py-1 gap-y-2.5 flex flex-wrap"
            : "py-2.5 w-full grid gap-y-6 gap-x-4 lg:gap-x-5 mt-32 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 "
        }
      >
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    );
  };
  
  export default ShimmerUI;