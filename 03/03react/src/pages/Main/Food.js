import React,{memo} from 'react';
import styled from 'styled-components';
import food1 from '../../assets/img/food1.jpg';
import food2 from '../../assets/img/food2.jpg';
import food3 from '../../assets/img/food3.jpg';
import food4 from '../../assets/img/food4.jpg';
import food5 from '../../assets/img/food5.jpg';
import food6 from '../../assets/img/food6.jpg';
import food7 from '../../assets/img/food7.jpg';
import food8 from '../../assets/img/food8.jpg';
import mq from '../../MediaQuery';

const FoodContainer = styled.div`
  .food {
    width: 22%;
    float: left;
    margin: 0;
    margin-bottom: 60px;
    margin-right: 2%;
    ${mq.maxWidth('sm')`
      width: 91%;
    `}
    &:nth-child(4),&:nth-child(8) {
      margin-right: 0;
    }
  
    img {
      width: 100%;
      margin-bottom: 15px;
    }
    h3 {
      font-size: 25px;
      text-align: center;
      line-height: 1.15em;
    }
    p {
      text-align: center;
      font-size: 15px;
      margin-top: 15px;
      line-height: 1.15em;
    }
  }
`;

const foodList = [
    {img: food1, title: 'The Perfect Sandwich, A Real NYC Classic', content: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: food2, title: 'Let Me Tell You About This Steak', content: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: food3, title: 'Cherries, interrupted', content: 'Lorem ipsum text praesent tincidunt ipsum lipsum. What else?'},
    {img: food4, title: 'Once Again, Robust Wine and Vegetable Pasta', content: 'Lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: food5, title: 'All I Need Is a Popsicle', content: 'Lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: food6, title: 'Salmon For Your Skin', content: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: food7, title: 'The Perfect Sandwich, A Real NYC Classic', content: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: food8, title: 'Le French', content: 'Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'}
  ];

const Food = memo(() => {
  return (
    <FoodContainer>
        <div>
            {foodList.map((v,i) => {
              return (
                <div className='food' key={i}>
                    <img src={v.img} alt='food' />
                    <h3>{v.title}</h3>
                    <p>{v.content}</p>
                </div>
              )
            })}
      </div>
    </FoodContainer>
  );
});

export default Food;