import React from 'react';
import {shallow,mount} from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
            it('Renders without crashing', () => {
                shallow( < Card / > );
            });
});