const BarraSeparadora = () => {
  return (
    <div className="flex flex-col justify-center items-center pl-1 mr-4">
      <div className="lg:w-4 lg:h-4 md:w-3 md:h-3 sm:w-2 sm:h-2 bg-gray-400 dark:bg-gray-100 rounded-full"></div>
      <div className="bg-gray-400 dark:bg-gray-100 lg:w-1 lg:h-72 md:w-1 md:h-72 sm:w-0.5 sm:h-64 -mt-2"></div>
    </div>
  );
};

export default BarraSeparadora;
