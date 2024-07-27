import {Component} from "react";

class DropdownSvg extends Component<{ active: boolean }> {
  render() {
    const {active} = this.props;
    return (
        <svg
            width="10px" // Decreased width
            height="6px" // Decreased height
            viewBox="57 35.171 26 16.043"
            fill={active ? 'red' : 'white'} // Fill color set to white

            className='group-hover:fill-secondary transition-all duration-300'
        >
          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
        </svg>
    );
  }
}

export default DropdownSvg;
