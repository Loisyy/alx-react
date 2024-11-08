import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils";

function Footer() {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders properly', () => {
  shallow(<Footer />);
});

it('checking renders', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
});
    </div>
  );
}

export default Footer;
