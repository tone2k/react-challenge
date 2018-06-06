import React from 'react';
import {shallow,mount} from 'enzyme';

import ShuffleButton from './ShuffleButton';

describe('<ShuffleButton />', () => {
            it('Renders without crashing', () => {
                shallow( < ShuffleButton / > );
            })
});
