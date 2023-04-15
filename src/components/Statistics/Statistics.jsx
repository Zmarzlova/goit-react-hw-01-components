import PropTypes from "prop-types"
import { Item, Label, Percentage, StatisticsUl, StatList, Title } from "./Statistics.styled"

export const Statistics = ({title, stats}) => {
    return  <StatisticsUl>
        {title && <Title>{title}</Title>}

        <StatList>
          {stats.map(stat => {
                return (
                    <Item key={stat.id}>
                        <Label>{stat.label}</Label>
                        <Percentage>{stat.percentage}%</Percentage>
                    </Item>
                )
            })}
        </StatList>
    </StatisticsUl>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,    
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}