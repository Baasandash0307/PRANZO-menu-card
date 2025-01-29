const categories = [
  {
    categoryName: "SALAD",
    foods: [
      {
        foodName: "CHICKEN CEASER SALAD",
        ingredients: "Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken.",
        price: "24,900₮",
      },
      {
        foodName: "GREEK SALAD",
        ingredients: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.",
        price: "21,900₮",
      },
      {
        foodName: "QUINOA POWER SALAD",
        ingredients: "A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing.",
        price: "22,500₮",
      }
    ]
  },

  {
    categoryName: "BURGER",
    foods: [
      {
        foodName: "CLASSIC BURGER",
        ingredients: "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries.",
        price: "18,900₮",
      },
      {
        foodName: "BBQ BACON BURGER",
        ingredients: "Beef patty topped with crispy bacon, BBQ sauce, cheddar, and onion rings.",
        price: "21,900₮",
      },
      {
        foodName: "VEGAN BLACK BEAN BURGER",
        ingredients: "Homemade black bean patty, avocado, lettuce, tomato, and vegan mayo, served on a whole-grain bun.",
        price: "17,900₮",
      }
    ]
  },

  {
    categoryName: "PASTA",
    foods: [
      {
        foodName: "SPAGHETTI PASTA",
        ingredients: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta.",
        price: "20,900₮",
      },
      {
        foodName: "SEAFOOD MARINARA",
        ingredients: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.",
        price: "23,500₮",
      },
      {
        foodName: "PESTO CHICKEN PASTA",
        ingredients: "Fettuccine pasta with grilled chicken, basil pesto, and cherry tomatoes.",
        price: "21,000₮",
      }
    ]
  },

  {
    categoryName: "PIZZA",
    foods: [
      {
        foodName: "MARGHERITA PIZZA",
        ingredients: "Simple and classic with tomato sauce, fresh mozzarella, and basil leaves.",
        price: "30,900₮",
      },
      {
        foodName: "PEPPERONI FEAST",
        ingredients: "Loaded with pepperoni and melted mozzarella on a crispy crust.",
        price: "34,500₮",
      },
      {
        foodName: "VEGETARIAN DELIGHT",
        ingredients: "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes.",
        price: "29,900₮",
      }
    ]
  },
]

function Card(props){ 
  return(
    <div className="group-1">
        <div className="title">
            <p>
              {props.category.categoryName}
            </p>
        </div>

        <div className="sector-1">
            <div className="food-1">
                <p>
                {props.category.foods[0].foodName}
                </p>
                <p>
                {props.category.foods[0].price}
                </p>
            </div>
            <div className="ingre-1">
                <p>
                {props.category.foods[0].ingredients}
                </p>
            </div>
        </div>
        <div className="sector-2">
        <div className="food-2">
                <p>
                {props.category.foods[1].foodName}
                </p>
                <p>
                {props.category.foods[1].price}
                </p>
            </div>
            <div className="ingre-2">
                <p>
                {props.category.foods[1].ingredients}
                </p>
            </div>
        </div>
        <div className="sector-3">
        <div className="food-3">
                <p>
                {props.category.foods[2].foodName}
                </p>
                <p>
                {props.category.foods[2].price}
                </p>
            </div>
            <div className="ingre-3">
                <p>
                {props.category.foods[2].ingredients}
                </p>
            </div>
        </div>
    </div>
  );
}

export default function Home() {
  const cards = [];
  for (let i = 0; i < categories.length; i++) {
    cards.push(<Card category = {categories[i]}></Card>)
  }
  return <div className="header">
    <h1>
      PRANZO
    </h1>
    <div className="container">
      {cards}
    </div>
  </div>
}
