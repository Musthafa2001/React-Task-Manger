import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <div>
            <header className='header'>
                <h1 >{title}</h1>
                <Button />
            </header>

        </div>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'

}
export default Header
