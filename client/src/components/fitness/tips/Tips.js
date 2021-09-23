import React from "react";
import styled from "styled-components";

export const Tips = () => {
  return (
    <Main>
      <Content>
        <h1>
          Pro Tips For <span>Staying</span> Healthy
        </h1>
        <ol>
          <li>
            <h3>Don’t drink sugar calories</h3>
            <p>
              Sugary drinks are among the most fattening items you can put into
              your body.
            </p>
            <p>
              This is because your brain doesn’t measure calories from liquid
              sugar the same way it does for solid food.
            </p>
            <p>
              Keep in mind that certain fruit juices may be almost as bad as
              soda in this regard, as they sometimes contain just as much sugar.
              Their small amounts of antioxidants do not negate the sugar’s
              harmful effects.
            </p>
          </li>
          <li>
            <h3>Eat nuts</h3>
            <p>
              Despite being high in fat, nuts are incredibly nutritious and
              healthy.
            </p>
            <p>
              They’re loaded with magnesium, vitamin E, fiber, and various other
              nutrients.
            </p>
            <p>
              Additionally, your body doesn’t absorb 10–15% of the calories in
              nuts. Some evidence also suggests that this food can boost
              metabolism.
            </p>
          </li>
          <li>
            <h3>Avoid processed junk food (eat real food instead)</h3>
            <p>Processed junk food is incredibly unhealthy.</p>
            <p>
              These foods have been engineered to trigger your pleasure centers,
              so they trick your brain into overeating — even promoting food
              addiction in some people
            </p>
            <p>
              They’re usually low in fiber, protein, and micronutrients but high
              in unhealthy ingredients like added sugar and refined grains.
              Thus, they provide mostly empty calories.
            </p>
          </li>
          <li>
            <h3>Get enough sleep</h3>
            <p>
              The importance of getting enough quality sleep cannot be
              overstated.
            </p>
            <p>
              Poor sleep can drive insulin resistance, disrupt your appetite
              hormones, and reduce your physical and mental performance.
            </p>
            <p>
              What’s more, poor sleep is one of the strongest individual risk
              factors for weight gain and obesity. One study linked insufficient
              sleep to an 89% and 55% increased risk of obesity in children and
              adults, respectively.
            </p>
          </li>
          <li>
            <h3>Take care of your gut health with probiotics and fiber</h3>
            <p>
              The bacteria in your gut, collectively called the gut microbiota,
              are incredibly important for overall health.
            </p>
            <p>
              A disruption in gut bacteria is linked to some of the world’s most
              serious chronic diseases, including obesity.
            </p>
          </li>
          <li>
            <h3>Drink some water, especially before meals</h3>
            <p>
              Drink some water, especially before meals. Surprisingly, it can
              boost the number of calories you burn.
            </p>
            <p>
              The optimal time to drink it is before meals. One study showed
              that downing 2.1 cups (500 ml) of water 30 minutes before each
              meal increased weight loss by 44%.
            </p>
          </li>
          <li>
            <h3>Avoid bright lights before sleep</h3>
            <p>
              When you’re exposed to bright lights in the evening, it may
              disrupt your production of the sleep hormone melatonin.
            </p>
            <p>
              One strategy is to use a pair of amber-tinted glasses that block
              blue light from entering your eyes in the evening. This allows
              melatonin to be produced as if it were completely dark, helping
              you sleep better.
            </p>
          </li>
          <li>
            <h3>Take vitamin D3 if you don’t get much sun exposure</h3>
            <p>
              Sunlight is a great source of vitamin D. Yet, most people don’t
              get enough sun exposure.
            </p>
            <p>
              In fact, about 41.6% of the U.S. population is deficient in this
              critical vitamin.
            </p>
            <p>
              Their benefits include improved bone health, increased strength,
              reduced symptoms of depression, and a lower risk of cancer.
              Vitamin D may also help you live longer.
            </p>
          </li>
          <li>
            <h3>Eat vegetables and fruits</h3>
            <p>
              Vegetables and fruits are loaded with prebiotic fiber, vitamins,
              minerals, and many antioxidants, some of which have potent
              biological effects.
            </p>
            <p>
              Studies show that people who eat the most vegetables and fruits
              live longer and have a lower risk of heart disease, type 2
              diabetes, obesity, and other illnesses.
            </p>
          </li>
          <li>
            <h3>Make sure to eat enough protein</h3>
            <p>
              Eating enough protein is vital for optimal health. What’s more,
              this nutrient is particularly important for weight loss.
            </p>
            <p>
              High protein intake can boost metabolism significantly while
              making you feel full enough to automatically eat fewer calories.
              It can also reduce cravings and your desire to snack late at
              night.
            </p>
            <p>
              Sufficient protein intake has also been shown to lower blood sugar
              and blood pressure levels.
            </p>
          </li>
        </ol>
      </Content>
    </Main>
  );
};
// const Main = styled.div`
//   padding: 1rem;
//   background-size: cover;
//   /* background-image: url(https://images.pexels.com/photos/4098232/pexels-photo-4098232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); */
//   /* background-image: linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%); */
//   background-image: linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%);
// `;

// const Content = styled.div`
//   margin: auto;
//   padding: 3rem;
//   background: rgba(0, 0, 0, 0.8);
//   color: white;
//   border-radius: 40px;

//   h1 {
//     margin: 1rem;
//   }
//   span {
//     color: #ff3d3d;
//   }
//   h3 {
//     margin: 0.5rem;
//   }
//   p {
//     padding: 2px;
//   }
//   transition: all 0.75s ease-in-out;
//   &:hover {
//     /* background: rgba(0, 0, 0, 0.8); */
//   }
// `;

const Main = styled.div`
  padding: 1rem;
  background-size: cover;

  background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
`;

const Content = styled.div`
  margin: auto;
  margin-bottom: 6rem;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 40px;

  h1 {
    margin: 1rem;
  }
  span {
    color: #ff3d3d;
  }
  h3 {
    margin: 0.5rem;
  }
  p {
    padding: 2px;
  }
  transition: all 0.75s ease-in-out;
  &:hover {
    /* background: rgba(0, 0, 0, 0.8); */
  }
`;
