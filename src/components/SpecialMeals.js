export default function SpecialMeals() {
  const special_meals = [
    {
      name: "Stir fry Pasta",
      description: "Stir fry pasta yada yada yada because of Sesan",
      image: "/images/smeal1.jpg",
    },
    {
      name: "Meat Balls",
      description: "Stir fry pasta yada yada yada because of Sesan",
      image: "/images/smeal2.jpg",
    },
    {
      name: "Burger Meal",
      description: "Stir fry pasta yada yada yada because of Sesan",
      image: "/images/smeal3.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center text-center items-center py-10 px-20">
        
      <div className="max-w-[500px] md:max-w-[700px] mb-14">
        <h1 className="text-white/85 text-2xl md:text-4xl mb-5 md:mb-10 font-bold">
          Special Meals of the Day!
        </h1>
        <p className="text-white/80 text-sm md:text-lg/7 mb-7">
          Check our sepecials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-14">
        {special_meals.map((meal, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <img
              src={meal.image}
              alt={meal.name}
              className="w-60 lg:w-[300px] h-60 lg:h-[300px] rounded-full object-cover"
            />
            <h1 className="text-white/85 font-bold text-2xl my-5">{meal.name}</h1>
            <p className="text-white/75 text-[18px]/7">{meal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
