import React from 'react';
import Layout from './../layout';
import styled from 'styled-components';

const AboutPage: React.FC = () => {
    return (
        <Layout title="About Us"> {/* Add the title property */}
            <AboutContainer>
                <AboutContent>
                    <h1>About Us</h1>
                    <p>Welcome to our About page!</p>
                    <p>We are a team dedicated to building awesome applications.</p>
                </AboutContent>
            </AboutContainer>
        </Layout>
    );
};

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AboutContent = styled.div`
  text-align: center;
`;

export default AboutPage;
