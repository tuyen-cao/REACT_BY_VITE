import { Rating } from '@/models';
import styled from 'styled-components'

export interface RatingProps {
    rating: Rating
}

export function RatingBlock(props: RatingProps) {
    const { rating = {
        rate: 0,
        count: 0
    } } = props
    const rate = rating.rate
    const renderRating = () => {
        let content = []
        for (let index = 0; index < 5; index++) {
            const className = index < rate ? 'fa fa-star' : 'fa fa-star-o'
            content.push(<i className={'fa ' + className} key={"star" + index} />)
        }
        return content
    }
    return (
        <RatingStyled className="rating">
            {renderRating()}
        </RatingStyled>
    )
}

const RatingStyled = styled.div`
    &.rating {
        i {
            margin: 0;
            &.fa-star {
                color: #f7941d
             }
        }
    }
    
`