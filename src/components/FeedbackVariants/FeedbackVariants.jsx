import { StyledList } from "components/StyledCommon/List.styled"
import { StyledListItem } from "components/StyledCommon/ListItem.styled"
import {StyledButton} from "components/FeedbackVariants/Button.styled"
import PropTypes from 'prop-types';

export const FeedbackVariants = (props) => {
  
    const {variants, onClick} = props
    return (<StyledList>
      {variants.map(variant => {
        return (
          <StyledListItem key={variant}>
            <StyledButton
              type="button"
              name={variant}
              onClick={onClick}
              
            >
              {variant.toUpperCase()}
            </StyledButton>
          </StyledListItem>
        );
      })}
    </StyledList>)
}

FeedbackVariants.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
}