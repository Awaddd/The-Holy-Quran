import React from 'react';
import { Story, Meta } from '@storybook/react';
import Panel, { PanelProps } from './Panel'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

export default {
    title: 'Panel',
    component: Panel,
} as Meta;

const Template: Story<PanelProps> = (args) => {
    return (
        <Grid>
            <Row>
                <Col>
                    <Panel name="Al Furqan" description='The Criterion' />
                </Col>
            </Row>
        </Grid>
    );
};

export const Primary = Template.bind({});
Primary.args = {};
