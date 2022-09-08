import './HomeFilters.css'

const HomeFilters = ({ selected, filters, handleFilterSelect }) => {
  return (
    <>
      <p
        className={`filter ${selected === 0 ? 'selected' : ''}`}
        onClick={() => handleFilterSelect(0)}
      >
        All
      </p>
      {filters.map(filter => {
        return (
          <p
            key={filter.name}
            className={`filter ${selected === filter.id ? 'selected' : ''}`}
            onClick={() => handleFilterSelect(filter.id)}
          >
            {filter.name}
          </p>
        )
      })}
    </>
  )
}

export default HomeFilters
