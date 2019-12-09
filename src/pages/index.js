import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <h1>Hello World</h1>
    <Link to="/help/">Help</Link>
  </Layout>
);
