import { FC, Fragment } from 'react';
import Contact from '../components/index/Contact';
import Benefit from '../components/index/Benefit';
import Instagram from '../components/index/Instagram';
import Integrations from '../components/index/Integrations';

const Index: FC = () => {

    return (
        <Fragment>
            <Benefit />
            <Instagram />
            <Integrations />
            <Contact />
        </Fragment>
    )
}

export default Index;
