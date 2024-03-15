import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('clicked')
    }
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button label='Add' color='green' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'React'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// Css in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
