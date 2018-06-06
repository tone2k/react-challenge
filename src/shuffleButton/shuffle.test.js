import React from 'react';
import {shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShuffleButton from './ShuffleButton';

Enzyme.configure({
    adapter: new Adapter()
})

describe('<ShuffleButton />', () => {
            it('Renders without crashing', () => {
                shallow( < ShuffleButton / > );
            })
});
