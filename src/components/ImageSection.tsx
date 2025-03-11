export function ImageSection() {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-10 p-6 bg-white rounded-xl shadow-xl">
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div className="w-full sm:w-1/2">
          <img
            src="/photo5.jpg"
            alt="Community event"
            className="rounded-xl shadow-md object-cover sm:h-96 w-full"
          />
        </div>
        <div className="flex flex-col justify-between w-full sm:w-1/2">
          <img
            src="/photo2.jpg"
            alt="Team working together"
            className="rounded-xl shadow-md object-cover sm:h-48 w-full"
          />
          <img
            src="/photo4.jpg"
            alt="Team collaboration"
            className="rounded-xl shadow-md object-cover hidden sm:block sm:h-40 w-full"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div className="flex justify-between flex-col w-full sm:w-1/2">
          <img
            src="/photo3.jpg"
            alt="Impact stories"
            className="rounded-xl shadow-md object-cover hidden sm:block sm:h-40 w-full"
          />
          <img
            src="/photo6.jpg"
            alt="Community support"
            className="rounded-xl shadow-md object-cover sm:h-48 w-full"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <img
            src="/photo1.jpg"
            alt="Community event"
            className="rounded-xl shadow-md object-cover sm:h-96 w-full"
          />
        </div>
        
      </div>
    </div>
  );
}