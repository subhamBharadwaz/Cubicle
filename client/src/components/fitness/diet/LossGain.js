import React from "react";
import styled from "styled-components";
export const LossGain = () => {
  return (
    <Main>
      <Gain>
        <h1>
          Diet For <spans>Gaining</spans> Weight
        </h1>
        <ol>
          <li>
            <h3>Milk</h3>
            <p>Milk offers a mix of fat, carbohydrates, and proteins.</p>
            <p>
              It is also an excellent source of vitamins and minerals, including
              calcium.
            </p>
            <p>
              The protein content of milk makes it a good choice for people
              trying to build muscle.
            </p>
          </li>
          <li>
            <h3>Rice</h3>
            <p>
              A cup of rice contains about 200 caloriesTrusted Source, and it is
              also a good source of carbohydrates, which contribute to weight
              gain. Many people find it easy to incorporate rice into meals
              containing proteins and vegetables.
            </p>
          </li>
          <li>
            <h3>Nuts and nut butter</h3>
            <p>
              Consuming nuts regularly can help a person to gain weight safely.
              Nuts are a great snack and can be added to many meals, including
              salads. Raw or dry roasted nuts have the most health benefits.
            </p>
            <p>
              Nut butters made without added sugar or hydrogenated oils can also
              help. The only ingredient in these butters should be the nuts
              themselves.
            </p>
          </li>
          <li>
            <h3>Whole-grain breads</h3>
            <p>
              These breads contain complex carbohydrates, which can promote
              weight gain. Some also contain seeds, which provide added
              benefits.
            </p>
          </li>
          <li>
            <h3>Dried fruits</h3>
            <p>
              Dried fruits are rich in nutrients and calories, with one-quarter
              cup of dried cranberries containing around 130 calories.
            </p>
            <p>
              Many people prefer dried pineapple, cherries, or apples. Dried
              fruit is widely available online, or a person can dry fresh fruit
              at home.
            </p>
          </li>
          <li>
            <h3>Dark chocolate</h3>
            <p>
              Dark chocolate is a high fat, high-calorie food. It also contains
              antioxidants. A person looking to gain weight should select
              chocolate that has a cacao content of at least 70 percent.
            </p>
          </li>
          <li>
            <h3>Whole-grain cereals</h3>
            <p>
              Many cereals are fortified with vitamins and minerals. However,
              some contain a lot of sugar and few complex carbohydrates. These
              should be avoided.
            </p>
          </li>
          <li>
            <h3>Eggs</h3>
            <p>
              Eggs are a good source of protein, healthy fat, and other
              nutrients. Most nutrients are contained in the yolk.
            </p>
          </li>
          <li>
            <h3>Fats and oils</h3>
            <p>
              Oils, such as those derived from olives and avocados, contribute
              calories and heart-healthy unsaturated fats. A tablespoon of olive
              oil will contain about 120 calories.
            </p>
          </li>
          <li>
            <h3>Protein supplements</h3>
            <p>
              Athletes looking to gain weight often use protein supplements to
              boost muscle mass, in combination with resistance training.
            </p>
            <p>
              Protein supplements are available for purchase online. They may be
              an inexpensive way to consume more calories and gain weight.
            </p>
          </li>
        </ol>
      </Gain>
      <Loss>
        <h1>
          Diet To <spans>Lose</spans> Weight
        </h1>
        <ol>
          <li>
            <h3>Cut back on refined carbs</h3>
            <p>
              One way to lose weight quickly is to cut back on sugars and
              starches, or carbohydrates. This could be with a low carb eating
              plan or by reducing refined carbs and replacing them with whole
              grains.
            </p>
            <p>
              With a low carb eating plan, you’ll utilize burning stored fat for
              energy instead of carbs.
            </p>
            <p>
              If you choose to eat more complex carbs like whole grains along
              with a calorie deficit, you’ll benefit from higher fiber and
              digest them more slowly. This makes them more filling to keep you
              satisfied.
            </p>
          </li>
          <li>
            <h3>Eat protein, fat, and vegetables</h3>
            <p>Each one of your meals should include:</p>
            <ul>
              <li>
                A protein source
                <p>
                  Healthy protein sources like Meat, fish and seafood, eggs,
                  plant-based protein
                </p>
              </li>
              <li>
                Fat source
                <p>Don’t be afraid of eating fats.</p>
                <p>
                  Your body still requires healthy fats no matter what eating
                  plan you choose. Olive oil and avocado oil are great choices
                  for including in your eating plan.
                </p>
                <p>
                  Other fats such as butter and coconut oil should be used only
                  in moderation due to their higher saturated fat conten
                </p>
              </li>
              <li>
                Vegetables
                <p></p>
              </li>
              <li>
                A small portion of complex carbohydrates, such as whole grains
                <p></p>
              </li>
            </ul>
          </li>
        </ol>
      </Loss>
    </Main>
  );
};

const Main = styled.div`
  background-size: cover;
  background-image: url(https://images.pexels.com/photos/289368/pexels-photo-289368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  padding: 1rem;
`;
const Gain = styled.div`
  margin: auto;
  width: 80%;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 40px;
  margin-bottom: 35px;
  h1 {
    margin: 1rem;
  }
  spans {
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
    background: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 48rem) {
    width: 100%;
  }
`;
const Loss = styled.div`
  margin: auto;
  padding: 3rem;
  border-radius: 40px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  h1 {
    margin: 1rem;
  }
  h3 {
    margin: 0.5rem;
  }
  spans {
    color: #ff3d3d;
  }
  p {
    padding: 2px;
  }
  transition: all 0.75s ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
