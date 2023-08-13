import { formatCurrency } from '../../utils/format/formatCurrency';
import * as Styled from './CardProduct.style';
import PropTypes from 'prop-types';

export const CardProduct = ({ data }) => {
    const { name, image, price, description } = data
    return (
        <>

            <Styled.CardContainer>
                <Styled.CardImage src={image} />
                <Styled.CardText>
                    <Styled.ProductTitle>{name}</Styled.ProductTitle>
                    <Styled.ProductText>{description}</Styled.ProductText>
                    <Styled.ProductPrice>{formatCurrency(price, "BRL")} Kg</Styled.ProductPrice>


                </Styled.CardText>

            </Styled.CardContainer>


        </>


    )
}

CardProduct.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,        
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
}