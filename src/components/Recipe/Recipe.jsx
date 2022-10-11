import PropTypes from 'prop-types';
import { Title, Wrapper } from './Recipe.styled'
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo'
import {RecipeDifficulty} from 'components/RecipeDifficulty/RecipeDifficulty'

export const Recipe = ({ recipe: { name, time, servings, calories,difficulty} }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <RecipeInfo
        time={time} servings={servings} calories={calories} />
      <RecipeDifficulty difficulty={difficulty} />
    </Wrapper>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }),
};